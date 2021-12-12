module.exports = (sequelize, Sequelize) => {
    const user_account = sequelize.define("users", {
      ssn: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
     name: {
        type: Sequelize.STRING,
      },
      phone_no: {
        type: Sequelize.INTEGER,
      },
   balance: {
    type: Sequelize.INTEGER,
    },
    bank_id: {
      type: Sequelize.INTEGER,
      },
    bank_no: {
      type: Sequelize.INTEGER,
        },
    pba_verified: {
       type: Sequelize.BOOLEAN,
          }
    });
  
    return user_account;
  };