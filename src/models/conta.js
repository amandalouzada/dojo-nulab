const soma = require("../utils/soma");
const Transacao = require("./transacao");

class Conta {
  constructor() {
    this.extrato = [];
  }

  //   calcularSaldo() {
  //     let saldo = 0;
  //     this.extrato.forEach((ext) => {
  //       if (ext.operacao === "retirada") {
  //         saldo -= ext.valor;
  //       } else {
  //         saldo += ext.valor;
  //       }
  //     });
  //     return saldo;
  //   }

  calcularSaldo() {
    return this.extrato
      .map((transacao) => {
        return transacao.retornaValorReal();
      })
      .reduce(soma, 0);
  }

  retiradaValida(valorRetirada) {
    return valorRetirada <= this.calcularSaldo();
  }

  incluirOperacao({ operacao, valor }) {
    const transacao = new Transacao({ operacao, valor });
    if (transacao.validaOperacao(operacao)) {
      if (operacao === "deposito" || this.retiradaValida(valor)) {
        this.extrato.push(transacao);
      }
    }
  }
}
module.exports = new Conta();
