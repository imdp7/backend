module.exports = (sequelize, Sequelize) => {
    const elect_add = sequelize.define("elect_add", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
    verified: {
       type: Sequelize.BOOLEAN,
          },
      type: {
       type: Sequelize.STRING,
          }
    });
  
    return elect_add;
  };