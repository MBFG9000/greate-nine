export function ProcessVideoSection({ registerRevealSection, sectionRef, shouldLoadVideo }) {
    const setSectionRefs = (element) => {
        sectionRef.current = element
        registerRevealSection(element)
    }

    return (
        <section
            className="process-video-section reveal-section"
            aria-label="Видео строительного процесса"
            ref={setSectionRefs}
        >
            <video
                src={shouldLoadVideo ? "/great-nine-construction-project-showcase.mp4" : undefined}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
            ></video>
        </section>
    )
}
