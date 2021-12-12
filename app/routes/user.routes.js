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


    //SEND ROUTES

    router.post('/send', s_tran.create);

    router.get('/send', s_tran.findAll);

    //REQUEST ROUTES

    router.post('/request', r_tran.create);

    router.get('/request', r_tran.findAll);

    app.use('/api', router);
  };