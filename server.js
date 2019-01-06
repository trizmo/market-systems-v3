const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require('body-parser');
const session = require("express-session");
const passport = require("./config/passport");


// Selecting the port for server
var PORT = process.env.PORT || 8080;

// Starting express app
const app = express();

// Setting Authorization
const isAuth = require("./config/middleware/isAuthenticated");
const authCheck  = require("./config/middleware/attachAuthenticationStatus");

// Allow sessions
// Kicks user out after 10minutes (comment out cookie to turn off)
// app.use(session({
//   secret: "srilankandenzel",
//   cookie: {
//     maxAge: 600000
//   }
// }));

app.use(session({ secret: "srilankandenzel", resave: true, saveUninitialized: true }));

// Passport: setup
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

// Views engine: setup
app.set("views", path.join(__dirname, "views"));

// Handlebars: setup
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: 'main'
}));
app.set("view engine", "handlebars");

// For logging / debugging use:
app.use(logger('dev'));

// Body parsing - i think this is for req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express static / public pages: setup
app.use(express.static(path.join(__dirname, "public")))

require('./routes')(app);

// Starting server and displaying location and port
app.listen(PORT, function(){
  console.log("Server listening on http://localhost:" + PORT)
})

module.exports = app;