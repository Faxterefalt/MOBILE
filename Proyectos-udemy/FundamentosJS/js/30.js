//fetch API -Async await

const url ="https://jsonplaceholder.typicode.com/comments";

const consultarAPI2 = async () =>{
    const res = await fetch(url)
    console.log('después de respuesta');
    const resultado = await res.json();
    console.log('después de resultado');

    
}
consultarAPI2();