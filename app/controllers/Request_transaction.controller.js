const db = require("../models/index.js");
const Request = db.request_transaction;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  

    // Create a Tutorial
    const request = {
      rt_id: req.body.rt_id,
      amount: req.body.amount,
      date_time: req.body.date_time,
      memo: req.body.memo,
      ssn: req.body.ssn,
    };
  
    // Save Tutorial in the database
    Request.create(request)
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
  
    Request.findAll({ where: condition })
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