//Condición y comparador estricto

const numero1 = 20;
const numero2 = "20";

/**
 * == Compara los valores
 * === Compara los valores y el tipo de dato
 */

if(numero1 === Number(numero2)){
    console.log("Si son iguales");
}else{
    console.log("No son iguales");
}

const autenticado = true;
if(autenticado){
    console.log("Si puedes ver Netflix");
}