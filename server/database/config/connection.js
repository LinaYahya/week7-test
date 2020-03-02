require('env2')('./config.env');
const {Pool} = require('pg');

let db_url = '';
if(process.env.NODE_ENV === 'development'){
  db_url = process.env.DB_URL;
}else{
  db_url = process.env.DATABASE_URL
}

if(!db_url) throw new Error('database not exists');

const options = {
  connectionString : db_url,
  ssl : true
}
module.exports = new Pool(options);