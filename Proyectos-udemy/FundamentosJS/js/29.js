//fetch API
const url ="https://jsonplaceholder.typicode.com/comments";

const consultarAPI = () =>{
    fetch(url)
    .then(res => res.json())
    .then((resultado)=>{
    resultado.forEach(comentario=>
    {
        console.log(comentario);
    }
    )
})
}
consultarAPI();