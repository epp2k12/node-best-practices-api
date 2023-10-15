const express = require("express");
var bodyParser = require('body-parser')

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("<h2>It's working</h2>");
})

app.use('/api/v1/workouts', v1WorkoutRouter);


app.listen(PORT, () => {

    console.log(`API is listening in port ${PORT}`);

})