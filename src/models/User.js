const Sequelize = require('sequelize')
const db = require('../../config/db')
const TimestampAttributes = require('./TimestampAttributes')

const User = db.define('user', Object.assign({
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
  }
}, TimestampAttributes))

module.exports = User
