export const emailTemplates = {
  solicitudIngreso: (params) => `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #333;">Solicitud recibida</h1>
          <p style="color: #555;">Hola <strong>${params.name}</strong>,</p>
          <p style="color: #555;">Tu solicitud ha sido recibida con éxito.</p>
          <div style="background-color: #e9ecef; padding: 10px; border-radius: 4px;">
            <strong style="color: #333;">ID de Solicitud:</strong> ${params.solicitudId}
          </div>
          <p style="color: #555;">Te informaremos sobre el estado de tu solicitud en breve.</p>
          <p style="color: #555;"><small>No respondas este email.</small></p>
        </div>
      </div>
    `,
  usuarioBloqueado: (params) => `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #d9534f;">Tu cuenta ha sido bloqueada</h1>
          <p style="color: #555;">Hola <strong>${params.name}</strong>,</p>
          <p style="color: #555;">Lamentablemente, tu cuenta ha sido bloqueada debido a varios intentos fallidos de inicio de sesión.</p>
          <p style="color: #555;">Si crees que esto fue un error o necesitas asistencia, por favor, contacta con nuestro soporte a través de este correo.</p>
          <div style="background-color: #f8d7da; padding: 10px; border-radius: 4px; margin-top: 20px;">
            <strong style="color: #721c24;">Estado de la cuenta:</strong> Bloqueada
          </div>
          <p style="color: #555;">Nuestro equipo está trabajando para ayudarte a resolver este inconveniente.</p>
          <p style="color: #555;"><small>No respondas este email. Para más información, comunícate con soporte.</small></p>
        </div>
      </div>
    `,
};
