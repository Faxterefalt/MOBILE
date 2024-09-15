const select = (selector) =>{
    return document.querySelector(selector);
}

const form = select('.form');
const message = select('.message')

const displayMessage = (text, color) =>{
    message.style.visibility = 'visible';
    message.style.backgroundColor = color;
    message.innerText = text;
}

const validateForm = ()=>{
    const title= select('#title').value;
    const content= select('#content').value;
    const thumbnail= select('#thumbnail').value;
    const category= select('#category').value;

    if(!title || !content || !thumbnail || category=='0'){
        //mostrar error 
        return displayMessage('El campo no puede estar vacío', 'red')
    }
    return true;
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('Formulario enviado');
    //Validar el formulario
    validateForm();
});