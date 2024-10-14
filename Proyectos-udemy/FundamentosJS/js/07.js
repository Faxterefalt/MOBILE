//unir 2 objetos o más
const producto ={
    nombre:"Tablet",
    precio:330,
    disponible:true
}

const cliente={
    nombre:'Juan',
    premium: true
}

//NO const nuevoObjeto = Object.assign(producto, cliente)
const nuevoObjeto2= { 
    producto:{...producto},
    cliente:{ ...cliente}
 }

console.log(nuevoObjeto2)

console.log(cliente)
console.log(producto)