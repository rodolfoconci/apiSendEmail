import express from "express";
import auth from "../middleware/auth.js";
import { emailTemplates } from "../data/emails.js";
import { emailQueue } from "../data/connection.js";

const emailsRouter = express.Router();

emailsRouter.post("/sendEmail", async (req, res) => {
  const { to, name, template, solicitudId } = req.body;
  const html = emailTemplates[template](name, solicitudId);
  const job = { to, subject: "Solicitud de Ingreso Recibida", html };
  await emailQueue.add(job);
  res.status(200).send("Email en la cola para ser enviado");
});

export default emailsRouter;
