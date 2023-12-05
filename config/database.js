const mysql = require("mysql2/promise");

const connectionPool = mysql.createPool({
  uri: process.env.DB_URI || `msql://root@localhost:3306`, //msql://root:password@localhost:3306
});

module.exports = { connectionPool };

//iahfilasdhfhkjadsbguaisdf
