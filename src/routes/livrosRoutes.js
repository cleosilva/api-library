import express from 'express';
import livroController from '../controllers/livrosController.js'

const router = express.Router();

router.get('/livros', livroController.listarLivros);
router.post('/livros', livroController.cadastrarLivros);

export default router;