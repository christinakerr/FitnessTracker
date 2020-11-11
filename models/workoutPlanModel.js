const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutPlanSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
})

const WorkoutPlan = mongoose.model("WorkoutPlan", workoutPlanSchema)

module.exports = WorkoutPlan;