let base =parseInt(prompt("ingresa el numero base"))
let exp = parseInt (prompt("ingresa el numero exponente"))

function potencia(base , exp){
    let resultado = 1

    for (let i = 0; i < exp; i++){
        resultado *= base;
    }
    return resultado;
}

document.write(`el resultado obtenido es: ${potencia(base,exp)}`)