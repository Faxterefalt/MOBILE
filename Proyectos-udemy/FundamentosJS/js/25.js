//Eventos del dom

const inputNombre = document.querySelector('.nombre')

inputNombre.addEventListener('input',function(e){
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input',funcionPassword)

function funcionPassword(){
    inputPassword.type='text'

    setTimeout(()=>{
        inputPassword.type = 'text'
    },500);
}