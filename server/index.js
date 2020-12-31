const express = require('express')
const app = express()

app.listen(3001, () => {
    console.log('runnig on port 3001');
});

// Primera ruta creada
app.get('/',(req,res) => {
    res.send('Hola mundo, ¿qué tal estás?');
});
