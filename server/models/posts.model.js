module.exports = (sequelize, Sequelize) => {
  // TODO: Age
  const User = sequelize.define("users", {
    body: {
      type: Sequelize.TEXT,
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
