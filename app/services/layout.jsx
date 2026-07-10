import "../../src/css/generated/services.css"

export default function ServicesLayout({ children }) {
    return (
        <>
            {children}
            <style>{`
                @media (max-width: 768px) {
                    .service-contact-modal {
                        align-items: center;
                        padding: 10px;
                    }

                    .service-contact-dialog {
                        width: min(100%, 540px);
                        max-height: calc(100dvh - 20px);
                        overflow-y: auto;
                        padding: 22px 14px 16px;
                        overscroll-behavior: contain;
                    }

                    .service-contact-close {
                        top: 10px;
                        right: 10px;
                        width: 36px;
                        height: 36px;
                    }

                    .service-contact-dialog h3 {
                        padding-right: 38px;
                    }

                    .service-contact-dialog > p:not(.service-contact-kicker) {
                        margin-top: 10px;
                        font-size: 0.88rem;
                        line-height: 1.4;
                    }

                    .service-contact-actions {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 8px;
                        margin-top: 14px;
                    }

                    .service-contact-link {
                        min-width: 0;
                        min-height: 98px;
                        padding: 12px 8px;
                        gap: 5px;
                    }

                    .service-contact-link span {
                        font-size: 0.64rem;
                        letter-spacing: 0.05em;
                    }

                    .service-contact-link strong {
                        font-size: clamp(0.72rem, 3.1vw, 0.9rem);
                        overflow-wrap: anywhere;
                    }
                }
            `}</style>
        </>
    )
}
