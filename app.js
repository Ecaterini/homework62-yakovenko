const express = require("express");
const app = express();

const usersRoutes = require("./routes/usersRoutes");
const articlesRoutes = require("./routes/articlesRoutes");
const logRequests = require("./middlewares/logger.middleware");

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

// routes
app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

// port
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});