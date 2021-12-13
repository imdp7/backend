const db = require("../models/index.js");
const Send_TRAN = db.send_transaction;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {

    // Create a Tutorial
    const s_tran = {
      ssn: req.body.ssn,
      st_id: req.body.st_id,
      amount: req.body.amount,
      date_time: req.body.date_time,
      memo: req.body.memo,
      cancel_reason: req.body.cancel_reason,
      id: req.body.id,
     
    };
  
    // Save Tutorial in the database
    Send_TRAN.create(s_tran)
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
  
    Send_TRAN.findAll({ where: condition })
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

  exports.findOne = (req, res) => {
    const ssn = req.params.ssn;
  
    Send_TRAN.findByPk(ssn)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${ssn}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + ssn
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Send_TRAN.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };


  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Send_TRAN.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };


  exports.deleteAll = (req, res) => {
    Send_TRAN.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };