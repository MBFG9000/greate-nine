import { useEffect, useState } from "react"

export function useDelayedHeroVideo() {
    const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false)

    useEffect(() => {
        let idleId
        let timeoutId

        const scheduleHeroVideo = () => {
            const loadHeroVideo = () => setShouldLoadHeroVideo(true)

            if ("requestIdleCallback" in window) {
                idleId = window.requestIdleCallback(loadHeroVideo, { timeout: 3500 })
                return
            }

            timeoutId = window.setTimeout(loadHeroVideo, 2200)
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

            if (timeoutId) {
                window.clearTimeout(timeoutId)
            }
        }
    }, [])

    return shouldLoadHeroVideo
}
