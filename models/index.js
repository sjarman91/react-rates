var Sequelize = require('sequelize');
var db = new Sequelize('postgres:localhost:5432/rates', {logging: false});

var Ten = db.define('ten', {
  value: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

var Thirty = db.define('thirty', {
  value: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = {
  Ten: Ten,
  Thirty: Thirty,
  db: db
}
