module.exports = (sequelize, Sequelize) => {
    const email = sequelize.define("email", {
      email_add: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
    ssn: {
       type: Sequelize.INTEGER,
          }
    });
  
    return email;
  };