const autenticado = false;   

!autenticado ? 
console.log("sí") : 
console.log("no");


//doble ternario
const saldo=600
const pagar = 5009
const tarjeta = false

saldo > pagar ? 
console.log("puedes pagar"):
    tarjeta ? 
    console.log('puedes pagar con tarjeta'):
console.log("no puedes ni con tarjeta")