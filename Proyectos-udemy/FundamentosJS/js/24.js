//Eventos del dom clicks
//const clickHeading= ()=>console.log('click en el heading');

const heading = document.querySelector('.heading');
heading.addEventListener('click',()=>{
    heading.textContent = 'Nuevo Heading'
})



const enlaces = document.querySelectorAll('.navegacion a');
enlaces.forEach(enlace=>{
    enlace.addEventListener('click',()=>{
        console.log('click en el enlace')
    })
})
