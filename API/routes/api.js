var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

function Learning() {
  return knex('learning');
}

function Comments() {
  return knex('comments')
}

function All() {
  return knex('all').join('learning', 'all.learning_id', 'learning.id').join('comments', 'all.comment_id', 'comments.id')
};

router.get('/', function(req, res, next) {
  Learning().select().then(function (results) {
      res.json(results);
    })
});

//
// router.get('/', function(req, res, next) {
//   Comments().select().then(function (results) {
//       res.json(results);
//     })
// });



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
