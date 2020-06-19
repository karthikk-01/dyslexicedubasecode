var express = require('express');
var router = express.Router();
var WordsModel = require('./models/Words');


router.post('/save', (req, res, next) => {
    var word = req.body.word;
    console.log(req.body)
    var wordReq = new WordsModel({'word': word});
    wordReq.save(function (error, data) {
        if (error) {
          res.status(500).send(error);
          return;
        }
        res.json("Word Saved Successfully!"); 
      });
});

router.get('/get', (req, res, next) => {
  var word = req.body.word;
  console.log(req.body)
  WordsModel.find().sort({'_id': -1}).exec(function (error, data) {
      if (error) {
        res.status(500).send(error);
        return;
      }
      res.json(data); 
    });
});

module.exports = router;