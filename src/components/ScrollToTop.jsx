"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

import { scrollToSection } from "../utils/scrollToSection"

function ScrollToTop() {
    const pathname = usePathname()

    useEffect(() => {
        if (window.location.hash) {
            const id = decodeURIComponent(window.location.hash.slice(1))
            let secondFrame
            const firstFrame = window.requestAnimationFrame(() => {
                secondFrame = window.requestAnimationFrame(() => {
                    scrollToSection(id, { behavior: "auto", updateHash: false })
                })
            })

            return () => {
                window.cancelAnimationFrame(firstFrame)

                if (secondFrame) {
                    window.cancelAnimationFrame(secondFrame)
                }
            }
        }

        window.scrollTo({ top: 0, behavior: "auto" })
        return undefined
    }, [pathname])

    return null
}

export default ScrollToTop
