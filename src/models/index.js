const dbConfig = require("../config/db.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const db = {};

db.url = dbConfig.url;
db.Student = require("./Student.js")(mongoose);

module.exports = db;