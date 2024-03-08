const express = require("express");

const app = express();
const port = 3000; // try 5000 if troubles

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});

// no paths yet, not even '/'. let's declare a route!
app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.get("/express", (req, res) => {
    res.send("Creating routes with Express is simple!");
});

// now let's try other http methods
app.get("/user", (req, res) => {
    res.send("Received a GET request for user!");
});

app.post("/user", (req, res) => {
    res.send("Received a POST request for user!");
});
