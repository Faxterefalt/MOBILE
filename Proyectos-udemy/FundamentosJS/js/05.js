//Manipulación de objetos

const producto ={
    nombre:"Tablet",
    precio:330,
    disponible:true
}
//ni añadir ni eliminar
//Object.freeze(producto)

//solo reescribir valor
//Object.seal(producto)

//reescribir valor
producto.nombre = "Monitor Curvo"

//si no existe, lo añade
producto.imagen = "imagen.jpg"

//eliminar valor
delete producto.disponible

console.table(producto)