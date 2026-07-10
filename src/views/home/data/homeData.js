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
    MessageCircle,
    PencilRuler,
    Phone,
    SearchCheck,
    ShieldCheck,
    TimerReset,
} from "lucide-react"

import { companyContacts } from "../../../data/contactData"

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
        image: "/duron-construction-private-house-construction.webp",
        srcSet:
            "/duron-construction-private-house-construction-800.webp 800w, /duron-construction-private-house-construction-1200.webp 1200w, /duron-construction-private-house-construction.webp 1600w",
        alt: "Строительство современного частного дома Duron Construction",
        className: "service-card service-card-wide",
    },
    {
        slug: "commercial-buildings",
        title: "Строительство коммерческих зданий",
        description: "Возводим офисы, салоны, торговые и бизнес-объекты с расчетом на нагрузку, сроки запуска и ежедневную эксплуатацию.",
        image: "/great-nine-commercial-building-construction.webp",
        srcSet:
            "/great-nine-commercial-building-construction-800.webp 800w, /great-nine-commercial-building-construction-1200.webp 1200w, /great-nine-commercial-building-construction.webp 1600w",
        alt: "Коммерческое здание построенное Duron Construction",
        className: "service-card service-card-tall",
    },
    {
        slug: "turnkey-repair",
        title: "Ремонт под ключ",
        description: "Берем на себя черновые и чистовые работы, закупки, координацию мастеров и финальную подготовку пространства к использованию.",
        image: "/services/duron-turnkey-repair-service-quality-72.webp",
        imageWidth: 1200,
        imageHeight: 600,
        alt: "Ремонт под ключ частного дома от Duron Construction",
        className: "service-card",
    },
    {
        slug: "cottages",
        title: "Строительство коттеджей",
        description: "Строим коттеджи для постоянного проживания и отдыха с учетом участка, архитектуры, энергоэффективности и будущего обслуживания.",
        image: "/services/duron-cottage-construction-service-quality-72.webp",
        imageWidth: 1000,
        imageHeight: 1000,
        alt: "Строительство коттеджа Duron Construction",
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
        title: "АО AIR ASTANA",
        location: "Алматы",
        category: "Коммерческий объект",
        description: "Капитальный ремонт и модернизация административно-технического комплекса Centre 2. Выполнено комплексное обновление инженерной инфраструктуры, внутренних помещений и технических зон с учетом требований крупнейшего авиаперевозчика Казахстана.",
        images: ["/our-projects/АО-AIR-ASTANA.webp"],
    },
    {
        title: "АО KCELL",
        location: "Петропавловск",
        category: "Телекоммуникационный объект",
        description: "Капитальный ремонт и техническое переоснащение технологического объекта связи Switch. Выполнены проектирование, производство и монтаж специализированных модульных конструкций для размещения и защиты телекоммуникационного оборудования.",
        images: ["/our-projects/АО-KCELL.webp"],
    },
    {
        title: "Центр настольного тенниса ADD",
        location: "Алматы",
        category: "Спортивный комплекс",
        description: "Строительство и чистовая отделка современного спортивного комплекса. Реализованы строительные, инженерные и отделочные работы с учетом требований к спортивной инфраструктуре и ежедневной эксплуатации объекта.",
        images: ["/our-projects/Центр-настольного-тенниса-ADD.webp"],
    },
    {
        title: "Премиальный ритейл в Saks Fifth Avenue",
        location: "Алматы",
        category: "Премиальный ритейл",
        description: "Реконструкция и эксклюзивная отделка торговых пространств международных премиальных брендов. Работы выполнены с применением высококачественных материалов и соблюдением корпоративных стандартов класса люкс.",
        images: ["/our-projects/Премиальный-ритейл-в-Saks-Fifth-Avenue.webp"],
    },
    {
        title: "Ресторан Champagne / Винотека",
        location: "Алматы",
        category: "Ресторанный проект",
        description: "Создание коммерческого пространства с индивидуальной концепцией интерьера. Выполнены отделочные работы, монтаж инженерных систем и реализация дизайнерских решений для формирования атмосферы премиального заведения.",
        images: ["/our-projects/Ресторан-Champagne-Винотека.webp"],
    },
    {
        title: "Пекарня-кафе Monteverde",
        location: "Алматы",
        category: "Общественное питание",
        description: "Полный комплекс строительно-монтажных и отделочных работ под ключ. Реализованы фасадные решения, внутренние инженерные сети и специализированные зоны для размещения пищевого производства.",
        images: ["/our-projects/Пекарня-кафе-Monteverde.webp"],
    },
    {
        title: "ТОО ЭЛИТ СТРОЙ",
        location: "Алматы",
        category: "Жилое строительство",
        description: "Участие в реализации строительных и отделочных работ на объекте жилого назначения. Выполнен комплекс работ в соответствии с проектной документацией, строительными нормами и требованиями заказчика.",
        images: [
            "/our-projects/ТОО-ЭЛИТ-СТРОЙ-1.webp",
            "/our-projects/ТОО-ЭЛИТ-СТРОЙ-2.webp",
        ],
    },
    {
        title: "ЖК АЛМАТАУ",
        location: "Алматы",
        category: "Жилой комплекс",
        description: "Участие в строительстве современного жилого комплекса. Выполнены общестроительные и отделочные работы, направленные на обеспечение качества, надежности и комфортной эксплуатации объекта.",
        images: ["/our-projects/ЖК-АЛМАТАУ.webp"],
    },
    {
        title: "ЖК GREEN CITY",
        location: "Алматы",
        category: "Жилой комплекс",
        description: "Участие в реализации многоэтажного жилого комплекса с современной архитектурой и развитой инфраструктурой. Работы выполнены в рамках утвержденных проектных решений и требований строительного контроля.",
        images: [
            "/our-projects/ЖК-GREEN-CITY-1.webp",
            "/our-projects/ЖК-GREEN-CITY-2.webp",
        ],
    },
]

export const videoTestimonials = [
    {
        title: "Дом под ключ без лишних переделок",
        text: "Команда заранее показала этапы, смету и порядок работ. На стройке было понятно, что уже принято, что в процессе и где нужен наш ответ.",
        address: "Алматы, мкр. Каменское плато",
        video: "/great-nine-construction-project-showcase.webm",
    },
    {
        title: "Прозрачная смета и понятные сроки",
        text: "Нам не приходилось постоянно уточнять детали. Duron Construction вела проект по графику, фиксировала изменения и держала нас в курсе по ключевым решениям.",
        address: "Каскелен, частный сектор",
        video: "/great-nine-construction-project-showcase.webm",
    },
    {
        title: "Коммерческий объект с контролем процесса",
        text: "Для нас было важно не останавливать бизнес-план из-за стройки. Подрядчик координировал площадку, поставки и качество работ без хаоса в коммуникации.",
        address: "Астана, коммерческий объект",
        video: "/great-nine-construction-project-showcase.webm",
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
        title: "Гарантии на выполненные работы",
        Icon: ClipboardCheck,
        items: [
            "Для каждого вида работ устанавливается отдельный гарантийный срок с учетом применяемой технологии и материалов.",
            "Перечень работ, срок гарантии, условия ее действия и ответственность сторон фиксируются в договоре и приемочной документации.",
            "Гарантийные обращения регистрируются, проверяются специалистами и устраняются в согласованные сроки после подтверждения случая.",
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
        alt: "Место для лицензий и сертификатов Duron Construction",
    },
    {
        title: "Разрешительная документация",
        image: "/great-nine-construction-certificates-placeholder.png",
        alt: "Место для разрешительной документации Duron Construction",
    },
    {
        title: "Сертификаты качества",
        image: "/great-nine-construction-certificates-placeholder.png",
        alt: "Место для сертификатов качества Duron Construction",
    },
    {
        title: "Допуски к строительным работам",
        image: "/great-nine-construction-certificates-placeholder.png",
        alt: "Место для допусков к строительным работам Duron Construction",
    },
    {
        title: "Сертификаты материалов",
        image: "/great-nine-construction-certificates-placeholder.png",
        alt: "Место для сертификатов материалов Duron Construction",
    },
    {
        title: "Документы технического надзора",
        image: "/great-nine-construction-certificates-placeholder.png",
        alt: "Место для документов технического надзора Duron Construction",
    },
]

export const contactMethods = [
    {
        label: "Телефон 1",
        Icon: Phone,
        value: companyContacts.phoneDisplay,
        action: "Позвонить",
        href: companyContacts.phoneHref,
    },
    {
        label: "WhatsApp 1",
        Icon: MessageCircle,
        value: companyContacts.phoneDisplay,
        action: "Написать в WhatsApp",
        href: companyContacts.whatsappHref,
        isExternal: true,
    },
    {
        label: "Телефон 2",
        Icon: Phone,
        value: companyContacts.secondPhoneDisplay,
        action: "Позвонить",
        href: companyContacts.secondPhoneHref,
    },
    {
        label: "WhatsApp 2",
        Icon: MessageCircle,
        value: companyContacts.secondPhoneDisplay,
        action: "Написать в WhatsApp",
        href: companyContacts.secondWhatsappHref,
        isExternal: true,
    },
]
