const Sequelize = require('sequelize')

const host = 'user.ch60pj5mbjpr.eu-west-1.rds.amazonaws.com'
const database = 'user'
const username = 'admin'
const password = 'mypassword'

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 5000
  }
})

module.exports = sequelize
