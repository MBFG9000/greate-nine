import { useEffect, useState } from "react"

export function useDelayedHeroVideo() {
    const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false)

    useEffect(() => {
        let idleId
        let timeoutId
        let startDelayId

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
        const hasConstrainedConnection = connection?.saveData || ["slow-2g", "2g"].includes(connection?.effectiveType)

        if (prefersReducedMotion || hasConstrainedConnection) {
            return undefined
        }

        const scheduleHeroVideo = () => {
            const loadHeroVideo = () => setShouldLoadHeroVideo(true)

            startDelayId = window.setTimeout(() => {
                if ("requestIdleCallback" in window) {
                    idleId = window.requestIdleCallback(loadHeroVideo, { timeout: 8000 })
                    return
                }

                timeoutId = window.setTimeout(loadHeroVideo, 2500)
            }, 1500)
        }

        if (document.readyState === "complete") {
            scheduleHeroVideo()
        } else {
            window.addEventListener("load", scheduleHeroVideo, { once: true })
        }

        return () => {
            window.removeEventListener("load", scheduleHeroVideo)

            if (idleId) {
                window.cancelIdleCallback(idleId)
            }

            if (startDelayId) {
                window.clearTimeout(startDelayId)
            }

            if (timeoutId) {
                window.clearTimeout(timeoutId)
            }
        }
    }, [])

    return shouldLoadHeroVideo
}
