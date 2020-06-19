var express = require('express');
var router = express.Router();
var UserModel = require('./models/Users');


router.post('/userCheck', (req, res, next) => {
    var userName = req.body.userName;
    var password = req.body.password;
    console.log(req.body)
    UserModel.findOne({ userName: userName, password: password }, function (error, user) {
        if (error || !user) {
          res.status(500).send(error);
          return;
        }
        console.log("===== > User Object", user)
        console.log("User Check sucess!")
        user.password = '';
        res.json(user); 
      });
});


module.exports = router;