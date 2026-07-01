"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

function ScrollToTop() {
    const pathname = usePathname()

    useEffect(() => {
        if (window.location.hash) {
            return
        }

        window.scrollTo({ top: 0, behavior: "auto" })
    }, [pathname])

    return null
}

export default ScrollToTop
