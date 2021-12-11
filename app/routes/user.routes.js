module.exports = app => {

    const user = require("../controllers/user.controller.js");
    const tutorials = require("../controllers/tutorial.controller.js");
    const send = require("../controllers/send_transaction.controller.js");
    const request = require("../controllers/Request_transaction.controller.js");
    
    var router = require("express").Router();
    //USER ROUTES
    // Create a new User
    router.post("/user", user.create);
  
     // Retrieve all Tutorials
    router.get("/user", user.findAll);


    //TUTORIAL ROUTES
    

    //Create a new Tutorial
    router.post("/tutorials", tutorials.create);

    //Create a new Tutorial
    router.get("/tutorials", tutorials.findAll);

    //Create a new Tutorial
    router.post("/tutorials/account_no", tutorials.update);

    //Create a new Tutorial
    router.post("/tutorials/account_no", tutorials.delete);

    //Create a new Tutorial
    router.post("/tutorials", tutorials.deleteAll);



    //SEND ROUTES

    router.post('/send', send.create);

    router.get('/send', send.findAll);

    //REQUEST ROUTES

    router.post('/request', request.create);

    router.get('/request', request.findAll);


    app.use('/api', router);
    
  };