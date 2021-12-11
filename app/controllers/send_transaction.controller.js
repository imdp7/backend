const db = require("../models/index.js");
const Send = db.send_transaction;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
    // Create a Tutorial
    const send = {
      st_id: req.body.st_id,
      amount: req.body.amount,
      date_time: req.body.date_time,
      memo: req.body.memo,
      cancel_reason: req.body.cancel_reason,
      id: req.body.id,
      ssn: req.body.ssn,
    };
  
    // Save Tutorial in the database
    Send.create(send)
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
    const amount = req.query.amount;
    var condition = amount ? { amount: { [Op.like]: `%${amount}%` } } : null;
  
    Send.findAll({ where: condition })
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