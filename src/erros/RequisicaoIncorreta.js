import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase {
  constructor(messagem = "Um ou mais dados fornecidos estão incorretos." ) {
    super(messagem, 400);
  }
}

export default RequisicaoIncorreta;
