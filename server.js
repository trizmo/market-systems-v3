const express = require("express");
const path = require("path");
const logger = require("morgan");
const session = require("express-session");
const passport = require("./config/passport");


// Starting express app
const app = express();

// Setting Authorization
const isAuth = require("./config/middleware/isAuthenticated");
const authCheck  = require("./config/middleware/attachAuthenticationStatus");

// Allow sessions
// Kicks user out after 10minutes (comment out cookie to turn off)
app.use(session({
  secret: "srilankandenzel",
  cookie: {
    maxAge: 600000
  }
}));

// Passport: setup
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

// Views engine: setup
app.set("view", path.join(__dirname, "views"));

// Handlebars: setup
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: 'main'
}));
app.set("view engine", "handlebars");



// For logging / debugging use:
app.use(logger('dev'));

// Express static / public pages: setup
app.use(express.static(path.join(__dirname, "public")))

require('./routes')(app);

module.exports = app;