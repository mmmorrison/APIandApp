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

module.exports = router;
