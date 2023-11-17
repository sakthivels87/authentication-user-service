const express = require("express");
const auth = require("./routes/auth");
const users = require("./routes/user");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", users);
app.use("/api/auth", auth);
require("./startup/db")();

app.listen(3001, () => console.log("Successfully listening on Port 3001"));
module.exports = app;
