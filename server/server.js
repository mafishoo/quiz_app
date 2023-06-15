const express = require("express");
const app = express();
const cors = require('cors');
var mongoose = require("mongoose");
const quizDataRouter = require("./route/quizData")

const port = 3000;
const quizData = [
  
  {
    question: "which planet is known as the Red Planet?",
    options: ["venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  }
]

mongoose
  .connect(
    "mongodb+srv://mafi64:Test1234@employee-app.chwgxva.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("successfully connected to db"))
  .catch((e) => console.log("Error connecting to db"));

const loging = (req, res, next) => {
  console.log(
    `the currunt date is [${new Date()}] ${req.method} the url is ${req.url}`
  );
  next();
};



// Register middleware
app.use(loging);
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001'
}));
app.use("/api", quizDataRouter)


// Define routes
app.get("/home", (req, res) => {
 
  console.log (req.query.id)
  
  
  res.status(200).send("Home Page!");

});

app.get("/about/::id/name", (req, res) => {
  res.send("About Page!");
  
  console.log (req.params.id)
  console.log (req.params.name)
});

app.get("/Contact", (req, res) => {
  res.send("Contact Page!");
});

app.get("/user", (req, res) => {
  res.json({ "name": "John Doe" });
});

app.post("/", (req, res) => {
  console.log (req.body)
  res.json(req.body);
});

app.put("/items", (req, res) => {
  res.send(`${req.method} request received `);
});

app.delete("/items", (req, res) => {
  res.send(`${req.method} request received `);
  
});

app.get("/quizData",(req,res) => {
  
  res.send(quizData)
})

app.get("/title",(req,res) =>
res.send({
  "title":"Quiz Application"}))


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
