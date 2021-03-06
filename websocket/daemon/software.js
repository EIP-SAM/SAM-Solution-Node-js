/* eslint no-underscore-dangle: ["error", { "allow": ["_events"] }] */

const logger = require('../../libs/bunyan').setModuleName('Daemon-software');
const socketIo = require('../../libs/socket-io');

let commandIndex = 0;

function exec(userName, method, params, onStatusChange) {
  return new Promise((fulfill, reject) => {
    const socket = socketIo.socketArray.daemon[userName];

    method = `daemon_software_${method}`;
    if (typeof socket !== 'undefined') {
      if (socket._events[`${method}_status`] === undefined) {
        socket.on(`${method}_status`, onStatusChange);
      }
      socket.on(`${method}_finished_${commandIndex}`, (returnStatus) => {
        if (!returnStatus.error) {
          fulfill(returnStatus);
        } else {
          reject(returnStatus);
        }
      });

      logger.info(`Send ${method} command for user ${userName}`);
      socket.emit(method, params, commandIndex);
      commandIndex += 1;
    } else {
      logger.warn(`Daemon of user ${userName} is not connected`);
      reject(`Daemon of user ${userName} is not connected`);
    }
  });
}

module.exports.installPackages = (userName, packages, onStatusChange) => exec(userName, 'install_packages', packages, onStatusChange);

module.exports.updatePackages = (userName, packages, onStatusChange) => exec(userName, 'update_packages', packages, onStatusChange);

module.exports.removePackages = (userName, packages, onStatusChange) => exec(userName, 'remove_packages', packages, onStatusChange);

module.exports.queryPackage = (userName, packageName, onStatusChange) => exec(userName, 'query_package', packageName, onStatusChange);

module.exports.listInstalledPackages = (userName, onStatusChange) => exec(userName, 'list_installed_packages', {}, onStatusChange);

module.exports.getOperatingSystem = (userName, onStatusChange) => exec(userName, 'get_operating_system', {}, onStatusChange);
