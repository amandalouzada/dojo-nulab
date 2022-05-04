

class Conta {
    constructor (){
        this.extrato = [];
    }
    incluirDepositos (operacao, valor){
        this.extrato.push({
            operacao: operacao, 
            valor: valor,
            data: new Date()
          })
 }

}
module.exports = new Conta();
