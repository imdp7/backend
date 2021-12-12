module.exports = (sequelize, Sequelize) => {
    const send_transaction = sequelize.define("send", {
      st_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
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
    cancel_reason: {
        type: Sequelize.STRING,
      },
    id: {
        type: Sequelize.INTEGER,
      },
    ssn: {
       type: Sequelize.INTEGER,
       
      }
    });
  
    return send_transaction;
  };