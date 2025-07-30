const { Pool } = require("pg");
require("dotenv").config(); 

const pool = new Pool({
  connectionString: process.env.REACT_APP_API_BASE_URL, 
  ssl: {
    rejectUnauthorized: false, 
  },
});

module.exports = pool;
