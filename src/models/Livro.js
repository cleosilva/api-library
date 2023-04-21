import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { 
    type: String, 
    required: [true, "O campo título é obrigatório"] 
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O campo autor é obrigatório"]
  },
  editora: { 
    type: String, 
    required: [true, "O campo editora é obrigatório"] 
  },
  numeroPaginas: { 
    type: Number, 
    required: [true, "O campo número de páginas é obrigatório"],
    min: [10, "O número mínimo de páginas deve ser 10 páginas."]
  },
});

livroSchema.plugin(autopopulate);
const livros = mongoose.model("livros", livroSchema);

export default livros;
