document.write("ejercicio 1","<br>")

let precio = parseInt (prompt ("cual es el precio de la prenda?"))
let desc = parseInt (prompt ("de cuanto es el descuento que desea agregar?"))
let res =(precio*desc)/100, total=precio-res

document.write("valor de la prenda: ","$", precio,"<br>")
document.write("con un descuento del: ",desc,"%","<br>")
document.write("el total a pagar es: ","$", total)


document.write("<br>","<br>"," ejercicio 2","<br>",)

let nota1 = parseInt(prompt("ingresa la primera nota"))
let nota2 = parseInt(prompt("ingresa la segunda nota"))
let nota3 = parseInt(prompt("ingresa la tercera nota"))
let prom = (nota1+nota2+nota3)/3

console.log("su promedio es de: ", prom)

document.write("<br>","<br>","ejercicio 3","<br>")

document.write("area de un triangulo","<br>")
let base= parseInt(prompt("cuanto mide la base?"))
let alt= parseInt(prompt("cuanto tiene de altura?"))
let tot = (base*alt)/2

document.write(`el area del triangulo es:  ${tot}`)

document.write("<br>","<br>","ejercicio 4","<br>")

let bas =parseInt(prompt("ingresa el numero base"))
let exp = parseInt (prompt("ingresa el numero exponente"))

function potencia(bas , exp){
    let resultado = 1

    for (let i = 0; i < exp; i++){
        resultado *= base;
    }
    return resultado;
}

document.write(`el resultado obtenido es: ${potencia(base,exp)}`)