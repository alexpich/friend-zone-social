module.exports = (sequelize, Sequelize) => {
  const Likes = sequelize.define("likes", {
    postId: {
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
  });

  return Likes;
};
