const DB = require("./db.json");

const pool = require("../config/connection");



const getAllWorkouts = async () => {

    // sample format for retrieving data from DB 
    // let selectQuery = 'SELECT * FROM ?? INNER JOIN ?? ON ?? = ?? WHERE ?? = ?';
    // let query = mysql.format(selectQuery, ["courses_offered", "programming_languages", "courses_offered.programming_language_id", "programming_languages.id","courses_offered.id", id]);
    

    return new Promise((resolve, reject)=> {
            
        let query = 'select * from workouts';
        pool.query(query, (err, results) => {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
        });


    });

    // pool.getConnection((err, connection) => {

    //     const sql_statement = 'select * from workouts';
    //     connection.query(sql_statement, (err, rows) => {

    //         connection.release();

    //         console.log("the rows inside Workout DB: ", rows);

    //         return rows;

    //     })
    // }
    // );

    // return DB.workouts;
}

module.exports = {
    getAllWorkouts
};