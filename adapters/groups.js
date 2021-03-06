const Sequelize = require('sequelize');
const UsersModel = require('../models/users');
const GroupsModel = require('../models/groups');
require('../models/usersGroupsRelations');
const enumMode = require('../managers/rights').enumMode;

module.exports.findAll = () => new Promise((fulfill, reject) => {
  GroupsModel.findAll({
    attributes: ['id', 'name', 'saveAndRestoreMode', 'migrationMode', 'softwarePackagesMode'],
  }).then((allGroups) => {
    module.exports.findAllAssociatedWithUsers()
      .then((groupsWithUsers) => {
        allGroups.forEach((group) => {
          groupsWithUsers.forEach((groupWithUser) => {
            if (groupWithUser.id === group.id) {
              const users = [];

              groupWithUser.users.forEach((user) => {
                const curratedUser = {};

                curratedUser.id = user.id;
                curratedUser.name = user.name;
                users.push(curratedUser);
              });

              group.dataValues.users = users;
            }
          });
        });

        fulfill(allGroups);
      }).catch((error) => {
        reject(error);
      });
  }).catch((error) => {
    reject(error);
  });
});

module.exports.findAllNotAssociatedWithUsers = () => GroupsModel.findAll({
  attributes: ['id', 'name', 'saveAndRestoreMode', 'migrationMode', 'softwarePackagesMode'],
});

module.exports.findAllAssociatedWithUsers = () => GroupsModel.findAll({
  attributes: ['id', 'name', 'saveAndRestoreMode', 'migrationMode', 'softwarePackagesMode'],
  include: [{
    model: UsersModel,
    where: { groupId: Sequelize.col('groups.id') },
  },
  ],
});

module.exports.findById = id => GroupsModel.findOne({
  where: { id },
  include: [{
    model: UsersModel,
    attributes: ['id', 'name'],
  },
  ],
});

module.exports.findByName = name => GroupsModel.findOne({ where: { name } });

module.exports.createGroup = (name, saveAndRestoreMode, migrationMode, softwarePackagesMode) => GroupsModel.create({
  name,
  saveAndRestoreMode,
  migrationMode,
  softwarePackagesMode,
});

module.exports.linkUserAndGroup = (user, group) => new Promise((fulfill) => {
  user.addGroups([group]).then((usr) => {
    fulfill(usr, group);
  });
});

module.exports.unlinkUsersGroups = user => new Promise((fulfill) => {
  user.setGroups([]).then(() => {
    fulfill(user);
  });
});

module.exports.createAndLinkGroupAndUser = (user, group) => new Promise((fulfill) => {
  module.exports.createGroup(group, enumMode.SIMPLE, enumMode.SIMPLE, enumMode.SIMPLE).then((newGroup) => {
    module.exports.linkUserAndGroup(user, newGroup).then((usr, grp) => {
      fulfill(usr, grp);
    });
  });
});

module.exports.reassignGroupToUser = (user, group) => new Promise((fulfill) => {
  module.exports.findByName(group).then((foundGroup) => {
    if (foundGroup) {
      module.exports.linkUserAndGroup(user, foundGroup).then((usr, grp) => {
        fulfill(usr, grp);
      });
    } else {
      module.exports.createAndLinkGroupAndUser(user, group).then((usr, grp) => {
        fulfill(usr, grp);
      });
    }
  });
});

module.exports.reassignGroupsToUser = (user, groups) => new Promise((fulfill) => {
  module.exports.unlinkUsersGroups(user).then((unlinkUser) => {
    let i = 0;

    if (groups.length === 0) {
      module.exports.reassignGroupToUser(unlinkUser, unlinkUser.isAdmin ? 'admin_default' : 'user_default').then((linkUser) => {
        fulfill(linkUser);
      });
    } else {
      groups.forEach((group) => {
        module.exports.reassignGroupToUser(user, group).then((linkUser) => {
          i += 1;
          if (i >= groups.length) {
            fulfill(linkUser);
          }
        });
      });
    }
  });
});
