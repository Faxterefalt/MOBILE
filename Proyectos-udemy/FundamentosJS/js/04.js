//Objetos

const producto ={
    nombre:"Tablet",
    precio:330,
    disponible:true
}
//manera bonita de imprimir objetos
console.table(producto)

//acceso
console.log(producto.precio)
console.log(producto.nombre)

//Destructuring, sacar valores
const { disponible } = producto
console.log(disponible)

//Object literal enhancement, colocar valores
const autenticado = true
const usuario = "Juan"

const nuevoObjeto={
    autenticado,
    usuario
}

console.table(nuevoObjeto)