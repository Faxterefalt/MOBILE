const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('absolutamente nada')
});

app.listen(5000, () => {
    console.log('Port is listening on 5000')
});
