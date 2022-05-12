const conta = require("./models/conta");

describe("Teste Conta", () => {
  test("Deve ser inválida", () => {
    const ehValida = conta._validaOperacao("invalida");
    expect(ehValida).toBe(false);
  });
  test("Depósito deve ser um tipo de operação válida", () => {
    const depositoEhValido = conta._validaOperacao("deposito");
    const retiradaEhValido = conta._validaOperacao("retirada");
    expect(depositoEhValido).toBe(true);
    expect(retiradaEhValido).toBe(true);
  });
  test("Deve retornar o valor do saldo", () => {
    conta.extrato.push(
      {
        operacao: "deposito",
        valor: 100,
      },
      {
        operacao: "retirada",
        valor: 20,
      }
    );
    const valorSaldo = conta.calcularSaldo();
    expect(valorSaldo).toBe(80);
  });
  test("Deve retornar o valor do saldo 0", () => {
    const valorSaldo = conta.calcularSaldo();
    expect(valorSaldo).toBe(0);
  });
  test("Saldo não pode ser negativo", () => {
    const valorSaldo = conta.calcularSaldo();
    expect(valorSaldo).toBeGreaterThanOrEqual(0);
  });
});
