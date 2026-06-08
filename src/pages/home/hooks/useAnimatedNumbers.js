import { useEffect, useState } from "react"

export function useAnimatedNumbers(items, isActive, duration = 1300) {
    const [numbers, setNumbers] = useState(items.map(() => 0))

    useEffect(() => {
        if (!isActive) {
            return undefined
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setNumbers(items.map((item) => item.value))
            return undefined
        }

        const startedAt = performance.now()
        let animationFrame = 0

        const animate = (currentTime) => {
            const progress = Math.min((currentTime - startedAt) / duration, 1)
            const easedProgress = 1 - Math.pow(1 - progress, 3)

            setNumbers(items.map((item) => Math.round(item.value * easedProgress)))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationFrame)
        }
    }, [duration, isActive, items])

    return numbers
}
