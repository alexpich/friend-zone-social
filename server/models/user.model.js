module.exports = (sequelize, Sequelize) => {
  // TODO: Age
  const User = sequelize.define(
    "users",
    {
      email: {
        type: Sequelize.STRING,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
    },
    {
      scopes: {
        withoutPassword: {
          attributes: { exclude: ["password"] },
        },
      },
    }
  );

  return User;
};
