var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

function Learning() {
  return knex('learning');
}

router.get('/', function(req, res, next) {
  Learning().select().then(function (learning) {
     res.json(learning);
  })
});

router.get('/:id', function(req, res, next) {
  Learning().where({id: req.params.id}).then(function(results) {
    res.json(results)
  })
});

router.post('/', function(req, res, next) {
  Learning().insert(req.body).then(function() {
    res.json({success: true})
  })
})

module.exports = router;
