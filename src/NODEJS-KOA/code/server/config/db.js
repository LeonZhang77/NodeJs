const Sequelize = require('sequelize');
var logger4 = require('../utils/log4js');

const sequelize = new Sequelize('nodejskoa', 'root', '123qwe!@#QWE', {
    host: '192.168.31.232',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
});

sequelize.authenticate()
    .then(() => {
        logger4.info('Connection has been established successfully.');
    })
    .catch(err => {
        logger4.error('Unable to connect to the database:', err);
    });

sequelize.sync()
    .then(() => {
        logger4.info('Database synchronized successfully.');
    })
    .catch(err => {
        logger4.error('Error synchronizing database:', err);
    });

module.exports = sequelize;