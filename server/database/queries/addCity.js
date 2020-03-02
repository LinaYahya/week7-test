const connection = require('../config/connection');

const addCity = (data) => {
  return connection.query('INSERT INTO cities (name , city) VALUES ($1 ,$2)', [data.name , data.city])
}

module.exports = addCity;