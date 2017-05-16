const Sequelize = require('sequelize')
const db = require('../../config/db')
const User = require('./User')

const Ticket = db.define('ticket', {
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
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_at'
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    field: 'updated_at',
    allowNull: true
  }
})

module.exports = Ticket
