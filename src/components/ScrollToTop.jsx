import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTop() {
    const { hash, pathname } = useLocation()

    useEffect(() => {
        if (hash) {
            return
        }

        window.scrollTo({ top: 0, behavior: "auto" })
    }, [hash, pathname])

    return null
}

export default ScrollToTop
