/*
** Statistic module routes
*/

var statController = require('../controllers/statistic');

module.exports = function initStatisticRoutes(app, conf) {
  //
  //// GET requests

  app.get('/api/logged-in/admin/statistic_filters', function (req, res) {
    var data = statController.getStatisticFilters();
    res.json(data);
  });

  app.get('/api/logged-in/admin/statistic_select_graph', function (req, res) {
    var data = statController.getStatisticDataByType(req.query.type).then(function(data){
      res.json(data);
    })
  });
};
