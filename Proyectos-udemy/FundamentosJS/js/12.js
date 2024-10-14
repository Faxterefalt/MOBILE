//Funciones - Function Declaration
/**
sumar(21,23)
sumar()
function sumar(numero1=0,numero2=0){
console.log(numero1+numero2)
}
sumar(10,23)
sumar(14)
*/
function sumar(numero1=0,numero2=0){
    return {
        resultado: numero1 + numero2,
        mensaje: 'heyy'
    }
}

const {resultado,mensaje} = sumar(20,30)
console.log(resultado)
console.log(hola)
