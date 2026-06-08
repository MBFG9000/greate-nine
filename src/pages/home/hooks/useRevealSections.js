import { useCallback, useEffect, useRef } from "react"

export function useRevealSections() {
    const revealSectionsRef = useRef([])

    const registerRevealSection = useCallback((element) => {
        if (element && !revealSectionsRef.current.includes(element)) {
            revealSectionsRef.current.push(element)
        }
    }, [])

    useEffect(() => {
        document.documentElement.classList.add("js-enabled")

        const sections = revealSectionsRef.current.filter(Boolean)

        if (!("IntersectionObserver" in window)) {
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

        sections.forEach((section) => observer.observe(section))

        return () => {
            observer.disconnect()
        }
    }, [])

    return registerRevealSection
}
