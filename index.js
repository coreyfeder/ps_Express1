const express = require("express");

const app = express();
const port = 3000; // try 5000 if troubles
const host = "localhost";
const protocol = "http";

const url = `${protocol}://${host}:${port}/`

app.listen(port, () => {
    console.log(`Server listening at: ${url}.`);
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

app.patch("/user", (req, res) => {
    res.send("Received a PATCH request for user! If only it were that easy, eh?");
});

app.delete("/user", (req, res) => {
    res.send("HAHA! It actually IS that easy! But don't do that. Murder is bad, y'all.");
});
