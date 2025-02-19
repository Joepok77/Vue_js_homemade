const { Sequelize } = require('sequelize')
const sequelizeClient = new Sequelize(
    'homemade',
    'homemade',
    'johan',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    }

)

module.exports = sequelizeClient