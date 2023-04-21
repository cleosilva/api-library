import NaoEncontrado from "../erros/NaoEncontrado.js";
import { livros } from "../models/index.js";

class LivroController {
  static listarLivros = async (req, res, next) => {
    try {
      const buscaLivros = livros.find();

      req.resultado = buscaLivros;

      next();
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const findOneBook = await livros.findById(id);

      if (findOneBook !== null) {
        res.status(200).send(findOneBook);
      } else {
        next(new NaoEncontrado("Id do livro não encontrado!"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivros = async (req, res, next) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).send(livro.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const updateBook = await livros.findByIdAndUpdate(id, { $set: req.body });

      if (updateBook !== null) {
        res.status(200).send({ message: "Livro atualizado com sucesso!" });
      } else {
        next(new NaoEncontrado("Id do livro não encontrado!"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static deletarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const deleteBook = await livros.findByIdAndDelete(id);
      if (deleteBook !== null) {
        res.status(200).send({ message: "Livro deletado com sucesso!" });
      } else {
        next(new NaoEncontrado("Id do livro não encontrado!"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivrosPorFiltro = async (req, res, next) => {
    try {
      const { editora, titulo } = req.query;

      const regex = new RegExp(titulo, "i");

      const busca = {};

      if (editora) busca.editora = editora;
      if (titulo) busca.titulo = regex;

      const livrosResultado = await livros.find(busca);

      res.status(200).send(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };
}

export default LivroController;
