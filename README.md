# **API Send Mail**

## **Descripción**

Esta API permite enviar correos electrónicos a través de un servicio externo de manera segura y sencilla, solo necesitas una cuenta de email con autenticación básica.

## **Requisitos previos**

1. **Node.js** (versión mínima recomendada: `20.12.2`).
2. **npm** o **yarn** como gestor de paquetes.
3. Tener configuradas las variables de entorno para la conexión con la API de correos.

## **Instalación**

1. Clona el repositorio:
   ```bash
   git clone url_del_repositorio
   ```
2. Entra al directorio del repositorio:
   ```bash
   cd tu-repositorio
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```

## **Configuración**

1. Creá un archivo .env en la raíz del proyecto y configurá las siguientes variables:
   PORT = puerto
   EMAIL_USER = tu-mail
   EMAIL_PASS = password-email
   TOKEN_ESTATICO = token-estatico

## **Uso**

1. Iniciar el servidor:
   ```bash
   npm start dev
   ```
2. Realizar una solicitud POST al endpoint principal "/send-email" con un body en formato JSON como el siguiente:
   ```json
   {
   "to": "destinatario@correo.com",
   "subject": "Asunto del correo",
   "template": "El template a utilizar",
   "params":"Parametros en formato json que son utilizados en el template"
   }
   Debes incluir un token de autorización en los headers de la solicitud:
   ```

```json
{
  "Authorization": "Bearer token-estatico"
}
```
