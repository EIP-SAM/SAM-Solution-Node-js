module.exports = function initRightsModel(libs, conf) {
  const Rights = libs.sequelize.define('rights', {
    data: {
      type: libs.Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
  }, {
    freezeTableName: true,
  });

  return Rights;
};