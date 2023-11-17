const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  const user = config.get("mongodbUser");
  const pass = config.get("mongodbPass");
  const connection_str = `mongodb+srv://${user}:${pass}@${db}`;

  mongoose
    .connect(connection_str)
    .then(() => console.log(`Connected to ${db}...`));
};
