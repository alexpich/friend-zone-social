module.exports = (sequelize, Sequelize) => {
  const Friends = sequelize.define("friends", {
    friendId: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.TINYINT,
    },
  });

  return Friends;
};
