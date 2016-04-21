module.exports = function initRoutes(app, conf) {
  const passport = require('../libs/passport')(app);

  require('./routes')(app, conf, passport);
  require('./users')(app, conf, passport);
};
