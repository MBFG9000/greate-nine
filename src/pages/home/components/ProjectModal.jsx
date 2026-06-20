import { MapPin, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const closeAnimationDuration = 220

export function ProjectModal({ project, onClose }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const [isClosing, setIsClosing] = useState(false)
    const dialogRef = useRef(null)
    const closeButtonRef = useRef(null)
    const closeTimerRef = useRef(null)

    useEffect(() => {
        setActiveImageIndex(0)
        setIsClosing(false)
    }, [project])

    useEffect(() => {
        if (!project) {
            return undefined
        }

        const previouslyFocusedElement = document.activeElement
        document.body.classList.add("project-modal-open")
        closeButtonRef.current?.focus()

        return () => {
            document.body.classList.remove("project-modal-open")
            window.clearTimeout(closeTimerRef.current)
            previouslyFocusedElement?.focus?.()
        }
    }, [project])

    if (!project) {
        return null
    }

    const requestClose = () => {
        if (isClosing) {
            return
        }

        setIsClosing(true)
        closeTimerRef.current = window.setTimeout(onClose, closeAnimationDuration)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            requestClose()
            return
        }

        if (event.key !== "Tab") {
            return
        }

        const focusableElements = dialogRef.current?.querySelectorAll("button:not([disabled]), a[href]")
        if (!focusableElements?.length) {
            return
        }

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault()
            lastElement.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault()
            firstElement.focus()
        }
    }

    return createPortal(
        <div
            className={`project-modal-backdrop${isClosing ? " is-closing" : ""}`}
            onKeyDown={handleKeyDown}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    requestClose()
                }
            }}
            role="presentation"
        >
            <section
                className="project-modal-dialog"
                aria-labelledby="project-modal-title"
                aria-modal="true"
                ref={dialogRef}
                role="dialog"
            >
                <button
                    className="project-modal-close"
                    type="button"
                    aria-label="Закрыть проект"
                    onClick={requestClose}
                    ref={closeButtonRef}
                >
                    <X aria-hidden="true" size={24} strokeWidth={2.2} />
                </button>

                <div className="project-modal-gallery">
                    <div className="project-modal-main-image">
                        <img
                            src={project.images[activeImageIndex]}
                            alt={`${project.title}, фотография ${activeImageIndex + 1}`}
                            width="1200"
                            height="820"
                            decoding="async"
                            key={project.images[activeImageIndex]}
                        />
                    </div>

                    {project.images.length > 1 && (
                        <div className="project-modal-thumbnails" aria-label="Фотографии проекта">
                            {project.images.map((image, index) => (
                                <button
                                    className={index === activeImageIndex ? "is-active" : ""}
                                    type="button"
                                    aria-label={`Показать фотографию ${index + 1}`}
                                    aria-pressed={index === activeImageIndex}
                                    onClick={() => setActiveImageIndex(index)}
                                    key={image}
                                >
                                    <img src={image} alt="" width="180" height="120" loading="lazy" decoding="async" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="project-modal-content">
                    <p className="project-modal-category">{project.category}</p>
                    <h2 id="project-modal-title">{project.title}</h2>
                    <p className="project-modal-location">
                        <MapPin aria-hidden="true" size={18} strokeWidth={2.2} />
                        {project.location}
                    </p>
                    <p className="project-modal-description">{project.description}</p>
                    <a className="project-modal-cta" href="#contact" onClick={requestClose}>
                        Связаться
                    </a>
                </div>
            </section>
        </div>,
        document.body,
    )
}
