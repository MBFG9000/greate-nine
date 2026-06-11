import "../../../css/pages/InnerPage.css"

import { PageHero } from "../../shared/PageHero"

function CommercialProjectAstanaPage() {
    return (
        <>
            <PageHero
                eyebrow="Астана"
                title="Коммерческий объект"
                text="Коммерческое пространство, где важны сроки запуска, прочность решений, координация поставок и готовность объекта к рабочей нагрузке."
                image="/great-nine-commercial-project-astana.webp"
                imagePosition="center"
            />
            <section className="inner-placeholder">
                <div className="inner-placeholder-shell">
                    <p>Блок работает</p>
                </div>
            </section>
        </>
    )
}

export default CommercialProjectAstanaPage
