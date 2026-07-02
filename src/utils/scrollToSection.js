const getSectionTop = (target) => {
    const homePage = target.closest(".home-hero-section")

    if (homePage && !homePage.classList.contains("is-anchor-layout-ready")) {
        homePage.classList.add("is-anchor-layout-ready")
    }

    const header = document.querySelector(".site-header")
    const headerOffset = (header?.getBoundingClientRect().height || 56) + 10

    return Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset)
}

let cancelActiveScrollCorrection = () => {}

export function scrollToSection(id, { behavior = "smooth", updateHash = true } = {}) {
    const target = document.getElementById(id)

    if (!target) {
        return false
    }

    cancelActiveScrollCorrection()
    window.scrollTo({ top: getSectionTop(target), behavior })

    if (updateHash) {
        window.history.pushState(null, "", `#${id}`)
    }

    const cancelEvents = ["wheel", "touchstart", "pointerdown", "keydown"]
    let cancelledByUser = false

    const removeCancelListeners = () => {
        cancelEvents.forEach((eventName) => window.removeEventListener(eventName, cancelOnUserInput))
    }

    const cancelOnUserInput = () => {
        cancelledByUser = true
        window.clearTimeout(correctionTimer)
        removeCancelListeners()
    }

    cancelEvents.forEach((eventName) => {
        window.addEventListener(eventName, cancelOnUserInput, { once: true, passive: true })
    })

    const correctionTimer = window.setTimeout(() => {
        removeCancelListeners()

        if (cancelledByUser) {
            return
        }

        const correctedTarget = document.getElementById(id)

        if (!correctedTarget) {
            return
        }

        const correctedTop = getSectionTop(correctedTarget)

        if (Math.abs(window.scrollY - correctedTop) > 3) {
            window.scrollTo({ top: correctedTop, behavior: "auto" })
        }
    }, 650)

    cancelActiveScrollCorrection = () => {
        window.clearTimeout(correctionTimer)
        removeCancelListeners()
    }

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
