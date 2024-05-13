import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import { conexionMongo } from "./controllers/conexion.js";
import { router } from "./routes/experiencias.js";
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

conexionMongo();
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
