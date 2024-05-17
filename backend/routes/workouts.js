// includes express app
const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

//creates router instance
const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET a single workouts
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a single workout
router.delete("/:id", deleteWorkout);

//UPDATE a single workout
router.patch("/:id", updateWorkout);

//exports router
module.exports = router;
