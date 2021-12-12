module.exports = (sequelize, Sequelize) => {
    const request_transaction = sequelize.define("request", {
      rt_id: {
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
      ssn: {
       type: Sequelize.INTEGER,
       references: {
        model: 'users', // 'fathers' refers to table name
        key: 'id', // 'id' refers to column name in fathers table
     }
      }
    });
    return request_transaction;
  };