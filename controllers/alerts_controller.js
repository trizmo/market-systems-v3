var db  = require('../models');

exports.index = function(req, res) {
  console.log("alerts_controller.index req.user.id: ")
  console.log(req.user.id)
  db.Alert.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(function(dbAlert) {
    console.log(dbAlert);
    res.render('alerts/alerts', {
      layout: 'main-alerts',
      alert: dbAlert
    });
  });
};

exports.createAlert = function(req, res) {
  console.log("createAlert req.user: ")
  console.log(req.user);
  // Add id from User onto req.body
  req.body.UserId = req.user.id;

  db.Alert.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};