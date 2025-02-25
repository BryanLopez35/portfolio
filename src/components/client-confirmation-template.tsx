import * as React from "react";

interface ClientConfirmationTemplateProps {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
}

export const ClientConfirmationTemplate: React.FC<
  Readonly<ClientConfirmationTemplateProps>
> = ({ name, surname, email, phone, message }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8fafc",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}
  >
    <div
      style={{
        maxWidth: "600px",
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        textAlign: "center",
        margin: "0 auto",
      }}
    >
      <div style={{ padding: "20px" }}>
        <div
          style={{
            margin: "0 auto",
            width: "48px",
            height: "48px",
            backgroundColor: "#d1fae5",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/*<div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png"
              alt="Check"
              width="32"
              height="32"
              style={{ display: "block", margin: "0 auto" }}
            />
          </div>*/}
        </div>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: "16px 0" }}>
          ¡Mensaje Recibido!
        </h1>
        <p style={{ color: "#6b7280" }}>
          ¡Gracias por tu mensaje! Me pondré en contacto contigo lo antes
          posible.
        </p>
      </div>

      <div style={{ padding: "20px", textAlign: "left" }}>
        <h2
          style={{ fontSize: "18px", fontWeight: "500", marginBottom: "8px" }}
        >
          Detalles del mensaje:
        </h2>
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <div style={{ marginBottom: "8px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#6b7280",
                marginBottom: "4px",
              }}
            >
              Nombre
            </p>
            <p style={{ fontSize: "14px" }}>{name} {surname}</p>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#6b7280",
                marginBottom: "4px",
              }}
            >
              Email
            </p>
            <p style={{ fontSize: "14px" }}>{email}</p>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#6b7280",
                marginBottom: "4px",
              }}
            >
              Número de celular
            </p>
            <p style={{ fontSize: "14px" }}>{phone}</p>
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#6b7280",
                marginBottom: "4px",
              }}
            >
              Mensaje
            </p>
            <p style={{ fontSize: "14px" }}>{message}</p>
          </div>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #e5e7eb",
            margin: "16px 0",
          }}
        />

        <div>
          <h2
            style={{ fontSize: "18px", fontWeight: "500", marginBottom: "8px" }}
          >
            Próximos pasos
          </h2>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>
            Revisaré tu mensaje y te responderé en un plazo de 24-48 horas
            hábiles.
          </p>
        </div>
      </div>

      <div style={{ padding: "20px", textAlign: "center" }}>
        <p style={{ fontSize: "12px", color: "#6b7280" }}>
          Si tienes alguna pregunta urgente, por favor contactame al (664)
          306-1520
        </p>
      </div>
    </div>
  </div>
);
