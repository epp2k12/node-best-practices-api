// In src/controllers/workoutController.js

const workoutService = require("../services/workoutService")


const getAllWorkouts = async (req, res) => {

    const allWorkouts = await workoutService.getAllWorkouts();

    console.log("the allWorkouts inside controller : ", allWorkouts);

    // res.send("Get all workouts!!");
    res.send({
        status: "OK",
        data: allWorkouts,
    })
};

const getOneWorkout = (req, res) => {
    res.send("Get an existing workout!!!");
}

const createNewWorkout = (req, res) => {
    res.send("Create a new workout!!!");
}

const updateOneWorkout = (req, res) => {
    res.send("Update an existing workout!!!");
}

const deleteOneWorkout = (req, res) => {
    res.send("Delete an existing workout!!!");
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}