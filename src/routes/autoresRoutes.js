import express from "express";
import autoresController from "../controllers/autoresController.js";

const router = express.Router();

router.get("/autores", autoresController.listarAutores);
router.get("/autores/:id", autoresController.listarAutorPorId);
router.post("/autores", autoresController.cadastrarAutores);
router.put("/autores/:id", autoresController.atualizarAutor);
router.delete("/autores/:id", autoresController.deletarAutor);


export default router;