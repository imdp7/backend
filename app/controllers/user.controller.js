const db = require("../models/index.js");
const User = db.user_account;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
    // Create a Tutorial
    const user = {
      ssn: req.body.ssn,
      name: req.body.name,
      phone_no: req.body.phone_no,
      balance: req.body.balance,
      bank_no: req.body.bank_no,
      bank_id: req.body.bank_id,
      pba_verified: req.body.pba_verified,
    };
  
    // Save Tutorial in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

  
exports.findAll = (req, res) => {
    const ssn = req.query.ssn;
    var condition = ssn ? { transaction: { [Op.like]: `%${ssn}%` } } : null;
  
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving transactions."
        });
      });
  };