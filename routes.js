module.exports = function(app){
  const application = require("./routes/application");
  // const users = require("./routes/users");
  // const alerts = require("./routes/alerts");

  app.use("/", application)
  // app.use("/users", users)
  // app.use("/alerts", alerts)

}