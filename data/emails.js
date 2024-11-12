export const emailTemplates = {
  solicitudIngreso: (params) => `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #333;">Solicitud recibida</h1>
          <p style="color: #555;">Hola <strong>${params.name}</strong>,</p>
          <p style="color: #555;">Tu solicitud ha sido recibida con éxito.</p>
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
  bienvenidaAseguradorNuevo: (params) => `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
      <h1 style="color: #ffc107;">¡Hola ${params.aseguradorName}!</h1>
      <p style="color: #555;">Nos complace informarte que tu registro ha sido recibido y está en proceso de verificación.</p>
      <p style="color: #555;">Un administrador, revisará tus datos y  aprobará tu cuenta en breve.</p>
      <p style="color: #555;">Una vez que tu cuenta haya sido aprobada, podrás acceder a todos nuestros servicios y gestionar tus asegurados a través de nuestra plataforma.</p>
      <p style="color: #555;">Recibirás un correo de confirmación cuando tu cuenta esté lista para operar.</p>
      <p style="color: #555;">Gracias por confiar en nosotros.</p>
      <p style="color: #555;"><small>No respondas este email. Para más información, comunícate con tu asegurador o con soporte.</small></p>
    </div>
  </div>
`,
  altaPoliza: (params) => `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
      <h1 style="color: #28a745;">${params.aseguradoName}</h1>
      <p style="color: #555;">Nos complace informarte que tu asegurador te registro una póliza.</p>
      <h2 style="color: #333;">Detalles de la Póliza</h2>
      <p style="color: #555;">A continuación, los detalles de tu póliza recién generada:</p>
      <ul style="color: #555;">
       <li><strong>Aseguradora:</strong> ${params.poliza.aseguradora}</li>
        <li><strong>Tipo de cobertura:</strong> ${params.poliza.tipoCobertura}</li>
        <li><strong>Dominio del Vehículo:</strong> ${params.poliza.vehiculo.dominio}</li>
        <li><strong>Marca y Modelo:</strong> ${params.poliza.vehiculo.marca} ${params.poliza.vehiculo.modelo}</li>
        <li><strong>Prima asegurada:</strong> ${params.poliza.primaSegura}</li>
      </ul>
      <p style="color: #555;">Tu póliza está activa y cubre todos los aspectos detallados anteriormente. Si tienes alguna pregunta o necesitas más detalles, no dudes en ponerte en contacto con tu asegurador.</p>
      <p style="color: #555;">¡Gracias por confiar en nosotros! Estaremos a tu disposición para cualquier consulta adicional.</p>
      <p style="color: #555;"><small>No respondas este correo. Para más información, comunícate con tu asegurador o con nuestro soporte.</small></p>
    </div>
  </div>
`,
  cambioEstadoSolicitud: (params) => `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
      <h1 style="color: #007bff;">Cambio de estado en tu solicitud</h1>
      <p style="color: #555;">Hola <strong>${params.aseguradoName}</strong>,</p>
      <p style="color: #555;">Te informamos que el estado de tu solicitud con ID <strong>${params.nroSolicitud}</strong> ha cambiado.</p>
      <div style="background-color: #e9ecef; padding: 10px; border-radius: 4px;">
        <strong style="color: #333;">Nuevo estado:</strong> ${params.nuevoEstado}
      </div>
      <p style="color: #555;">Si tienes alguna pregunta o necesitas más detalles sobre este cambio, no dudes en contactar a tu asegurador.</p>
      <p style="color: #555;">Gracias por confiar en nosotros.</p>
      <p style="color: #555;"><small>No respondas este email. Para más información, comunícate con tu asegurador o con soporte.</small></p>
    </div>
  </div>
`,
  notificacionAsegurador: (params) => `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #333;">Notificación de solicitud de cliente</h1>
          <p style="color: #555;">Estimado asegurador,</p>
          <p style="color: #555;">El cliente <strong>${params.clientName}</strong> ha enviado una nueva solicitud.</p>
          <p style="color: #555;">Por favor, revisa los detalles y sigue el proceso necesario para gestionar esta solicitud.</p>
          <p style="color: #555;"><small>Este es un mensaje automático. No respondas a este correo.</small></p>
        </div>
      </div>
    `,
};
