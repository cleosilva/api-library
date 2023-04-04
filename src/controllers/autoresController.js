import autores from "../models/Autor.js";

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
        res.status(404).send({ message: "Id do Autor não localizado."});
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
      await autores.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Autor atualizado com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  };

  static deletarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      await autores.findByIdAndDelete(id);
      res.status(200).send({ message: "Autor deletado com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  };
}

export default AutorController;
