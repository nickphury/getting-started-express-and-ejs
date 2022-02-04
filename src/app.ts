import express from "express";
import path from "path";
const app = express();
const port = 3005;
// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world !");
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.warn(`Server started at http://localhost:${port}`);
});
