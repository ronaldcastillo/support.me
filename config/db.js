const Sequelize = require('sequelize')
const config = require('config')

const db = new Sequelize(
  config.get('database.name'),
  config.get('database.username'),
  config.get('database.password')
)

module.exports = db
