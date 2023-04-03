import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router();

router.get("/livros", livroController.listarLivros);
router.get("/livros/:id", livroController.listarLivroPorId);
router.post("/livros", livroController.cadastrarLivros);
router.put("/livros/:id", livroController.atualizarLivro);
router.delete("/livros/:id", livroController.deletarLivro);


export default router;