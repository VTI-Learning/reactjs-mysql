const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

// Crear un pool para conectar a la base de datos
const dataBase = mysql.createPool({
    host: 'localhost',
    database:'reactjs_mysql',
    user:'root',
    password:''
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3001, () => {
    console.log('runnig on port 3001');
});

// Primera ruta creada
app.get('/',(req,res) => {
    res.send('Hola mundo, ¿qué tal estás?');
});

app.get('/api/movie/get',(req,res) => {
    const sqlSelect = "SELECT * FROM movies ORDER BY id DESC";
    dataBase.query(sqlSelect, (error,result) => {
        res.send(result);
    });
});

app.post('/api/movie/add',(req,res) => {
    const movieName = req.body.movieName;
    const movieDescription = req.body.movieDescription;

    const sqlInsert = "INSERT INTO movies (name,description) VALUES (?,?)";
    dataBase.query(sqlInsert, [movieName, movieDescription], (error,result) => {
        console.log(result);
    });
});
