module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      account_no: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      name:{
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING

      },
      balance: {
        type: Sequelize.FLOAT
      },
      transaction:{
        type: Sequelize.STRING
      },
      amount:{
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN,
      }
    });
  
    return Tutorial;
  };