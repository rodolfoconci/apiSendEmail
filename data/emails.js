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
  bienvenidaAseguradoNuevo: (params) => `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #28a745;">¡Bienvenido ${params.aseguradoName}!</h1>
        <p style="color: #555;">Nos complace informarte que tu registro como asegurado ha sido completado exitosamente.</p>
        <p style="color: #555;">Tu asegurador, <strong>${params.aseguradorName}</strong>, ha procesado tu regitros y pronto recibirás más detalles sobre tus pólizas.</p>
        <p style="color: #555;">Mientras tanto, ya puedes acceder a todos nuestros servicios a través de nuestra aplicación para Android. <strong>Descárgala ahora</strong> desde Google Play para gestionar tu cuenta y estar al tanto de tus beneficios.</p>
        <p style="color: #555;">Si tienes alguna duda o necesitas asistencia, no dudes en ponerte en contacto con tu asegurador.</p>
        <p style="color: #555;">Te deseamos una experiencia segura y confiable con nosotros.</p>
        <p style="color: #555;"><small>No respondas este email. Para más información, comunícate con tu asegurador o con soporte.</small></p>
      </div>
    </div>
  `,
  usuarioVerificado: (params) => `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
      <h1 style="color: #28a745;">¡Felicidades ${params.name}!</h1>
      <p style="color: #555;">Tu cuenta ha sido verificada exitosamente. Ahora puedes acceder a todos nuestros servicios.</p>
      <p style="color: #555;">Gracias por tu paciencia, y te deseamos la mejor experiencia con nosotros.</p>
      <p style="color: #555;"><small>No respondas este email.</small></p>
    </div>
  </div>
`,
  usuarioReactivado: (params) => `
<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
    <h1 style="color: #007bff;">Tu cuenta ha sido reactivada</h1>
    <p style="color: #555;">Hola <strong>${params.name}</strong>,</p>
    <p style="color: #555;">Tu cuenta ha sido reactivada después de haber sido bloqueada debido a intentos fallidos.</p>
    <p style="color: #555;">Ya puedes acceder a tu cuenta y seguir utilizando nuestros servicios.</p>
    <p style="color: #555;">Tu nueva contraseña es: <strong>${params.newPassword}</strong></p>
    <p style="color: #555;">Por motivos de seguridad, te recomendamos cambiarla una vez que inicies sesión.</p>
    <p style="color: #555;"><small>No respondas este email. Para más información, comunícate con soporte.</small></p>
  </div>
</div>
`,
  usuarioNoPago: (params) => `
<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
    <h1 style="color: #d9534f;">Suscripción impaga</h1>
    <p style="color: #555;">Hola <strong>${params.name}</strong>,</p>
    <p style="color: #555;">Tu suscripción ha sido bloqueada debido a un pago pendiente. Por favor, realiza el pago para reactivar tu cuenta.</p>
    <p style="color: #555;">Si necesitas más detalles sobre el pago, por favor, contacta con nuestro soporte.</p>
    <p style="color: #555;"><small>No respondas este email. Para más información, comunícate con soporte.</small></p>
  </div>
</div>
`,
  usuarioPago: (params) => `
<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
    <h1 style="color: #28a745;">Cuenta reactivada</h1>
    <p style="color: #555;">Hola <strong>${params.name}</strong>,</p>
    <p style="color: #555;">Gracias por tu pago. Tu cuenta ha sido reactivada con éxito. Ya puedes acceder a todos nuestros servicios nuevamente.</p>
    <p style="color: #555;">Si tienes alguna duda o pregunta, no dudes en ponerte en contacto con nosotros.</p>
    <p style="color: #555;"><small>No respondas este email. Para más información, comunícate con soporte.</small></p>
  </div>
</div>
`,
};
