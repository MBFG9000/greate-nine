import "../css/Home.css"

import {
    BadgeCheck,
    Building,
    Building2,
    ChevronLeft,
    ChevronRight,
    ClipboardCheck,
    FileCheck2,
    Hammer,
    House,
    KeyRound,
    Layers,
    MapPin,
    MessageSquareText,
    PencilRuler,
    SearchCheck,
    ShieldCheck,
    TimerReset,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

const statistics = [
    {
        value: 120,
        title: "Частные дома",
        label: "Завершенных объектов",
        Icon: House,
    },
    {
        value: 12,
        title: "Коммерческие здания",
        label: "Сданных объектов",
        Icon: Building2,
    },
    {
        value: 8,
        title: "Офисы и салоны",
        label: "Готовых проектов",
        Icon: Building,
    },
    {
        value: 27,
        title: "Фасадные работы",
        label: "Завершенных проектов",
        Icon: Layers,
    },
]

const services = [
    {
        title: "Строительство домов",
        description: "Индивидуальные дома, виллы и частные пространства с точным планированием и чистым исполнением.",
        image: "/great-nine-residential-house-construction.webp",
        srcSet:
            "/great-nine-residential-house-construction-800.webp 800w, /great-nine-residential-house-construction-1200.webp 1200w, /great-nine-residential-house-construction.webp 1600w",
        alt: "Строительство современного частного дома Great Nine Construction",
        className: "service-card service-card-wide",
    },
    {
        title: "Коммерческое строительство",
        description: "Офисы, салоны, торговые и бизнес-пространства, готовые к ежедневной эксплуатации.",
        image: "/great-nine-commercial-building-construction.webp",
        srcSet:
            "/great-nine-commercial-building-construction-800.webp 800w, /great-nine-commercial-building-construction-1200.webp 1200w, /great-nine-commercial-building-construction.webp 1600w",
        alt: "Коммерческое здание построенное Great Nine Construction",
        className: "service-card service-card-tall",
    },
    {
        title: "Реновация",
        description: "Конструктивные обновления, отделка и трансформация существующих объектов.",
        image: "/great-nine-home-renovation-facade.webp",
        srcSet:
            "/great-nine-home-renovation-facade-800.webp 800w, /great-nine-home-renovation-facade-1200.webp 1200w, /great-nine-home-renovation-facade.webp 1600w",
        alt: "Реновация фасада частного дома от Great Nine Construction",
        className: "service-card",
    },
    {
        title: "Управление проектом",
        description: "График, бюджет, закупки и координация площадки от старта до сдачи объекта.",
        image: "/great-nine-construction-project-management.webp",
        srcSet:
            "/great-nine-construction-project-management-800.webp 800w, /great-nine-construction-project-management-1200.webp 1200w, /great-nine-construction-project-management.webp 1600w",
        alt: "Управление строительным проектом Great Nine Construction",
        className: "service-card",
    },
]

const structuralAdvantages = [
    {
        title: "Смета без скрытых решений",
        description: "Фиксируем состав работ, материалы и этапы до старта, чтобы бюджет был понятен на каждом шаге.",
        Icon: ClipboardCheck,
    },
    {
        title: "График привязан к этапам",
        description: "Планируем строительство по контрольным точкам и показываем, где находится проект прямо сейчас.",
        Icon: TimerReset,
    },
    {
        title: "Контроль качества внутри процесса",
        description: "Проверяем узлы, черновые работы и отделку до того, как ошибка станет дорогой переделкой.",
        Icon: ShieldCheck,
    },
    {
        title: "Один канал коммуникации",
        description: "Клиент, проектный менеджер и площадка работают в понятной системе решений, сроков и отчетов.",
        Icon: MessageSquareText,
    },
]

const projects = [
    {
        title: "Частная вилла",
        location: "Алматы",
        image: "/great-nine-private-villa-almaty.webp",
        srcSet:
            "/great-nine-private-villa-almaty-600.webp 600w, /great-nine-private-villa-almaty-900.webp 900w, /great-nine-private-villa-almaty.webp 1200w",
        alt: "Реализованный проект частной виллы в Алматы от Great Nine Construction",
        position: "center 35%",
    },
    {
        title: "Загородный дом",
        location: "Каскелен",
        image: "/great-nine-family-house-kaskelen.webp",
        srcSet:
            "/great-nine-family-house-kaskelen-600.webp 600w, /great-nine-family-house-kaskelen-900.webp 900w, /great-nine-family-house-kaskelen.webp 1200w",
        alt: "Загородный дом в Каскелене построенный Great Nine Construction",
        position: "center",
    },
    {
        title: "Коммерческий объект",
        location: "Астана",
        image: "/great-nine-commercial-project-astana.webp",
        srcSet:
            "/great-nine-commercial-project-astana-600.webp 600w, /great-nine-commercial-project-astana-900.webp 900w, /great-nine-commercial-project-astana.webp 1200w",
        alt: "Коммерческий объект в Астане реализованный Great Nine Construction",
        position: "center",
    },
    {
        title: "Дом под ключ",
        location: "Алматы",
        image: "/great-nine-mountain-home-almaty.webp",
        srcSet:
            "/great-nine-mountain-home-almaty-600.webp 600w, /great-nine-mountain-home-almaty-900.webp 900w, /great-nine-mountain-home-almaty.webp 1200w",
        alt: "Дом под ключ в Алматы с панорамными окнами от Great Nine Construction",
        position: "center 58%",
    },
    {
        title: "Реконструкция фасада",
        location: "Талгар",
        image: "/great-nine-facade-renovation-talgar.webp",
        srcSet:
            "/great-nine-facade-renovation-talgar-600.webp 600w, /great-nine-facade-renovation-talgar-900.webp 900w, /great-nine-facade-renovation-talgar.webp 1200w",
        alt: "Реконструкция фасада дома в Талгаре от Great Nine Construction",
        position: "center 40%",
    },
    {
        title: "Офисное пространство",
        location: "Алматы",
        image: "/great-nine-office-showroom-almaty.webp",
        srcSet:
            "/great-nine-office-showroom-almaty-600.webp 600w, /great-nine-office-showroom-almaty-900.webp 900w, /great-nine-office-showroom-almaty.webp 1200w",
        alt: "Офисное пространство в Алматы построенное Great Nine Construction",
        position: "center 35%",
    },
]

const videoTestimonials = [
    {
        title: "Дом под ключ без лишних переделок",
        text: "Команда заранее показала этапы, смету и порядок работ. На стройке было понятно, что уже принято, что в процессе и где нужен наш ответ.",
        address: "Алматы, мкр. Каменское плато",
        video: "/great-nine-construction-project-showcase.mp4",
    },
    {
        title: "Прозрачная смета и понятные сроки",
        text: "Нам не приходилось постоянно уточнять детали. Great Nine Construction вела проект по графику, фиксировала изменения и держала нас в курсе по ключевым решениям.",
        address: "Каскелен, частный сектор",
        video: "/great-nine-construction-project-showcase.mp4",
    },
    {
        title: "Коммерческий объект с контролем процесса",
        text: "Для нас было важно не останавливать бизнес-план из-за стройки. Подрядчик координировал площадку, поставки и качество работ без хаоса в коммуникации.",
        address: "Астана, коммерческий объект",
        video: "/great-nine-construction-project-showcase.mp4",
    },
]

const constructionProcess = [
    {
        step: "01",
        title: "Предварительная консультация",
        description:
            "Изучаем ваши задачи, особенности участка и пожелания → определяем основные параметры будущего проекта.",
        checkpoint: "",
        Icon: SearchCheck,
    },
    {
        step: "02",
        title: "Разработка проекта",
        description:
            "Создаем архитектурные и инженерные решения → согласовываем концепцию и план реализации.",
        checkpoint: "Согласование проектной документации",
        Icon: PencilRuler,
    },
    {
        step: "03",
        title: "Подготовка сметы и заключение договора",
        description:
            "Формируем детальный расчет стоимости → фиксируем бюджет, сроки и условия сотрудничества.",
        checkpoint: "Утверждение бюджета и сроков",
        Icon: FileCheck2,
    },
    {
        step: "04",
        title: "Выполнение строительных работ",
        description:
            "Реализуем проект согласно графику → предоставляем регулярные фото- и видеоотчеты о ходе работ.",
        checkpoint: "Промежуточная приемка выполненных работ",
        Icon: Hammer,
    },
    {
        step: "05",
        title: "Технический контроль качества",
        description:
            "Проводим проверки на каждом этапе строительства → обеспечиваем соответствие стандартам и проектной документации.",
        checkpoint: "Подтверждение качества работ",
        Icon: BadgeCheck,
    },
    {
        step: "06",
        title: "Завершение проекта и передача объекта",
        description:
            "Проводим итоговую проверку → передаем объект, документацию и гарантийные обязательства.",
        checkpoint: "Финальная сдача объекта",
        Icon: KeyRound,
    },
]

function Home() {
    const [heroVideoReady, setHeroVideoReady] = useState(false)
    const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false)
    const [shouldLoadProcessVideo, setShouldLoadProcessVideo] = useState(false)
    const [shouldLoadTestimonialVideos, setShouldLoadTestimonialVideos] = useState(false)
    const [aboutVisible, setAboutVisible] = useState(false)
    const [statisticsVisible, setStatisticsVisible] = useState(false)
    const [statNumbers, setStatNumbers] = useState(statistics.map(() => 0))
    const [testimonialActiveIndex, setTestimonialActiveIndex] = useState(0)
    const aboutSectionRef = useRef(null)
    const statisticsSectionRef = useRef(null)
    const processVideoSectionRef = useRef(null)
    const videoTestimonialsSectionRef = useRef(null)
    const testimonialSliderRef = useRef(null)
    const revealSectionsRef = useRef([])

    const registerRevealSection = (element) => {
        if (element && !revealSectionsRef.current.includes(element)) {
            revealSectionsRef.current.push(element)
        }
    }

    const registerProcessVideoSection = (element) => {
        processVideoSectionRef.current = element
        registerRevealSection(element)
    }

    const registerVideoTestimonialsSection = (element) => {
        videoTestimonialsSectionRef.current = element
        registerRevealSection(element)
    }

    const scrollVideoTestimonials = (direction) => {
        setShouldLoadTestimonialVideos(true)

        const slider = testimonialSliderRef.current

        if (!slider) {
            return
        }

        const slide = slider.querySelector(".video-testimonial-slide")
        const sliderStyles = window.getComputedStyle(slider)
        const gap = Number.parseFloat(sliderStyles.columnGap || sliderStyles.gap) || 0
        const distance = (slide?.getBoundingClientRect().width || slider.clientWidth) + gap

        slider.scrollBy({
            left: direction * distance,
            behavior: "smooth",
        })
    }

    const scrollVideoTestimonialsTo = (index) => {
        setShouldLoadTestimonialVideos(true)

        const slider = testimonialSliderRef.current
        const slide = slider?.querySelector(".video-testimonial-slide")

        if (!slider || !slide) {
            return
        }

        const sliderStyles = window.getComputedStyle(slider)
        const gap = Number.parseFloat(sliderStyles.columnGap || sliderStyles.gap) || 0

        slider.scrollTo({
            left: index * (slide.getBoundingClientRect().width + gap),
            behavior: "smooth",
        })
    }

    const updateTestimonialActiveIndex = () => {
        const slider = testimonialSliderRef.current

        if (!slider) {
            return
        }

        const slide = slider.querySelector(".video-testimonial-slide")

        if (!slide) {
            return
        }

        const sliderStyles = window.getComputedStyle(slider)
        const gap = Number.parseFloat(sliderStyles.columnGap || sliderStyles.gap) || 0
        const slideStep = slide.getBoundingClientRect().width + gap

        setTestimonialActiveIndex(Math.round(slider.scrollLeft / slideStep))
    }

    useEffect(() => {
        let idleId
        let timeoutId

        const scheduleHeroVideo = () => {
            const loadHeroVideo = () => setShouldLoadHeroVideo(true)

            if ("requestIdleCallback" in window) {
                idleId = window.requestIdleCallback(loadHeroVideo, { timeout: 3500 })
                return
            }

            timeoutId = window.setTimeout(loadHeroVideo, 2200)
        }

        if (document.readyState === "complete") {
            scheduleHeroVideo()
        } else {
            window.addEventListener("load", scheduleHeroVideo, { once: true })
        }

        return () => {
            window.removeEventListener("load", scheduleHeroVideo)

            if (idleId) {
                window.cancelIdleCallback(idleId)
            }

            if (timeoutId) {
                window.clearTimeout(timeoutId)
            }
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

    useEffect(() => {
        const aboutSection = aboutSectionRef.current

        if (!aboutSection) {
            return undefined
        }

        if (!("IntersectionObserver" in window)) {
            setAboutVisible(true)
            return undefined
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAboutVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(aboutSection)

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        const processVideoSection = processVideoSectionRef.current

        if (!processVideoSection) {
            return undefined
        }

        if (!("IntersectionObserver" in window)) {
            setShouldLoadProcessVideo(true)
            return undefined
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadProcessVideo(true)
                    observer.disconnect()
                }
            },
            {
                rootMargin: "360px 0px",
                threshold: 0,
            }
        )

        observer.observe(processVideoSection)

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        const videoTestimonialsSection = videoTestimonialsSectionRef.current

        if (!videoTestimonialsSection) {
            return undefined
        }

        if (!("IntersectionObserver" in window)) {
            setShouldLoadTestimonialVideos(true)
            return undefined
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadTestimonialVideos(true)
                    observer.disconnect()
                }
            },
            {
                rootMargin: "320px 0px",
                threshold: 0,
            }
        )

        observer.observe(videoTestimonialsSection)

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        const statisticsSection = statisticsSectionRef.current

        if (!statisticsSection) {
            return undefined
        }

        if (!("IntersectionObserver" in window)) {
            setStatisticsVisible(true)
            return undefined
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStatisticsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.35 }
        )

        observer.observe(statisticsSection)

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        if (!statisticsVisible) {
            return undefined
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setStatNumbers(statistics.map((item) => item.value))
            return undefined
        }

        const duration = 1300
        const startedAt = performance.now()
        let animationFrame = 0

        const animate = (currentTime) => {
            const progress = Math.min((currentTime - startedAt) / duration, 1)
            const easedProgress = 1 - Math.pow(1 - progress, 3)

            setStatNumbers(statistics.map((item) => Math.round(item.value * easedProgress)))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationFrame)
        }
    }, [statisticsVisible])

    return (
        <section className="home-hero-section">
            <div className={`hero-media-wrapper${heroVideoReady ? " is-video-loaded" : ""}`}>
                <img
                    src="/great-nine-construction-hero.webp"
                    className="hero-background-image"
                    alt="Строительная площадка на рассвете"
                    width="1600"
                    height="900"
                    fetchPriority="high"
                    decoding="async"
                />
                {shouldLoadHeroVideo && (
                    <video
                        src="/great-nine-hero-construction-loop.mp4"
                        className="hero-background-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="/great-nine-construction-hero.webp"
                        onCanPlayThrough={() => setHeroVideoReady(true)}
                        onLoadedData={() => setHeroVideoReady(true)}
                    ></video>
                )}
                <div className="hero-dark-overlay"></div>
                <div className="hero-page-transition"></div>
                <div className="hero-content is-loaded">
                    <p className="hero-kicker">Great Nine Construction</p>
                    <h1 className="hero-title">Great Nine Construction</h1>
                    <p className="hero-subtitle">
                        Строим качественно с 1999 года. Реализуем частные и коммерческие проекты с точностью,
                        безопасностью и вниманием к каждой детали.
                    </p>
                    <div className="hero-actions">
                        <a className="hero-btn" href="#contact">Получить консультацию</a>
                        <a className="hero-link" href="#projects">Смотреть проекты</a>
                    </div>
                </div>
            </div>

            <section
                className={`about-section${aboutVisible ? " is-visible" : ""}`}
                id="about"
                ref={aboutSectionRef}
            >
                <div className="about-shell">
                    <div className="about-grid">
                        <div className="about-content">
                            <p className="about-kicker">О нас</p>
                            <h2>Строим надежно с 1999 года</h2>
                            <p>
                                Great Nine Construction - подрядчик полного цикла, которому доверяют за прозрачное
                                планирование, надежные сроки и долговечное качество работ. Наша команда ведет каждый
                                проект с понятной коммуникацией, сильной координацией на площадке и ответственным
                                подходом к результату.
                            </p>
                            <a className="about-btn" href="#services">Продолжить</a>
                        </div>
                        <div className="about-image">
                            <img
                                src="/great-nine-team-reviewing-construction-plans.webp"
                                alt="Команда Great Nine Construction изучает строительные чертежи"
                                width="612"
                                height="408"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className={`statistics-section${statisticsVisible ? " is-visible" : ""}`}
                ref={statisticsSectionRef}
            >
                <div className="statistics-shell">
                    <p className="statistics-kicker">Опыт в цифрах</p>
                    <h2 className="statistics-title">Мы работаем с частными и коммерческими проектами</h2>
                    <div className="statistics-grid">
                        {statistics.map((item, index) => (
                            <article className="stat-card" key={item.title}>
                                <span className="stat-icon">
                                    <item.Icon aria-hidden="true" strokeWidth={1.9} />
                                </span>
                                <span className="stat-value">
                                    {statNumbers[index]}
                                    <span>+</span>
                                </span>
                                <h3>{item.title}</h3>
                                <p>{item.label}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="services-section reveal-section" id="services" ref={registerRevealSection}>
                <div className="section-shell services-shell">
                    <h2 className="section-title reveal-item">Строительные услуги</h2>
                    <div className="services-grid">
                        {services.map((service) => (
                            <article className={`${service.className} reveal-item`} key={service.title}>
                                <img
                                    src={service.image}
                                    srcSet={service.srcSet}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 44vw"
                                    alt={service.alt}
                                    width="1600"
                                    height="1000"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="advantages-section reveal-section" ref={registerRevealSection}>
                <div className="advantages-shell">
                    <h2 className="advantages-title reveal-item">Чем мы структурно отличаемся от рынка</h2>
                    <div className="advantages-list">
                        {structuralAdvantages.map((item) => (
                            <article className="advantage-item reveal-item" key={item.title}>
                                <span className="advantage-icon">
                                    <item.Icon aria-hidden="true" strokeWidth={1.9} />
                                </span>
                                <div className="advantage-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="process-video-section reveal-section"
                aria-label="Видео строительного процесса"
                ref={registerProcessVideoSection}
            >
                <video
                    src={shouldLoadProcessVideo ? "/great-nine-construction-project-showcase.mp4" : undefined}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                ></video>
            </section>

            <section className="projects-section reveal-section" id="projects" ref={registerRevealSection}>
                <div className="projects-shell">
                    <h2 className="projects-title reveal-item">Реализованные проекты</h2>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <article className="project-card reveal-item" key={project.title}>
                                <img
                                    src={project.image}
                                    srcSet={project.srcSet}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 31vw"
                                    alt={project.alt}
                                    width="1200"
                                    height="820"
                                    loading="lazy"
                                    decoding="async"
                                    style={{ objectPosition: project.position }}
                                />
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>
                                        <MapPin aria-hidden="true" strokeWidth={2.1} />
                                        {project.location}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="video-testimonials-section reveal-section"
                id="video-testimonials"
                ref={registerVideoTestimonialsSection}
            >
                <div className="video-testimonials-shell">
                    <div className="video-testimonials-header reveal-item">
                        <h2 className="video-testimonials-title">Видеоотзывы клиентов</h2>
                    </div>
                    <div className="video-testimonials-stage">
                        <button
                            type="button"
                            className="video-testimonials-control video-testimonials-control-prev"
                            onClick={() => scrollVideoTestimonials(-1)}
                            aria-label="Показать предыдущий видеоотзыв"
                        >
                            <ChevronLeft aria-hidden="true" strokeWidth={2.2} />
                        </button>
                        <div
                            className="video-testimonials-slider"
                            ref={testimonialSliderRef}
                            onScroll={updateTestimonialActiveIndex}
                            aria-label="Слайдер видеоотзывов клиентов"
                        >
                            {videoTestimonials.map((testimonial, index) => (
                                <article className="video-testimonial-slide reveal-item" key={testimonial.title}>
                                    <div className="video-testimonial-copy">
                                        <h3>{testimonial.title}</h3>
                                        <p>{testimonial.text}</p>
                                        <address>{testimonial.address}</address>
                                    </div>
                                    <video
                                        src={
                                            shouldLoadTestimonialVideos && index === testimonialActiveIndex
                                                ? testimonial.video
                                                : undefined
                                        }
                                        controls
                                        playsInline
                                        preload="none"
                                        aria-label={`Видеоотзыв клиента: ${testimonial.title}`}
                                    ></video>
                                </article>
                            ))}
                        </div>
                        <button
                            type="button"
                            className="video-testimonials-control video-testimonials-control-next"
                            onClick={() => scrollVideoTestimonials(1)}
                            aria-label="Показать следующий видеоотзыв"
                        >
                            <ChevronRight aria-hidden="true" strokeWidth={2.2} />
                        </button>
                    </div>
                    <div className="video-testimonials-dots" aria-label="Выбор видеоотзыва">
                        {videoTestimonials.map((testimonial, index) => (
                            <button
                                type="button"
                                className={index === testimonialActiveIndex ? "is-active" : ""}
                                key={testimonial.title}
                                onClick={() => scrollVideoTestimonialsTo(index)}
                                aria-label={`Показать отзыв ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="video-testimonials-mobile-controls" aria-label="Управление видеоотзывами">
                        <button
                            type="button"
                            className="video-testimonials-control"
                            onClick={() => scrollVideoTestimonials(-1)}
                            aria-label="Показать предыдущий видеоотзыв"
                        >
                            <ChevronLeft aria-hidden="true" strokeWidth={2.2} />
                        </button>
                        <button
                            type="button"
                            className="video-testimonials-control"
                            onClick={() => scrollVideoTestimonials(1)}
                            aria-label="Показать следующий видеоотзыв"
                        >
                            <ChevronRight aria-hidden="true" strokeWidth={2.2} />
                        </button>
                    </div>
                </div>
            </section>

            <section className="construction-process-section reveal-section" ref={registerRevealSection}>
                <div className="construction-process-shell">
                    <h2 className="construction-process-title reveal-item">
                        Прозрачный процесс строительства с контрольными этапами
                    </h2>
                    <div className="construction-process-path">
                        {constructionProcess.map((item) => (
                            <article className="construction-process-step reveal-item" key={item.step}>
                                <div className="construction-process-marker">
                                    <span>{item.step}</span>
                                    <item.Icon aria-hidden="true" strokeWidth={1.9} />
                                </div>
                                <div className="construction-process-content">
                                    <h3>{item.title}</h3>
                                    {item.checkpoint && <p className="construction-process-label">Контрольный этап</p>}
                                    <p>{item.description}</p>
                                    {item.checkpoint && (
                                        <strong className="construction-process-checkpoint">{item.checkpoint}</strong>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="team-section reveal-section" id="team" ref={registerRevealSection}>
                <div className="section-shell">
                    <p className="section-kicker reveal-item">Команда</p>
                    <h2 className="section-title reveal-item">Люди, которые ведут строительство</h2>
                    <div className="team-grid">
                        <article className="team-card reveal-item">
                            <div className="team-avatar"></div>
                            <h3>Руководитель проекта</h3>
                            <p>Отвечает за график, бюджет и контроль качества.</p>
                        </article>
                        <article className="team-card reveal-item">
                            <div className="team-avatar"></div>
                            <h3>Инженер участка</h3>
                            <p>Координирует работы на объекте и безопасность.</p>
                        </article>
                        <article className="team-card reveal-item">
                            <div className="team-avatar"></div>
                            <h3>Ведущий архитектор</h3>
                            <p>Следит за целостностью проекта и задачами клиента.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="contact-section reveal-section" id="contact" ref={registerRevealSection}>
                <div className="contact-shell">
                    <p className="contact-kicker reveal-item">Свяжитесь с нами</p>
                    <h2 className="contact-title reveal-item">Начните проект сегодня</h2>
                    <p className="contact-lead reveal-item">
                        Мы быстро отвечаем в WhatsApp и по почте. Для срочных вопросов звоните напрямую.
                    </p>

                    <div className="contact-cards">
                        <a className="contact-card reveal-item" href="mailto:hello@greatnine.com">
                            <span className="contact-label">Почта</span>
                            <span className="contact-value">hello@greatnine.com</span>
                            <span className="contact-action">Написать письмо</span>
                        </a>
                        <a className="contact-card reveal-item" href="tel:+77001234567">
                            <span className="contact-label">Телефон</span>
                            <span className="contact-value">+7 (700) 123-45-67</span>
                            <span className="contact-action">Позвонить</span>
                        </a>
                        <a
                            className="contact-card reveal-item"
                            href="https://wa.me/77001234567"
                            target="_blank"
                            rel="noopener"
                        >
                            <span className="contact-label">WhatsApp</span>
                            <span className="contact-value">+7 700 123-45-67</span>
                            <span className="contact-action">Написать в WhatsApp</span>
                        </a>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home
