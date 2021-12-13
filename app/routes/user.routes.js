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
  router.get("/user/:id", user.findOne);

  // Update a Tutorial with id
  router.put("/user/:id", user.update);

  // Delete a Tutorial with id
  router.delete("/user/:id", user.delete);

  // Delete all Tutorials
  router.delete("/user/", user.deleteAll);


    //SEND ROUTES

    router.post('/send', s_tran.create);

    router.get('/send', s_tran.findAll);

    router.get("/send/:id", s_tran.findOne);


  // Update a Tutorial with id
  router.put("/send/:id", s_tran.update);

  // Delete a Tutorial with id
  router.delete("/send/:id", s_tran.delete);

  // Delete all Tutorials
  router.delete("/send/", s_tran.deleteAll);

    //REQUEST ROUTES

    router.post('/request', r_tran.create);

    router.get('/request', r_tran.findAll);

    router.get("/request/:id", r_tran.findOne);

  // Update a Tutorial with id
  router.put("/request/:id", s_tran.update);

  // Delete a Tutorial with id
  router.delete("/request/:id", s_tran.delete);

  // Delete all Tutorials
  router.delete("/request/", s_tran.deleteAll);

    app.use('/api', router);
  };