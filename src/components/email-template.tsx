import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

interface AdminNotificationTemplateProps {
  name: string;
  surname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

export const AdminNotificationTemplate: React.FC<Readonly<AdminNotificationTemplateProps>> = ({
  name,
  surname,
  email,
  phone,
  subject,
  message,
}) => (
  <div>
    <h1>Nuevo contacto recibido</h1>
    <p><strong>Nombre:</strong> {name} {surname}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Teléfono:</strong> {phone}</p>
    <p><strong>Asunto:</strong> {subject}</p>
    <p><strong>Mensaje:</strong> {message}</p>
  </div>
);