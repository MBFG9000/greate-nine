"use client"

import { useEffect } from "react"

const GTM_ID = "GTM-KNDQPB56"
const PRODUCTION_HOSTNAMES = new Set(["duronconstruction.kz", "www.duronconstruction.kz"])

export default function DeferredGtm() {
    useEffect(() => {
        // Preview deployments must never send analytics or Ads traffic.
        if (!PRODUCTION_HOSTNAMES.has(window.location.hostname)) return

        let timeoutId
        let idleId
        let loaded = false
        let scheduled = false
        const interactionEvents = ["pointerdown", "keydown"]

        const loadGtm = () => {
            if (loaded) return
            loaded = true

            interactionEvents.forEach((eventName) => window.removeEventListener(eventName, scheduleGtm))
            window.clearTimeout(timeoutId)

            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" })

            const script = document.createElement("script")
            script.async = true
            script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
            document.head.appendChild(script)
        }

        const scheduleGtm = () => {
            if (scheduled || loaded) return
            scheduled = true

            if ("requestIdleCallback" in window) {
                idleId = window.requestIdleCallback(loadGtm, { timeout: 2000 })
                return
            }

            loadGtm()
        }

        interactionEvents.forEach((eventName) => {
            window.addEventListener(eventName, scheduleGtm, { once: true, passive: true })
        })
        timeoutId = window.setTimeout(scheduleGtm, 8000)

        return () => {
            interactionEvents.forEach((eventName) => window.removeEventListener(eventName, scheduleGtm))
            window.clearTimeout(timeoutId)

            if (idleId && "cancelIdleCallback" in window) {
                window.cancelIdleCallback(idleId)
            }
        }
    }, [])

    return null
}
