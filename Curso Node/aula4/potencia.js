var potencia = function (a,b){

    for (i = 1; i < b; i++) {
        a = a * a;
    }

    return a;
}

module.exports = potencia;