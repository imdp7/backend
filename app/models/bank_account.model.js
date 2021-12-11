module.exports = (sequelize, Sequelize) => {
    const bank_account = sequelize.define("bank_account", {
      bank_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
     bank_no: {
        type: Sequelize.INTEGER,
        primaryKey: true
     }
    });
  
    return bank_account;
  };