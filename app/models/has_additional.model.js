module.exports = (sequelize, Sequelize) => {
    const has_additional = sequelize.define("has_additional", {
      ssn: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
     bank_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      bank_no: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
   verified: {
    type: Sequelize.BOOLEAN,
    }
    });
  
    return has_additional;
  };