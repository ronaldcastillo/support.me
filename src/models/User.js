const Sequelize = require('sequelize')
const db = require('../../config/db')

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
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

module.exports = User
