//
// moment library
//

const moment = require('moment');

module.exports.makeDayFromString = (dateString) => {
  const startDate = moment(new Date(dateString));
  const endDate = moment(new Date(dateString));

  startDate.set('hour', 0).set('minute', 0).set('seconds', 0);
  endDate.set('hour', 23).set('minute', 59).set('seconds', 59);

  return { startDate, endDate };
};

module.exports.getMomentToDate = dateString => moment(new Date(dateString));
