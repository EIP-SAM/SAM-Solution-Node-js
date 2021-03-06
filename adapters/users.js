const Sequelize = require('sequelize');
const UsersModel = require('../models/users');
const GroupsModel = require('../models/groups');
require('../models/usersGroupsRelations');
const GroupsAdapter = require('./groups');
const socketIo = require('../libs/socket-io');

module.exports.findAll = () => UsersModel.findAll({
  attributes: ['id', 'name', 'email', 'isAdmin'],
  order: [['id', 'ASC']],
  include: [{
    model: GroupsModel,
    where: { userId: Sequelize.col('users.id') },
  },
  ],
});

module.exports.findById = id => UsersModel.findOne({
  where: { id },
  include: [{
    model: GroupsModel,
    where: { userId: Sequelize.col('users.id') },
  },
  ],
});

module.exports.findByIdWithoutGroupRelation = id => UsersModel.findOne({ where: { id } });

module.exports.findByName = name => UsersModel.findOne({
  where: { name },
  include: [{
    model: GroupsModel,
    where: { userId: Sequelize.col('users.id') },
  },
  ],
});

module.exports.findByEmail = email => UsersModel.findOne({
  where: { email },
  include: [{
    model: GroupsModel,
    where: { userId: Sequelize.col('users.id') },
  },
  ],
});

module.exports.createAdminUser = (name, email, password) => UsersModel.create({ name, email, password, isAdmin: true });

module.exports.createUser = (name, email, password) => UsersModel.create({ name, email, password, isAdmin: false });

module.exports.linkGroupToUser = (group, user) => new Promise((fulfill) => {
  module.exports.findByIdWithoutGroupRelation(user).then((foundUser) => {
    if (foundUser) {
      group.addUsers([foundUser]).then((grp) => {
        fulfill(grp, foundUser);
      });
    } else {
      fulfill(group, null);
    }
  });
});

module.exports.unlinkAllUsersOfGroup = group => new Promise((fulfill) => {
  const brokenUsers = [];

  if (group.users) {
    group.users.forEach((user) => {
      module.exports.findById(user.id).then((usr) => {
        if (usr.groups.length === 1) {
          brokenUsers.push(usr);
        }
      });
    });
  }

  group.setUsers([]).then(() => {
    if (brokenUsers.length > 0) {
      let i = 0;

      brokenUsers.forEach((brokenUser) => {
        GroupsAdapter.reassignGroupToUser(brokenUser, brokenUser.isAdmin ? 'admin_default' : 'user_default').then(() => {
          i += 1;
          if (i >= brokenUsers.length) {
            fulfill(group);
          }
        });
      });
    } else {
      fulfill(group);
    }
  });
});

module.exports.reassignUsersToGroup = (group, users) => new Promise((fulfill, reject) => {
  module.exports.unlinkAllUsersOfGroup(group).then((unlinkGroup) => {
    let i = 0;

    if (users.length > 0) {
      users.forEach((user) => {
        if (typeof user !== 'number') {
          reject('Invalid user id');
        }

        module.exports.linkGroupToUser(unlinkGroup, user).then((linkGroup) => {
          i += 1;
          if (i >= users.length) {
            fulfill(linkGroup);
          }
        });
      });
    } else {
      fulfill(unlinkGroup);
    }
  });
});

module.exports.getNbrUserConnectedDeamon = () => new Promise((fulfill) => {
  fulfill(socketIo.getNbrUserConnected(socketIo.CLIENT_TYPE_DEAMON));
});
