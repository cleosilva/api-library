import autores from "../models/Autor.js";

class AutorController {
  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autores.find();
      res.status(200).json(autoresResultado);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor." });
    }
  };

  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const autorResultado = await autores.findById(id);
      res.status(200).json(autorResultado);
    } catch (error) {
      res
        .status(400)
        .json({ message: `${error.message} - Id do Autor não localizado.` });
    }
  };

  static cadastrarAutores = async (req, res) => {
    try {
      let autor = new autores(req.body);
      const cadastraAutor = await autor.save();
      res.status(201).send(cadastraAutor.toJSON());
    } catch (error) {
      res
        .status(500)
        .send({ message: `${error.message} - falha ao cadastrar Autor` });
    }
  };

  static atualizarAutor = async (req, res) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Autor atualizado com sucesso!" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static deletarAutor = async (req, res) => {
    try {
      const id = req.params.id;

      await autores.findByIdAndDelete(id);
      res.status(200).send({ message: "Autor deletado com sucesso!" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
}

export default AutorController;
