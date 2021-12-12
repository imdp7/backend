module.exports = (sequelize, Sequelize) => {
    const request_transaction = sequelize.define("request", {
      rt_id: {
        type: Sequelize.INTEGER,
        
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
       primaryKey: true,
      }
    });
    return request_transaction;
  };