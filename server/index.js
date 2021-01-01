const express = require('express');
const app = express();
const mysql = require('mysql');

// Crear un pool para conectar a la base de datos
const dataBase = mysql.createPool({
    host: 'localhost',
    database:'reactjs_mysql',
    user:'root',
    password:''
});

app.listen(3001, () => {
    console.log('runnig on port 3001');
});

// Primera ruta creada
app.get('/',(req,res) => {
    const sqlInsert = "INSERT INTO movies (name,description) VALUES ('Test','Test')"
    dataBase.query(sqlInsert,(error, result) =>{
        //res.send();
        res.send('Hola mundo, ¿qué tal estás?');
    });
});
