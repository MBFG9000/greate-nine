import { useEffect, useRef, useState } from "react"

export function useInViewFlag({ rootMargin = "0px", threshold = 0 } = {}) {
    const elementRef = useRef(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const element = elementRef.current

        if (!element) {
            return undefined
        }

        if (!("IntersectionObserver" in window)) {
            setIsInView(true)
            return undefined
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    observer.disconnect()
                }
            },
            { rootMargin, threshold }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [rootMargin, threshold])

    return [elementRef, isInView]
}
