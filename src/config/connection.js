const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'express_db001'
// })

const pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node_best_practice_api'
    }
)

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err.sqlMessage);
        // return;
    }
});

module.exports = pool;
