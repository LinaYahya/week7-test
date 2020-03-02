const connection = require('../config/connection');

const getCities = () => {
  return connection.query('SELECT * FROM cities');
}

module.exports = getCities;
