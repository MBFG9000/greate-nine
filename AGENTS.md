# Duron Construction — performance guardrails

These rules are mandatory for every change in this repository. Preserve the current first-load performance and route-specific CSS architecture.

## CSS delivery invariants

- The home route must emit exactly one external stylesheet.
- Every `/services` route must emit exactly one separate external stylesheet.
- Do not import CSS from `app/layout.jsx`. Shared styles are intentionally duplicated into the two route bundles to avoid an additional render-blocking request.
- `app/page.jsx` must import only `src/css/generated/home.css`.
- `app/services/layout.jsx` must import only `src/css/generated/services.css`.
- Source CSS remains split under `src/css/`. Never edit generated bundles as the primary source.
- `scripts/bundle-css.mjs` is the canonical ordered list of CSS sources. Add new source files there in the correct cascade order.
- `npm run dev` and `npm run build` regenerate the bundles through `predev` and `prebuild`. After changing CSS, run `npm run css:build` before inspecting generated output.
- Do not restore nested `@import` usage in `Home.css`; Turbopack turns it into multiple blocking chunks.
- Do not add `postcss-import`; it caused Turbopack production builds to hang.
- Do not enable `experimental.inlineCss`. It increased the home HTML from about 70 KB to about 183 KB by duplicating CSS in the RSC payload and regressed LCP.
- Do not defer all CSS. Above-the-fold styles are required to prevent FOUC and layout shift.

Expected production result after `npm run build`:

```bash
grep -o '<link[^>]*rel="stylesheet"[^>]*>' .next/server/app/index.html
grep -o '<link[^>]*rel="stylesheet"[^>]*>' .next/server/app/services/private-houses.html
```

Each command must print exactly one stylesheet. Current gzip size is approximately 9.6 KB per route bundle.

## Cross-route navigation

- Home and Services use different global route bundles. Next.js does not reliably unload global CSS during client navigation.
- Keep cross-route navigation as normal `<a href>` navigation or `window.location.assign`, so the browser performs a full document load and discards the previous route CSS.
- Do not replace these links with `next/link` or `router.push` unless the styles have first been migrated to CSS Modules and verified in both navigation directions.
- Test both sequences on mobile:
  1. Load Home, open a Service, return Home.
  2. Refresh a Service directly, then return Home.

## LCP and hero

- The current LCP element is `.hero-title` (`DURON CONSTRUCTION`).
- Never animate opacity, transform, visibility, or an ancestor of `.hero-title` during initial render.
- `.hero-content` must render immediately with `transform: none` and no entrance animation.
- Keep the hero poster as the initial visual. The poster image uses `fetchPriority="high"`; do not add a duplicate manual image preload in `app/layout.jsx`.
- The 6.9 MB hero video must not load during the critical rendering window.
- Preserve `useDelayedHeroVideo`: load after user interaction, with the delayed fallback, and skip constrained connections, Save-Data, and reduced motion.
- Do not preload the hero video or change it to `preload="auto"`/`metadata`.

## Third-party scripts

- Do not load GTM with `beforeInteractive`, `afterInteractive`, or immediate inline script.
- Keep `DeferredGtm`: GTM loads after the first interaction or the delayed fallback.
- Do not gate GTM with `VERCEL_ENV`; System Environment Variables may be disabled in the Vercel project.
- Keep the runtime hostname allowlist restricted to `duronconstruction.kz` and `www.duronconstruction.kz`. Never send analytics or Ads traffic from `*.vercel.app` preview deployments.
- Do not restore the GTM noscript iframe in the root layout: server-rendered markup cannot apply the client hostname allowlist, so it would expose GTM on Preview deployments.
- The GA ID `G-Q0QNWJ016V` currently returns 404. That must be fixed inside GTM container `GTM-KNDQPB56`, not by adding another analytics script to the application.

## Anchor scrolling

- Home uses `content-visibility: auto` below the hero. Before measuring a Home anchor, `scrollToSection` adds `is-anchor-layout-ready` so coordinates use real section heights.
- Do not add repeated late scroll corrections. They previously pulled users back after manual scrolling.
- The single correction must be cancelled immediately on wheel, touch, pointer, or keyboard input.
- The Services header contact button must target the local `#contact` section.

## Package safety

- Keep Next.js on the current 16.x line. Do not downgrade to Next 9.
- Never run or recommend `npm audit fix --force`; npm previously attempted to solve a PostCSS advisory by downgrading Next to 9.3.3 and installing about 1000 obsolete packages.
- Validate dependency changes with `npm ls next --depth=0`, lint, and a production build.

## Required verification

Before handing off changes that affect rendering, CSS, navigation, media, or dependencies, run:

```bash
npm run lint
npm run build
```

Also verify:

- one stylesheet on Home;
- one stylesheet on a Service page;
- no initial `gtm.js` request in generated Home HTML;
- no hero video URL in the initial server HTML;
- mobile layout after cross-route navigation;
- anchor scrolling from a cold page load and cancellation by manual scrolling.

Do not optimize solely to remove a Lighthouse warning. Use the LCP breakdown and preserve correctness, cacheability, mobile layout, and navigation behavior.
