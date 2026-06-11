import {
    BadgeCheck,
    Building,
    Building2,
    ClipboardCheck,
    FileCheck2,
    Hammer,
    House,
    KeyRound,
    Layers,
    MessageSquareText,
    PencilRuler,
    SearchCheck,
    ShieldCheck,
    TimerReset,
} from "lucide-react"

export const statistics = [
    {
        value: 157,
        title: "Частные дома",
        label: "Завершенных объектов",
        Icon: House,
    },
    {
        value: 45,
        title: "Коммерческие здания",
        label: "Сданных объектов",
        Icon: Building2,
    },
    {
        value: 70,
        title: "Офисы и салоны",
        label: "Готовых проектов",
        Icon: Building,
    },
    {
        value: 58,
        title: "Фасадные работы",
        label: "Завершенных проектов",
        Icon: Layers,
    },
]

export const services = [
    {
        slug: "private-houses",
        title: "Строительство частных домов",
        description: "Проектируем и строим надежные дома для семьи с продуманной планировкой, инженерией и контролем каждого этапа работ.",
        image: "/great-nine-residential-house-construction.webp",
        srcSet:
            "/great-nine-residential-house-construction-800.webp 800w, /great-nine-residential-house-construction-1200.webp 1200w, /great-nine-residential-house-construction.webp 1600w",
        alt: "Строительство современного частного дома Great Nine Construction",
        className: "service-card service-card-wide",
    },
    {
        slug: "commercial-buildings",
        title: "Строительство коммерческих зданий",
        description: "Возводим офисы, салоны, торговые и бизнес-объекты с расчетом на нагрузку, сроки запуска и ежедневную эксплуатацию.",
        image: "/great-nine-commercial-building-construction.webp",
        srcSet:
            "/great-nine-commercial-building-construction-800.webp 800w, /great-nine-commercial-building-construction-1200.webp 1200w, /great-nine-commercial-building-construction.webp 1600w",
        alt: "Коммерческое здание построенное Great Nine Construction",
        className: "service-card service-card-tall",
    },
    {
        slug: "turnkey-repair",
        title: "Ремонт под ключ",
        description: "Берем на себя черновые и чистовые работы, закупки, координацию мастеров и финальную подготовку пространства к использованию.",
        image: "/great-nine-home-renovation-facade.webp",
        srcSet:
            "/great-nine-home-renovation-facade-800.webp 800w, /great-nine-home-renovation-facade-1200.webp 1200w, /great-nine-home-renovation-facade.webp 1600w",
        alt: "Ремонт под ключ частного дома от Great Nine Construction",
        className: "service-card",
    },
    {
        slug: "cottages",
        title: "Строительство коттеджей",
        description: "Строим коттеджи для постоянного проживания и отдыха с учетом участка, архитектуры, энергоэффективности и будущего обслуживания.",
        image: "/great-nine-construction-project-management.webp",
        srcSet:
            "/great-nine-construction-project-management-800.webp 800w, /great-nine-construction-project-management-1200.webp 1200w, /great-nine-construction-project-management.webp 1600w",
        alt: "Строительство коттеджа Great Nine Construction",
        className: "service-card",
    },
]

export const structuralAdvantages = [
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

export const projects = [
    {
        slug: "private-villa-almaty",
        title: "Частная вилла",
        location: "Алматы",
        image: "/great-nine-private-villa-almaty.webp",
        srcSet:
            "/great-nine-private-villa-almaty-600.webp 600w, /great-nine-private-villa-almaty-900.webp 900w, /great-nine-private-villa-almaty.webp 1200w",
        alt: "Реализованный проект частной виллы в Алматы от Great Nine Construction",
        position: "center 35%",
    },
    {
        slug: "family-house-kaskelen",
        title: "Загородный дом",
        location: "Каскелен",
        image: "/great-nine-family-house-kaskelen.webp",
        srcSet:
            "/great-nine-family-house-kaskelen-600.webp 600w, /great-nine-family-house-kaskelen-900.webp 900w, /great-nine-family-house-kaskelen.webp 1200w",
        alt: "Загородный дом в Каскелене построенный Great Nine Construction",
        position: "center",
    },
    {
        slug: "commercial-project-astana",
        title: "Коммерческий объект",
        location: "Астана",
        image: "/great-nine-commercial-project-astana.webp",
        srcSet:
            "/great-nine-commercial-project-astana-600.webp 600w, /great-nine-commercial-project-astana-900.webp 900w, /great-nine-commercial-project-astana.webp 1200w",
        alt: "Коммерческий объект в Астане реализованный Great Nine Construction",
        position: "center",
    },
    {
        slug: "turnkey-house-almaty",
        title: "Дом под ключ",
        location: "Алматы",
        image: "/great-nine-mountain-home-almaty.webp",
        srcSet:
            "/great-nine-mountain-home-almaty-600.webp 600w, /great-nine-mountain-home-almaty-900.webp 900w, /great-nine-mountain-home-almaty.webp 1200w",
        alt: "Дом под ключ в Алматы с панорамными окнами от Great Nine Construction",
        position: "center 58%",
    },
    {
        slug: "facade-renovation-talgar",
        title: "Реконструкция фасада",
        location: "Талгар",
        image: "/great-nine-facade-renovation-talgar.webp",
        srcSet:
            "/great-nine-facade-renovation-talgar-600.webp 600w, /great-nine-facade-renovation-talgar-900.webp 900w, /great-nine-facade-renovation-talgar.webp 1200w",
        alt: "Реконструкция фасада дома в Талгаре от Great Nine Construction",
        position: "center 40%",
    },
    {
        slug: "office-space-almaty",
        title: "Офисное пространство",
        location: "Алматы",
        image: "/great-nine-office-showroom-almaty.webp",
        srcSet:
            "/great-nine-office-showroom-almaty-600.webp 600w, /great-nine-office-showroom-almaty-900.webp 900w, /great-nine-office-showroom-almaty.webp 1200w",
        alt: "Офисное пространство в Алматы построенное Great Nine Construction",
        position: "center 35%",
    },
]

export const videoTestimonials = [
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

export const constructionProcess = [
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
        description: "Создаем архитектурные и инженерные решения → согласовываем концепцию и план реализации.",
        checkpoint: "Согласование проектной документации",
        Icon: PencilRuler,
    },
    {
        step: "03",
        title: "Подготовка сметы и заключение договора",
        description: "Формируем детальный расчет стоимости → фиксируем бюджет, сроки и условия сотрудничества.",
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
        description: "Проводим итоговую проверку → передаем объект, документацию и гарантийные обязательства.",
        checkpoint: "Финальная сдача объекта",
        Icon: KeyRound,
    },
]

export const assuranceCards = [
    {
        title: "Лицензии и разрешения",
        Icon: FileCheck2,
        items: [
            "Действующие лицензии Республики Казахстан на проектирование и строительство.",
            "Полный пакет разрешительной документации и допусков для выполнения профильных работ.",
            "Сотрудничество с проверенными подрядными организациями и поставщиками материалов.",
        ],
    },
    {
        title: "Финансовые гарантии",
        Icon: ClipboardCheck,
        items: [
            "Фиксированная стоимость работ закрепляется в договоре.",
            "Прозрачная смета без скрытых расходов и непредвиденных доплат.",
            "Четко прописанные сроки, объемы работ и ответственность сторон.",
        ],
    },
    {
        title: "Контроль качества",
        Icon: ShieldCheck,
        items: [
            "Технический надзор на всех ключевых этапах строительства.",
            "Авторский контроль соответствия проектным решениям.",
            "Проверка качества материалов и соблюдения строительных технологий.",
            "Поэтапная приемка выполненных работ с устранением замечаний до сдачи объекта.",
        ],
    },
    {
        title: "Гарантийные обязательства",
        Icon: BadgeCheck,
        items: [
            "Гарантия до 5 лет на несущие и конструктивные элементы.",
            "Гарантия до 3 лет на инженерные системы и коммуникации.",
            "Сопровождение объекта после завершения строительства.",
        ],
    },
]

export const certificateSlides = [
    {
        title: "Лицензии на строительство",
        image: "/great-nine-construction-certificates-placeholder.png",
        alt: "Место для лицензий и сертификатов Great Nine Construction",
    },
    {
        title: "Разрешительная документация",
        image: "/great-nine-construction-certificates-placeholder.png",
        alt: "Место для разрешительной документации Great Nine Construction",
    },
    {
        title: "Сертификаты качества",
        image: "/great-nine-construction-certificates-placeholder.png",
        alt: "Место для сертификатов качества Great Nine Construction",
    },
    {
        title: "Допуски к строительным работам",
        image: "/great-nine-construction-certificates-placeholder.png",
        alt: "Место для допусков к строительным работам Great Nine Construction",
    },
    {
        title: "Сертификаты материалов",
        image: "/great-nine-construction-certificates-placeholder.png",
        alt: "Место для сертификатов материалов Great Nine Construction",
    },
    {
        title: "Документы технического надзора",
        image: "/great-nine-construction-certificates-placeholder.png",
        alt: "Место для документов технического надзора Great Nine Construction",
    },
]

export const contactMethods = [
    {
        label: "Телефон",
        value: "+7 (700) 123-45-67",
        action: "Позвонить",
        href: "tel:+77001234567",
    },
    {
        label: "WhatsApp",
        value: "+7 700 123-45-67",
        action: "Написать в WhatsApp",
        href: "https://wa.me/77001234567",
        isExternal: true,
    },
]
