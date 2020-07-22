module.exports = (sequelize, Sequelize) => {
  const Comments = sequelize.define("comments", {
    postId: {
      type: Sequelize.INTEGER,
    },
    body: {
      type: Sequelize.TINYINT,
    },
  });

  return Comments;
};
