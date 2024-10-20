//manipular html con js
const heading = document.querySelector('.heading')

heading.textContent = 'Nuevo Heading'

console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value= 'Juan'

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace => enlace.textContent = 'pallaringas')