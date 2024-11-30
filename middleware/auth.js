async function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  if (!token || token !== process.env.TOKEN_ESTATICO) {
    return res.status(401).json({ message: "Acceso no autorizado" });
  }
  next();
}

export default auth;
