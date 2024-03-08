const express = require("express");

const app = express();
const port = 3000; // try 5000 if troubles
const host = "localhost";
const protocol = "http";

const url = `${protocol}://${host}:${port}/`

app.listen(port, () => {
    console.log(`Server listening at:\n  ${url}`);
});

app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.get("/express", (req, res) => {
    res.send("Creating routes with Express is simple!");
});

app.get("/user", (req, res) => {
    res.send("Received a GET request for user!");
});

app.get("/user/:userid", (req, res) => {
    res.send(`Ah, want to know about user ${req.params.userid}, eh?`);
});

app.get("/user/:userid/profile", (req, res) => {
    res.send(`${req.params.userid} is great. We laugh. We cry. Better than <i>Cats</i>.`);
});

app.get("/user/:userid/profile/:data", (req, res) => {
    res.send(`Oh no, that'd be an invasion of provacy. ${req.params.userid} probably doesn't want ${req.params.data} out in the open.`);
});

app.get("/user/:userid/profile/:data", (req, res) => {
    res.send(
      `Navigated to the user profile page for: ${req.params.userid}, with the data: ${req.params.data}.`
    );
});


app.post("/user", (req, res) => {
    res.send("Received a POST request for user!");
});

app.patch("/user", (req, res) => {
    res.send("Received a PATCH request for user! If only it were that easy, eh?");
});

app.delete("/user", (req, res) => {
    res.send("HAHA! It actually IS that easy! But don't do that. People, don't do murders.");
});

app.get("/*", (req, res) => {
    res.send(`Hello! You have reached the catch-all endpoint!`);
    // console.group("Request")
    // console.log(req)
    // console.groupEnd()
    // console.group("Response")
    // console.log(res)
    // console.groupEnd()

    // trying to get message to browser console
    // somepathto.userconsole(`Request:\n${req}\n\nResponse:\n${res}`);
    let test = "Did this show up in the browser console?"
    // trying:
    //  res.send(test) [no]
    //  res.console(test)
    //  req.send(test)
    //  req.console(test)
    //  something .use()
    //  error pathways
});

