import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase {
  constructor(messagem = "Página não encontrada!") {
    super(messagem, 404);
  }
}

export default NaoEncontrado;
