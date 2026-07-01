const getSectionTop = (target) => {
    const header = document.querySelector(".site-header")
    const headerOffset = (header?.getBoundingClientRect().height || 56) + 10

    return Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset)
}

export function scrollToSection(id, { behavior = "smooth", updateHash = true } = {}) {
    const target = document.getElementById(id)

    if (!target) {
        return false
    }

    window.scrollTo({ top: getSectionTop(target), behavior })

    if (updateHash) {
        window.history.pushState(null, "", `#${id}`)
    }

    window.setTimeout(() => {
        const correctedTarget = document.getElementById(id)

        if (!correctedTarget) {
            return
        }

        const correctedTop = getSectionTop(correctedTarget)

        if (Math.abs(window.scrollY - correctedTop) > 3) {
            window.scrollTo({ top: correctedTop, behavior: "auto" })
        }
    }, 700)

    return true
}

export function waitForSectionAndScroll(id, options = {}) {
    let attempts = 0
    const maxAttempts = 30

    const tryScroll = () => {
        if (scrollToSection(id, options)) {
            return
        }

        attempts += 1

        if (attempts < maxAttempts) {
            window.setTimeout(tryScroll, 50)
        }
    }

    tryScroll()
}
