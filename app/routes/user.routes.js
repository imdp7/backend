module.exports = app => {

    const user = require("../controllers/user.controller.js");
    const s_tran = require("../controllers/send_transaction.controller.js");
    const r_tran = require("../controllers/Request_transaction.controller.js");
    
    var router = require("express").Router();
    //USER ROUTES
    // Create a new User
    router.post("/user", user.create);
  
     // Retrieve all Tutorials
    router.get("/user", user.findAll);

      // Retrieve a single Tutorial with id
  router.get("/user/:ssn", user.findOne);

  // Update a Tutorial with id
  router.put("/user/:ssn", user.update);

  // Delete a Tutorial with id
  router.delete("/user/:ssn", user.delete);

  // Delete all Tutorials
  router.delete("/user/", user.deleteAll);


    //SEND ROUTES

    router.post('/send', s_tran.create);

    router.get('/send', s_tran.findAll);

    router.get("/send/:ssn", s_tran.findOne);


  // Update a Tutorial with id
  router.put("/send/:ssn", s_tran.update);

  // Delete a Tutorial with id
  router.delete("/send/:ssn", s_tran.delete);

  // Delete all Tutorials
  router.delete("/send/", s_tran.deleteAll);

    //REQUEST ROUTES

    router.post('/request', r_tran.create);

    router.get('/request', r_tran.findAll);

    router.get("/request/:ssn", r_tran.findOne);

  // Update a Tutorial with id
  router.put("/request/:ssn", s_tran.update);

  // Delete a Tutorial with id
  router.delete("/request/:ssn", s_tran.delete);

  // Delete all Tutorials
  router.delete("/request/", s_tran.deleteAll);

    app.use('/api', router);
  };