//
// Adapter Git
//
var gitWorker = require('../workers/git');

//
// Create new repo for a user
//
module.exports.initNewGitRepo = function (userId, userName) {
  return gitWorker.initNewGitRepo(userId, userName);
};

//
// Get last commit for a given repo
//
module.exports.getLastCommitInfo = function (userId, userName) {
  return gitWorker.getLastCommitInfo(userId, userName);
};