import express from "express";
import Experiencia from "../models/experiencia.js"; // Cambiado el nombre de la importación y del modelo
const router = express.Router();

router.post("/experiencia", (req, res) => {
  const nuevaExperiencia = Experiencia(req.body); // Crear una nueva instancia del modelo Experiencia
  nuevaExperiencia
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

router.get("/experiencia", (req, res) => {
  Experiencia.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

router.put("/experiencia/:id", (req, res) => {
  const { id } = req.params;
  const { experiencia } = req.body;
  Experiencia.updateOne({ _id: id }, { $set: { experiencia } })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

router.delete("/experiencia/:id", (req, res) => {
  const { id } = req.params;
  Experiencia.deleteOne({ _id: id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

export { router };
