export const emailTemplates = {
  solicitudIngreso: (name, solicitudId) => `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #333;">Solicitud recibida</h1>
          <p style="color: #555;">Hola <strong>${name}</strong>,</p>
          <p style="color: #555;">Tu solicitud ha sido recibida con éxito.</p>
          <div style="background-color: #e9ecef; padding: 10px; border-radius: 4px;">
            <strong style="color: #333;">ID de Solicitud:</strong> ${solicitudId}
          </div>
          <p style="color: #555;">Te informaremos sobre el estado de tu solicitud en breve.</p>
          <p style="color: #555;"><small>No respondas este email.</small></p>
        </div>
      </div>
    `,
};
