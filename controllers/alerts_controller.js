var db  = require('../models');

exports.index = function(req, res) {
  db.Alert.findAll({
    where: {
      username: req.body.username
    }
  }).then(function(dbAlert) {
    console.log(dbAlert);
    res.render('alerts/alerts', {
      layout: 'main-alerts',
      alert: dbAlert
    });
  });
};

// exports.createAlert = function(req, res) {

//   console.log(req.user);
//   // Add id from User onto req.body
//   req.body.UserId = req.user.id;

//   db.Trip.create(req.body).then(function(dbPost) {
//     res.json(dbPost);
//   });
// };