const db = require ('../database/db');
const { Pool } = require('pg');

const insertUser = async ()=> {
    const text = 'INSERT INTO usuarios(correo, password)Value($1, $2)'
    const values = ['jhon', 'holamundo']
    'INSERT INTO usuarios (correo, password) VALUES ("jhon", "holamundo")'
     await pool.query( text, values);
     console.log(res);
     pool.end();
}; 