//Objetos - Destructuring con dos o más objetos
const producto ={
    nombre:"Tablet",
    precio:330,
    disponible:true
}

const cliente={
    nombre:'Juan',
    premium: true
}

//usar alias para no confundir
const { nombre, precio, disponible }= producto
const {nombre:nombreCliente, premium} = cliente

console.log(nombre)
console.log(nombreCliente)