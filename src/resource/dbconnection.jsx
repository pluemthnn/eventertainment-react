const mysql = require('mysql2/promise'); const dbConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}
// Create a connection to DB
module.exports = async () => {
    try {
        let pool = await mysql.createPool(dbConfig); let connection = pool.getDBConnection(); return connection;
    }
    catch (error) {
        throw error;
    }
}