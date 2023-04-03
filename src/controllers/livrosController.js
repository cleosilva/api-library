import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = async (req, res) => {
    try {      
      const buscaLivros = await livros.find();
      res.status(200).json(buscaLivros);
      
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  };

  static listarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const findOneBook = await livros.findById(id);
      res.status(200).send(findOneBook);
      
    } catch (error) {
      res.status(400).send({message: `${error.message} - Id do livro não localizado!`});
    }
  };

  static cadastrarLivros = async (req, res) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).send(livro.toJSON());
      
    } catch (error) {
      res.status(500).send({ message: `${error.message} - falha ao cadastrar livro` });
    }
  };

  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Livro atualizado com sucesso!" });
      
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
    
  };

  static deletarLivro = async(req, res) => {

    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(200).send({ message: "Livro deletado com sucesso!" });
      
    } catch (error) {
      res.status(500).send({ message: error.message });
      
    }

  };
}

export default LivroController;

