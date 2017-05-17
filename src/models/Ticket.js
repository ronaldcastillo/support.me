const Sequelize = require('sequelize')
const db = require('../../config/db')
const User = require('./User')
const TimestampAttributes = require('./TimestampAttributes')

const Ticket = db.define('ticket', Object.assign({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  content: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  },
  createdBy: {
    type: Sequelize.INTEGER,
    field: 'created_by',
    references: {
      model: User,
      key: 'id'
    }
  }
}, TimestampAttributes))

module.exports = Ticket
