// Basic connection
const { Pool } = require('pg');

const config = {
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'postgres'
};

const pool = new Pool(config);
/*****Mostrar Usuarios********/
const Mostrar = async () => {
    try {
        const res = await pool.query('select * from  usuarios');
        // console.log(res)
        console.log(res.rows);
        pool.end();
    } catch (e) {
        console.log(e);
    }
};
/****Insertar Usuarios ******/
const insertar = async () => {
    try {
        const text = 'INSERT INTO usuarios(name, password, edad) VALUES ($1, $2, $3)';
        const values = ['john', 'john1234', '123'];

        const res = await pool.query(text, values);
        console.log(res)
        pool.end();
    } catch (e) {
        console.log(e);
    }
};


/***Borrar Usuarios *****/
const borrar = async () => {
    try {
        const text = 'DELETE FROM usuarios WHERE name = $1';
        const value = ['john'];
        const res = await pool.query(text, value);
        console.log(res)
        pool.end();
    } catch (e) {
        console.log(e);
    }
};

const actualizar = async () => {
    const text = 'UPDATE usuarios SET name = $1 WHERE name = $2';
    const values = ['John', 'ryan'];
    const res = await pool.query(text, values);
    console.log(res)
    pool.end();
};

mostrar();
