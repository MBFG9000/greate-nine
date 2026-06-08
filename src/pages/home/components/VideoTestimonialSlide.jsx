export function VideoTestimonialSlide({ isActive, shouldLoadVideos, testimonial }) {
    return (
        <article className="video-testimonial-slide reveal-item">
            <div className="video-testimonial-copy">
                <h3>{testimonial.title}</h3>
                <p>{testimonial.text}</p>
                <address>{testimonial.address}</address>
            </div>
            <video
                src={shouldLoadVideos && isActive ? testimonial.video : undefined}
                controls
                playsInline
                preload="none"
                aria-label={`Видеоотзыв клиента: ${testimonial.title}`}
            ></video>
        </article>
    )
}
