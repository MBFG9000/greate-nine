import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect } from "react"

import { VideoTestimonialSlide } from "../components/VideoTestimonialSlide"
import { useInViewFlag } from "../hooks/useInViewFlag"
import { useRevealSections } from "../hooks/useRevealSections"
import { useVideoTestimonialsSlider } from "../hooks/useVideoTestimonialsSlider"

export function VideoTestimonialsSection({ testimonials }) {
    const registerRevealSection = useRevealSections()
    const [sectionRef, testimonialsInView] = useInViewFlag({
        rootMargin: "320px 0px",
        threshold: 0,
    })
    const testimonialSlider = useVideoTestimonialsSlider()

    useEffect(() => {
        if (testimonialsInView) {
            testimonialSlider.setShouldLoadVideos(true)
        }
    }, [testimonialSlider, testimonialsInView])

    const {
        activeIndex,
        scrollByDirection,
        scrollToIndex,
        shouldLoadVideos,
        sliderRef,
        updateActiveIndex,
    } = testimonialSlider

    const setSectionRefs = (element) => {
        sectionRef.current = element
        registerRevealSection(element)
    }

    return (
        <section
            className="video-testimonials-section reveal-section"
            id="video-testimonials"
            ref={setSectionRefs}
        >
            <div className="video-testimonials-shell">
                <div className="video-testimonials-header reveal-item">
                    <h2 className="video-testimonials-title">Видеоотзывы клиентов</h2>
                </div>
                <div className="video-testimonials-stage">
                    <button
                        type="button"
                        className="video-testimonials-control video-testimonials-control-prev"
                        onClick={() => scrollByDirection(-1)}
                        aria-label="Показать предыдущий видеоотзыв"
                    >
                        <ChevronLeft aria-hidden="true" strokeWidth={2.2} />
                    </button>
                    <div
                        className="video-testimonials-slider"
                        ref={sliderRef}
                        onScroll={updateActiveIndex}
                        aria-label="Слайдер видеоотзывов клиентов"
                    >
                        {testimonials.map((testimonial, index) => (
                            <VideoTestimonialSlide
                                isActive={index === activeIndex}
                                key={testimonial.title}
                                shouldLoadVideos={shouldLoadVideos}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        className="video-testimonials-control video-testimonials-control-next"
                        onClick={() => scrollByDirection(1)}
                        aria-label="Показать следующий видеоотзыв"
                    >
                        <ChevronRight aria-hidden="true" strokeWidth={2.2} />
                    </button>
                </div>
                <div className="video-testimonials-dots" aria-label="Выбор видеоотзыва">
                    {testimonials.map((testimonial, index) => (
                        <button
                            type="button"
                            className={index === activeIndex ? "is-active" : ""}
                            key={testimonial.title}
                            onClick={() => scrollToIndex(index)}
                            aria-label={`Показать отзыв ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="video-testimonials-mobile-controls" aria-label="Управление видеоотзывами">
                    <button
                        type="button"
                        className="video-testimonials-control"
                        onClick={() => scrollByDirection(-1)}
                        aria-label="Показать предыдущий видеоотзыв"
                    >
                        <ChevronLeft aria-hidden="true" strokeWidth={2.2} />
                    </button>
                    <button
                        type="button"
                        className="video-testimonials-control"
                        onClick={() => scrollByDirection(1)}
                        aria-label="Показать следующий видеоотзыв"
                    >
                        <ChevronRight aria-hidden="true" strokeWidth={2.2} />
                    </button>
                </div>
            </div>
        </section>
    )
}
