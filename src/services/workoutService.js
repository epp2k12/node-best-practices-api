// In src/services/workoutService.js
const Workout = require("../database/Workout");

const getAllWorkouts = async () => {
    const allWorkouts = await Workout.getAllWorkouts();

    // console.log("the rows allWorkouts: ", allWorkouts);
    return allWorkouts;
}

const getOneWorkout = () => {
    return;
}

const createNewWorkout = () => {
    return;
}

const updateOneWorkout = () => {
    return;
}

const deleteOneWorkout = () => {
    return;
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };