module.exports.exec = function exec(username, cb) {
  let socketArray = require('./index').socketArray;
  let socket = socketArray[username];

  if (typeof socket !== 'undefined') {
    socket.emit('server_reboot_Exec');
    if (typeof cb !== 'undefined') {
      socket.on('daemon_reboot_Exec', cb);
    }

    return 1;
  }

  return 0;
}