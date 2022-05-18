const ENUM_OPERACAO = {
  deposito: "deposito",
  retirada: "retirada",
};

class Transacao {
  constructor({ operacao, valor }) {
    this.operacao = operacao;
    this.valor = valor;
    this.data = new Date();
  }

  validaOperacao() {
    if (ENUM_OPERACAO[this.operacao]) {
      return true;
    }
    return false;
  }

  retornaValorReal() {
    if (this.operacao === ENUM_OPERACAO.retirada) {
      return this.valor * -1;
    }
    return this.valor;
  }
}

module.exports = Transacao;
