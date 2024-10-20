const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10,20,30]

let nuevoArray;
nuevoArray= tecnologias.filter(tech => tech !== 'React')

//Si al menos uno cumple
//const resultado = numeros.some(numero => numero >155)

//cuál cumple
//const resultado = numeros.find(numero => numero>2)

//si todos cumplen
//const resultado = numeros.every(numero => numero >15)

//Reduce para carrito de compras
//const resultado = numeros.reduce((total,numero)=>numero+total, 0)

//crea un nuevo array en base a una condición
//const resultado = tecnologias.filter(tech => tech !== 'Node.js')
const resultado = numeros.filter(numero => numero < 15)

tecnologias.forEach((tech,index) => console.log(index, tech))
console.log(resultado)

const arrayMap = tecnologias.map(tech => tech)
console.log(arrayMap)