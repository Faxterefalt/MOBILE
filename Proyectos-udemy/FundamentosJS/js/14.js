//Funciones - Arrow function

const sumar = function(){
    console.log(3+3);
}
const sumar2 = () =>{
    console.log(12+3);
}

const sumar4 = (a=0, b=0)=>  a + b;
const sumarArrow = () => 2+2;
const resultado = sumarArrow();

sumar();
sumar2();
console.log(sumar4(2,7));
console.log(resultado);