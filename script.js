let precio = parseInt (prompt ("cual es el precio de la prenda?"))
let desc = parseInt (prompt ("de cuanto es el descuento que desea agregar?"))
let res =(precio*desc)/100, total=precio-res

document.write("valor de la prenda: ","$", precio,"<br>")
document.write("con un descuento del: ",desc,"%","<br>")
document.write("el total a pagar es: ","$", total)