const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const opts = { toJSON: { virtuals: true } };

const workoutPlanSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ]
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }})

workoutPlanSchema.virtual('totalDuration').get(function () {
    let total = 0;
    for (let i = 0; i < this.exercises.length; i++){
        total += this.exercises[i].duration;
    }
    return total;
})
    


const Workout = mongoose.model("WorkoutPlan", workoutPlanSchema)

module.exports = Workout;