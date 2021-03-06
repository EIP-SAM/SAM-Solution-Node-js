//
// Cron manager for save module using nodeSchedule
//
const nodeSchedule = require('../libs/nodeSchedule');
const cronParser = require('cron-parser');
const saveManager = require('./save');
const saveScheduledAdapter = require('../adapters/saveScheduled');
const userAdapter = require('../adapters/users');

//
// Call when server is restart
// Create all the cron and add them to listCron;
//
function initAllSaveCron() {
  saveScheduledAdapter.getAllSaveScheduleActive().then((savesScheduled) => {
    const saveScheduledIds = [];
    for (const ss of savesScheduled) {
      saveScheduledIds.push(ss.id);
    }
    saveScheduledAdapter.getAllSaveBySaveSchedule(saveScheduledIds).then((saves) => {
      savesScheduled.forEach((ss) => {
        userAdapter.findById(ss.userId).then((user) => {
          for (const s of saves) {
            if (ss.id === s.saveScheduledId) {
              let date = s.execDate;
              if (date < new Date()) {
                date = new Date(new Date().getTime() + 60000);
              }
              nodeSchedule.listCron[ss.id] = module.exports.createSaveScheduled(date, user.name, ss.files, s.id, ss.id);
            }
          }
        });
      });
    });
  });
}

// called at the requirement of the file
initAllSaveCron();

//
// Create cron with a specific date
// Function is call when the cron is triggered
//
module.exports.createSaveScheduled = (date, username, files, saveId, saveScheduledId) => nodeSchedule.scheduleJob(date, () => {
  saveManager.execSave(username, files, saveId, saveScheduledId);
});

//
// Stop cron
// Remove cron from list
//
module.exports.removeCron = (key) => {
  nodeSchedule.listCron[key].cancel();
  delete nodeSchedule.listCron[key];
};

//
// Parse cron expression to have a date
// Use cron-parser lib
//
module.exports.parserCronToDate = cron => cronParser.parseExpression(cron).next().toString();

//
// Parse date & frequency to have a cron expression
// Day of week => cron: Sun = 1, Date: Sun = 0
//
module.exports.parseDateFrequencyToCron = (date, frequency) => {
  let cron;
  switch (frequency) {
    case 'Daily':
      cron = `${date.getMinutes()} ${date.getHours()} 1/1 * * *`;
      break;
    case 'Weekly':
      cron = `${date.getMinutes()} ${date.getHours()} ? * ${date.getDay() + 1} *`;
      break;
    case 'Monthly':
      cron = `${date.getMinutes()} ${date.getHours()} ${date.getDate()} 1/1 * *`;
      break;
    default:
      cron = null;
  }
  return cron;
};
