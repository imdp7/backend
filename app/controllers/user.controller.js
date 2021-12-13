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

  exports.findOne = (req, res) => {
    const ssn = req.params.ssn;
  
    User.findByPk(ssn)
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
    const ssn = req.params.ssn;
  
    User.update(req.body, {
      where: { ssn: ssn }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${ssn}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + ssn
        });
      });
  };


  exports.delete = (req, res) => {
    const ssn = req.params.ssn;
  
    User.destroy({
      where: { ssn: ssn }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${ssn}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + ssn
        });
      });
  };


  exports.deleteAll = (req, res) => {
    User.destroy({
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