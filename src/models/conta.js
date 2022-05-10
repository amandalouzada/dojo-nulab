

class Conta {
    constructor (){
        this.extrato = [];
    }
   
    incluirOperacao({operacao,valor}){
        this.extrato.push({
            operacao: operacao, 
            valor: valor,
            data: new Date()
    })
 }

}
module.exports = new Conta();
