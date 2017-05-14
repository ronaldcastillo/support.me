const Sequelize = require('sequelize')
const db = require('../config/db')

const Ticket = db.define('ticket', {
  title: Sequelize.STRING,
  content: Sequelize.STRING
})

module.exports = Ticket
