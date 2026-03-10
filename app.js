const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const authJWT = require("./middlewares/authJWT.middleware");
const usersRoutes = require("./routes/usersRoutes");
const articlesRoutes = require("./routes/articlesRoutes");
const logRequests = require("./middlewares/logger.middleware");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());

app.set("views", "./views");
app.set("view engine", "pug");
app.engine("ejs", require("ejs").__express);
app.use(express.static("public"));
app.use(logRequests);

// main route
app.get("/", (req, res) => {
  res.send("Get root route");
});
app.get("/set-theme/:theme", (req, res) => {
  const theme = req.params.theme;

  res.cookie("theme", theme, {
    maxAge: 86400000,
  });

  res.send(`Theme saved: ${theme}`);
});

const SECRET = "supersecretkey";

app.get("/login", (req, res) => {
  const user = { id: 1, username: "admin" };

  const token = jwt.sign(user, SECRET);

  res.cookie("token", token, {
    httpOnly: true,
  });

  res.send("Logged in");
});
app.get("/profile", authJWT, (req, res) => {
  res.send(`Hello ${req.user.username}`);
});
// routes
app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

// port
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});