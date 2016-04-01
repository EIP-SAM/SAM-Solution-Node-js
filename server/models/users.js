//
// Model User
//
module.exports = function initUsersModel(libs, conf, models) {
  const Users = libs.sequelize.define('users', {
    name: {
      type: libs.Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: libs.Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: libs.Sequelize.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });

  //
  // Sync model User
  //
  Users.sync();
  return Users;
};