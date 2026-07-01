import { useCallback, useMemo, useRef, useState } from "react"

function getSlideStep(slider) {
    const slide = slider?.querySelector(".video-testimonial-slide")

    if (!slider || !slide) {
        return 0
    }

    const sliderStyles = window.getComputedStyle(slider)
    const gap = Number.parseFloat(sliderStyles.columnGap || sliderStyles.gap) || 0

    return slide.getBoundingClientRect().width + gap
}

export function useVideoTestimonialsSlider() {
    const sliderRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [shouldLoadVideos, setShouldLoadVideos] = useState(false)

    const scrollByDirection = useCallback((direction) => {
        setShouldLoadVideos(true)

        const slider = sliderRef.current
        const distance = getSlideStep(slider) || slider?.clientWidth || 0

        slider?.scrollBy({
            left: direction * distance,
            behavior: "smooth",
        })
    }, [])

    const scrollToIndex = useCallback((index) => {
        setShouldLoadVideos(true)

        const slider = sliderRef.current
        const slideStep = getSlideStep(slider)

        if (!slider || !slideStep) {
            return
        }

        slider.scrollTo({
            left: index * slideStep,
            behavior: "smooth",
        })
    }, [])

    const updateActiveIndex = useCallback(() => {
        const slider = sliderRef.current
        const slideStep = getSlideStep(slider)

        if (!slider || !slideStep) {
            return
        }

        setActiveIndex(Math.round(slider.scrollLeft / slideStep))
    }, [])

    return useMemo(() => ({
        activeIndex,
        setShouldLoadVideos,
        shouldLoadVideos,
        sliderRef,
        scrollByDirection,
        scrollToIndex,
        updateActiveIndex,
    }), [activeIndex, scrollByDirection, scrollToIndex, shouldLoadVideos, updateActiveIndex])
}
