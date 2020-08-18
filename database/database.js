const sequelize = require("sequelize");
const { Sequelize } = require("sequelize");
const connection = new Sequelize('guiapress', 'root', 'ncs0105',{
    host:'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;