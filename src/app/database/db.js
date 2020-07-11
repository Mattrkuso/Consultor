const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

try {
   sequelize.authenticate();
    console.log('Conectado.');
  } catch (error) {
    console.error('Hubo un error:', error);
  }