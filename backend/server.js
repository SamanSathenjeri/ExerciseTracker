require("dotenv").config();
const express = require("express");

//express app
const app = express();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//uses nodemon for live updating
//adds "dev":"nodemon server.js" in package.json to automatically run nodemon when doing
// npm run dev

//middleware
//checks if any body/data is sent to server
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//uses whatever handler workouts returns on the app
//only routes to app when we fire a request to that particular path
app.use("/api/workouts", workoutRoutes);

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requsts
    app.listen(process.env.PORT, () => {
      console.log("connection to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
