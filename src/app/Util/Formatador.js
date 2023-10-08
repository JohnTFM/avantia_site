
export class Formatador {
    static formatPhoneNumber(phoneNumber) {

        const numericOnly = phoneNumber.replace(/\D/g, '');
        if (numericOnly.length <= 2) {
            return numericOnly;
        } else if (numericOnly.length <= 6) {
            return `(${numericOnly.substr(0, 2)}) ${numericOnly.substr(2)}`;
        } else if (numericOnly.length <= 10) {
            return `(${numericOnly.substr(0, 2)}) ${numericOnly.substr(2, 4)}-${numericOnly.substr(6)}`;
        } else if (numericOnly.length <= 11) {
            return `(${numericOnly.substr(0, 2)}) ${numericOnly.substr(2, 5)}-${numericOnly.substr(7)}`;
        } else {

            // Retorna o número original se tiver mais de 11 dígitos
            return phoneNumber.substring(0,phoneNumber.length-1);
        }
    }

    static desformatarTelefone(telefone){

        return telefone.toString().replace(/[() -]/g, '');
    }
    static restringirCaracteres(palavra,qntd){

        let novaPalavra = palavra?.substring(0,qntd);
        if(palavra?.length> novaPalavra?.length){

            novaPalavra = `${novaPalavra?.substring(0,qntd-3)}...`
        }
        return novaPalavra;
    }

    static decimalComVirgula(numero){
        let result = Number.parseFloat(numero).toFixed(2);
        result = result.toString().replace('.',',');


        return result;
    }

    static formatarTempoExpiracao(tempo){

        const tempoNumber = Number.parseFloat(tempo);

        if(tempoNumber-1<0){

            return `${tempoNumber*60}min`
        }
        return `${tempoNumber}h`;
    }


}