const ENUM_OPERACAO = {
  deposito: "Depósito",
  retirada: "Retirada",
};

class Conta {
  constructor() {
    this.extrato = [];
  }

  calcularSaldo() {
    let saldo = 0;
    this.extrato.forEach((ext) => {
      if (ext.operacao === "retirada") {
        saldo -= ext.valor;
      } else {
        saldo += ext.valor;
      }
    });
    return saldo;
  }

  validaRetirada(valorRetirada) {}

  _validaOperacao(operacao) {
    if (ENUM_OPERACAO[operacao]) {
      return true;
    }
    return false;
  }

  incluirOperacao({ operacao, valor }) {
    if (this._validaOperacao(operacao)) {
      this.extrato.push({
        operacao: operacao,
        valor: valor,
        data: new Date(),
      });
    }
  }
}
module.exports = new Conta();
