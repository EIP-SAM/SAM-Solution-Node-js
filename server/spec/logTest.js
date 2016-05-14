//
// Test on log methods and model
//

const logManager = require('../managers/log');

describe('It should test logManager method getLogs: ', function () {

  var allLogs;

  beforeEach(function (done) {

    var promise = logManager.getLogs();

    promise.then(function (resolve) {
      allLogs = resolve;
      done();
    });
  });

  it('Should have all he log', function () {
    expect(allLogs).not.toBe(undefined);
  });
});
