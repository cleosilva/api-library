import express from "express";
import livroController from "../controllers/livrosController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router.get("/livros", livroController.listarLivros, paginar);
router.get("/livros/busca", livroController.listarLivrosPorFiltro, paginar);
router.get("/livros/:id", livroController.listarLivroPorId);
router.post("/livros", livroController.cadastrarLivros);
router.put("/livros/:id", livroController.atualizarLivro);
router.delete("/livros/:id", livroController.deletarLivro);


export default router;