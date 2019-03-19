const router = require('express').Router();

const db = require('./db.js');

router.post('/', (req, res) => {
  const newPost = req.body;
  if (newPost.title && newPost.contents) {
    db.insert(newPost)
      .then(post => {
        res.status(201).json(newPost);
      })
      .catch(err => {
        res.status(500).json({
          error: 'There was an error while saving the post to the database'
        });
      });
  } else {
    res.status(400).json({
      errorMessage: 'Please provide title and contents for the post.'
    });
  }
});

router.get('/', (req, res) => {
  db.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'The posts information could not be retrieved.' });
    });
});

router.get('/:id', (req, res) => {
  db.findById(req.params.id)
    .then(post => {
      if (post[0]) {
        res.status(200).json(post[0]);
      } else {
        res
          .status(404)
          .json({ message: 'The post with the specified ID does not exist.' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'The post information could not be retrieved.' });
    });
});

router.delete('/:id', (req, res) => {
  db.findById(req.params.id)
    .then(post => {
      if (post[0]) {
        db.remove(req.params.id).then(res.status(200).json(post[0]));
      } else {
        res
          .status(404)
          .json({ message: 'The post with the specified ID does not exist.' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'The post could not be removed' });
    });
});

module.exports = router;
