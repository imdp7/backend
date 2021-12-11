module.exports = (sequelize, Sequelize) => {
    const from = sequelize.define("from", {
      rt_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
    id: {
       type: Sequelize.INTEGER,
          },
      per: {
       type: Sequelize.FLOAT,
          }
    });
  
    return from;
  };