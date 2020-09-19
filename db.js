const Sequelize = require('sequelize')

// this is sql server
/*const db = new Sequelize({
    dialect: 'mysql',
    database: 'todolist',
    username: 'abhimanyu',
    password: 'abhimanyu'
})*/

// this is sqlite;
const db = new Sequelize({
    dialect: 'sqlite',
    path: ':memory:'
})

const task = db.define("Task", {
  name: {
    type: Sequelize.STRING,

    allowNull: false,
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: Sequelize.TEXT,
  },
  done: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = {
    db,task
}
