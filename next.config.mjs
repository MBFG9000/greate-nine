/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        inlineCss: true,
    },
    env: {
        NEXT_PUBLIC_SHOW_DEFERRED_HOME_SECTIONS:
            process.env.NEXT_PUBLIC_SHOW_DEFERRED_HOME_SECTIONS ??
            process.env.VITE_SHOW_DEFERRED_HOME_SECTIONS ??
            "false",
    },
}

export default nextConfig
