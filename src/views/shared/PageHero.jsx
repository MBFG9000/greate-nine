export function PageHero({
    as: Component = "section",
    eyebrow,
    title,
    text,
    image,
    imagePosition = "center",
    imageWidth = 1600,
    imageHeight = 900,
}) {
    return (
        <Component className="page-hero">
            <img
                className="page-hero-image"
                src={image}
                alt=""
                aria-hidden="true"
                style={{ objectPosition: imagePosition }}
                width={imageWidth}
                height={imageHeight}
                loading="eager"
                decoding="async"
            />
            <div className="page-hero-overlay"></div>
            <div className="page-hero-content">
                <p className="page-hero-eyebrow">{eyebrow}</p>
                <h1>{title}</h1>
                <p>{text}</p>
                <a className="page-hero-link" href="/">
                    На главную
                </a>
            </div>
        </Component>
    )
}
