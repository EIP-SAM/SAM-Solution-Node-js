//
// Routes Save
//
//
var saveController = require('../controllers/save');

module.exports = function initSaveRoutes(app) {

  app.get('/api/logged-in/admin/save', function (req, res) {
    saveController.lastUsersSaves().then(function(saves) {
      res.json(saves);
    })
  });

  app.get('/api/logged-in/history_save', function (req, res) {
    saveController.historySavesByUser(req, res).then(function(historySaves) {
      res.json(historySaves);
    })
  });

  app.get('/api/logged-in/history_succeeded_save', function (req, res) {
    saveController.historySucceededSavesByUser(req, res).then(function(saves) {
      res.json(saves);
    })
  });

  app.post('/api/logged-in/create_save', function (req, res) {
    saveController.createSave(req, res)
    res.json('Your save has been created');
  });

  app.post('/api/logged-in/cancel_save', function (req, res) {
    saveController.cancelSave(req, res);
    res.json('Your auto/programmed save has been canceled');
  });
};
