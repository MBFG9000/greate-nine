import { VariantsSection } from "./HouseVariantsSection"

const cottageVariants = [
    {
        title: "Современные коттеджи",
        text: "Лаконичная архитектура, панорамное остекление и функциональные планировки для комфортной жизни.",
        className: "is-wide",
        images: [
            "/services/cottages/современные-коттеджи-main.jpg",
            "/services/cottages/современные-коттеджи-side-1.jpg",
            "/services/cottages/cовременные-коттеджи-side-2.png",
            "/services/cottages/cовременные-коттеджи-side-3.png",
        ],
    },
    {
        title: "Классические коттеджи",
        text: "Традиционные архитектурные решения, проверенные временем материалы и продуманная организация пространства.",
        className: "is-tall",
        images: [
            "/services/cottages/классические-коттеджи-main.webp",
            "/services/cottages/классические-коттеджи-side-1.jpg",
            "/services/cottages/классические-коттеджи-side-2.jpg",
        ],
    },
    {
        title: "Коттеджи с мансардой",
        text: "Дополнительная полезная площадь без увеличения пятна застройки и рациональное использование пространства.",
        className: "is-horizontal",
        images: [
            "/services/cottages/коттеджи-с-мансардой.jpg",
            "/services/cottages/коттеджи-с-мансардой-side-1.jpg",
            "/services/cottages/коттеджи-с-мансардой-side-2.jpg",
        ],
    },
]

export function CottageVariantsSection() {
    return (
        <VariantsSection
            variants={cottageVariants}
            heading="Какие коттеджи строим"
            lead="Подбираем архитектуру и планировку коттеджа под участок, образ жизни семьи и требования к будущей эксплуатации."
            className="cottage-variants"
            cycleInterval={700}
        />
    )
}
