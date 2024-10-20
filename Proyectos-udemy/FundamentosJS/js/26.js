//Eventos del dom: submit
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit',e=>{
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    if(nombre === '' || password === '')
        console.log('Mostrar modal de ingresar nombre y password')
    else
        console.log('Todo bien')
    
    console.log('Evento submit')
})