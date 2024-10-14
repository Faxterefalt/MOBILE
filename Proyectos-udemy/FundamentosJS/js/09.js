//operaciones con arreglos

const tecnologías = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//Añadir elementos

//const nuevoArreglo=[...tecnologías, 'Angular']
const nuevoArreglo=['Angular', ...tecnologías]

//Eliminar elementos

const nuevoArray=tecnologías.filter(function(tech){
    return tech !== 'HTML'
})

//Actualizar elementos

const arrayNuevo = tecnologías.map(function(tech){
    if(tech=='HTML')
        return 'HTML5'
    else
        return tech
})

console.table(tecnologías)
console.table(arrayNuevo)
