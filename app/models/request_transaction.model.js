module.exports = (sequelize, Sequelize) => {
    const request_transaction = sequelize.define("request_transaction", {
      rt_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
     amount: {
        type: Sequelize.INTEGER,
      },
      date_time: {
        type: Sequelize.DATE,
      },
   memo: {
    type: Sequelize.STRING,
    },
    ssn: {
       type: Sequelize.INTEGER,
          }
    });
  
    return request_transaction;
  };