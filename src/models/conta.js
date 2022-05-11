
const ENUM_OPERACAO = {
    deposito: 'Depósito',
    retirada: 'Retirada'
}

class Conta {
    constructor (){
        this.extrato = [];
    }
    
    _validaOperacao(operacao){
        if (ENUM_OPERACAO[operacao]){
            return true;
        }
        return false;
    }

    incluirOperacao({operacao,valor}){
        if(this._validaOperacao(operacao)) {
            this.extrato.push({
                operacao: operacao, 
                valor: valor,
                data: new Date()
            })
        }
    }

}
module.exports = new Conta();
