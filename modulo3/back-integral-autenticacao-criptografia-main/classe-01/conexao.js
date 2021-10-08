const { Pool } = require('pg')


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pokedex',
  password: 'Nr83620221.',
  port: 5432
})


const query = (text, params) => {
  return pool.query(text, params)
}


module.exports = {
  query
}