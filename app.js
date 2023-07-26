const express = require("express");
const path = require("path");
//guarda en el port la variable del entorno de port del sistema o sino existe o no esta configurada usada 3000
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => console.log("Servidor correindo en el puerto " + PORT));
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "register.html"));
});
app.post("/procesar-datos", (req, res) => {
  res.redirect("/");
});
