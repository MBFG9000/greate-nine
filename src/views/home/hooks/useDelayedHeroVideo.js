import { useEffect, useState } from "react"

export function useDelayedHeroVideo() {
    const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false)

    useEffect(() => {
        let idleId
        let timeoutId
        let fallbackId
        let hasScheduled = false

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
        const hasConstrainedConnection = connection?.saveData || ["slow-2g", "2g"].includes(connection?.effectiveType)

        if (prefersReducedMotion || hasConstrainedConnection) {
            return undefined
        }

        const scheduleHeroVideo = () => {
            if (hasScheduled) {
                return
            }

            hasScheduled = true
            const loadHeroVideo = () => setShouldLoadHeroVideo(true)

            if ("requestIdleCallback" in window) {
                idleId = window.requestIdleCallback(loadHeroVideo, { timeout: 5000 })
                return
            }

            timeoutId = window.setTimeout(loadHeroVideo, 1500)
        }

        const interactionEvents = ["pointerdown", "keydown"]
        interactionEvents.forEach((eventName) => {
            window.addEventListener(eventName, scheduleHeroVideo, { once: true, passive: true })
        })

        fallbackId = window.setTimeout(scheduleHeroVideo, 12000)

        return () => {
            interactionEvents.forEach((eventName) => {
                window.removeEventListener(eventName, scheduleHeroVideo)
            })

            if (idleId) {
                window.cancelIdleCallback(idleId)
            }

            if (fallbackId) {
                window.clearTimeout(fallbackId)
            }

            if (timeoutId) {
                window.clearTimeout(timeoutId)
            }
        }
    }, [])

    return shouldLoadHeroVideo
}
