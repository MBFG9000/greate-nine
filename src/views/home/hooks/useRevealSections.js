import { useCallback, useEffect, useRef } from "react"

export function useRevealSections() {
    const revealSectionsRef = useRef([])
    const observerRef = useRef(null)
    const supportsObserverRef = useRef(true)

    const registerRevealSection = useCallback((element) => {
        if (!element || revealSectionsRef.current.includes(element)) {
            return
        }

        revealSectionsRef.current.push(element)

        if (!supportsObserverRef.current) {
            element.classList.add("is-visible")
            return
        }

        if (observerRef.current) {
            observerRef.current.observe(element)
        }
    }, [])

    useEffect(() => {
        document.documentElement.classList.add("js-enabled")

        const sections = revealSectionsRef.current.filter(Boolean)

        if (!("IntersectionObserver" in window)) {
            supportsObserverRef.current = false
            sections.forEach((section) => section.classList.add("is-visible"))
            return undefined
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                rootMargin: "0px 0px -12% 0px",
                threshold: 0.14,
            }
        )

        observerRef.current = observer
        sections.forEach((section) => observer.observe(section))

        return () => {
            observerRef.current = null
            observer.disconnect()
        }
    }, [])

    return registerRevealSection
}
