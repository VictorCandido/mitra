export interface ContactEmailTemplateProps {
    name: string
    company?: string
    email: string
    phone?: string
    message: string
    submittedAt: string
}

export function ContactEmailTemplate({ name, company, email, phone, message, submittedAt }: ContactEmailTemplateProps) {
    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                maxWidth: "600px",
                margin: "0 auto",
                backgroundColor: "#ffffff",
                border: "1px solid #e5e5e5",
            }}
        >
            {/* Header com logo e cores da MITRA */}
            <div
                style={{
                    backgroundColor: "#D4AF37",
                    padding: "20px",
                    textAlign: "center" as const,
                    borderBottom: "3px solid #8B4513",
                    display: "flex",
                    flexDirection: "column" as const,
                    alignItems: "center",
                }}
            >
                <img
                    src="cid:mitra-logo"
                    alt="MITRA - Terraplenagem e Locações"
                    width={200}
                    height={200}
                    style={{
                        maxWidth: "200px",
                        height: "auto",
                        marginBottom: "10px",
                    }}
                />
                <h1
                    style={{
                        color: "#1a1a1a",
                        fontSize: "24px",
                        fontWeight: "bold",
                        margin: "0",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                    }}
                >
                    Nova Mensagem de Contato
                </h1>
            </div>

            {/* Conteúdo principal */}
            <div style={{ padding: "30px 20px" }}>
                <div
                    style={{
                        backgroundColor: "#f8f9fa",
                        border: "1px solid #D4AF37",
                        borderRadius: "8px",
                        padding: "20px",
                        marginBottom: "20px",
                    }}
                >
                    <h2
                        style={{
                            color: "#8B4513",
                            fontSize: "18px",
                            fontWeight: "bold",
                            marginTop: "0",
                            marginBottom: "15px",
                            borderBottom: "2px solid #D4AF37",
                            paddingBottom: "5px",
                        }}
                    >
                        Dados do Cliente
                    </h2>

                    <table style={{ width: "100%", borderCollapse: "collapse" as const }}>
                        <tbody>
                            <tr>
                                <td
                                    style={{
                                        padding: "8px 0",
                                        fontWeight: "bold",
                                        color: "#333",
                                        width: "120px",
                                        verticalAlign: "top",
                                    }}
                                >
                                    Nome:
                                </td>
                                <td style={{ padding: "8px 0", color: "#555" }}>{name}</td>
                            </tr>
                            {company && (
                                <tr>
                                    <td
                                        style={{
                                            padding: "8px 0",
                                            fontWeight: "bold",
                                            color: "#333",
                                            width: "120px",
                                            verticalAlign: "top",
                                        }}
                                    >
                                        Empresa:
                                    </td>
                                    <td style={{ padding: "8px 0", color: "#555" }}>{company}</td>
                                </tr>
                            )}
                            <tr>
                                <td
                                    style={{
                                        padding: "8px 0",
                                        fontWeight: "bold",
                                        color: "#333",
                                        verticalAlign: "top",
                                    }}
                                >
                                    E-mail:
                                </td>
                                <td style={{ padding: "8px 0", color: "#555" }}>
                                    <a href={`mailto:${email}`} style={{ color: "#D4AF37", textDecoration: "none" }}>
                                        {email}
                                    </a>
                                </td>
                            </tr>
                            {phone && (
                                <tr>
                                    <td
                                        style={{
                                            padding: "8px 0",
                                            fontWeight: "bold",
                                            color: "#333",
                                            verticalAlign: "top",
                                        }}
                                    >
                                        Telefone:
                                    </td>
                                    <td style={{ padding: "8px 0", color: "#555" }}>
                                        <a href={`tel:${phone}`} style={{ color: "#D4AF37", textDecoration: "none" }}>
                                            {phone}
                                        </a>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td
                                    style={{
                                        padding: "8px 0",
                                        fontWeight: "bold",
                                        color: "#333",
                                        verticalAlign: "top",
                                    }}
                                >
                                    Data/Hora:
                                </td>
                                <td style={{ padding: "8px 0", color: "#555" }}>{submittedAt}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div
                    style={{
                        backgroundColor: "#f8f9fa",
                        border: "1px solid #D4AF37",
                        borderRadius: "8px",
                        padding: "20px",
                    }}
                >
                    <h2
                        style={{
                            color: "#8B4513",
                            fontSize: "18px",
                            fontWeight: "bold",
                            marginTop: "0",
                            marginBottom: "15px",
                            borderBottom: "2px solid #D4AF37",
                            paddingBottom: "5px",
                        }}
                    >
                        Mensagem
                    </h2>
                    <div
                        style={{
                            backgroundColor: "#ffffff",
                            padding: "15px",
                            borderRadius: "5px",
                            border: "1px solid #e5e5e5",
                            lineHeight: "1.6",
                            color: "#333",
                            whiteSpace: "pre-wrap" as const,
                        }}
                    >
                        {message}
                    </div>
                </div>

                {/* Call to action */}
                <div
                    style={{
                        textAlign: "center" as const,
                        marginTop: "30px",
                        padding: "20px",
                        backgroundColor: "#D4AF37",
                        borderRadius: "8px",
                    }}
                >
                    <p
                        style={{
                            color: "#1a1a1a",
                            fontSize: "16px",
                            fontWeight: "bold",
                            margin: "0 0 10px 0",
                        }}
                    >
                        Responda rapidamente para não perder esta oportunidade!
                    </p>
                    <a
                        href={`mailto:${email}`}
                        style={{
                            display: "inline-block",
                            backgroundColor: "#8B4513",
                            color: "#ffffff",
                            padding: "12px 24px",
                            textDecoration: "none",
                            borderRadius: "5px",
                            fontWeight: "bold",
                            fontSize: "14px",
                        }}
                    >
                        Responder Cliente
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div
                style={{
                    backgroundColor: "#8B4513",
                    color: "#ffffff",
                    padding: "20px",
                    textAlign: "center" as const,
                    fontSize: "14px",
                }}
            >
                <div style={{ marginBottom: "10px" }}>
                    <strong>MITRA - Terraplenagem e Locações</strong>
                </div>
                <div style={{ marginBottom: "5px" }}>📞 (11) 94762-7807 | ✉️ mitraterraplenagem@gmail.com</div>
                <div style={{ fontSize: "12px", opacity: 0.8, marginTop: "10px" }}>
                    Este e-mail foi gerado automaticamente pelo formulário de contato do site.
                </div>
            </div>
        </div>
    )
}
