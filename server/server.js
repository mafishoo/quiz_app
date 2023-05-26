const express = require("express");
const app = express();
const port = 3000;

const loging = (req, res, next) => {
  console.log(
    `the currunt date is [${new Date()}] ${req.method} the url is ${req.url}`
  );
  next();
};

// Register middleware
app.use(loging);
app.use(express.json());

// Define routes
app.get("/home", (req, res) => {
  res.send("Home Page!");
});
app.get("/about", (req, res) => {
  res.send("About Page!");
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


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
