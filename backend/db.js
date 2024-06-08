const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud_db', 'root', 'password', {
  host: 'mysql',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
