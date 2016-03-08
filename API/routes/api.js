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
  return knex('all').leftJoin('learning', 'all.learning_id', 'learning.id').leftJoin('comments', 'all.comment_id', 'comments.id')
};

router.get('/', function(req, res, next) {
  Learning().select().then(function (results) {
      res.json(results);
    })
});

router.get('/test', function (req, res, next) {
  All().select().then(function(results) {
    res.json(results)
  })
});

router.get('/:id', function(req, res, next) {
  Learning().where({id: req.params.id}).first().then(function(resource) {
    Comments().where('learning_id', req.params.id).then(function (comments) {
      resource.comments = comments;
      res.json(resource)
    })
  })
});

router.post('/', function(req, res, next) {
  Learning().insert(req.body).then(function() {
    res.json({success: true})
  })
})

module.exports = router;
