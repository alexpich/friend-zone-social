module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("user_images", {
    url: {
      type: Sequelize.STRING,
    },
  });

  return Image;
};
