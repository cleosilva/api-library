import NaoEncontrado from "../erros/NaoEncontrado.js";
import {autores} from "../models/index.js";

class AutorController {
  static listarAutores = async (req, res, next) => {
    
    try {
      const autoresResultado = await autores.find();
      res.status(200).json(autoresResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorResultado = await autores.findById(id);

      if(autorResultado !== null){
        res.status(200).json(autorResultado);
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarAutores = async (req, res, next) => {
    try {
      let autor = new autores(req.body);
      const cadastraAutor = await autor.save();
      res.status(201).send(cadastraAutor.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorResultado = await autores.findByIdAndUpdate(id, { $set: req.body });

      if (autorResultado !== null){
        res.status(200).send({ message: "Autor atualizado com sucesso!" });
      } else {
        next(new NaoEncontrado("Id do autor não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static deletarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const excluiAutor = await autores.findByIdAndDelete(id);
  
      if (excluiAutor !== null){
        res.status(200).send({ message: "Autor deletado com sucesso!" });
      } else {
        next(new NaoEncontrado("Id do autor não encontrado!"));
      }
    } catch (erro) {
      next(erro);
    }
  };
}

export default AutorController;
