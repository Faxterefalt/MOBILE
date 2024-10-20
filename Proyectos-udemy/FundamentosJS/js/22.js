//Selectores DOM
const heading = document.querySelector('.heading')
console.log(heading)
console.log(heading.textContent)
console.log(heading.classList)
console.log(heading.id)

const enlaces = document.querySelectorAll('.navegacion a')
const enlaces2 = Array.from(enlaces)

console.log(enlaces)
//imprimir el textcontent de todos los enlaces
enlaces2.forEach(enlace => console.log(enlace.textContent))