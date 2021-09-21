const express = require('express');
const router = express.Router();


//Load SuggestArticle model
const SuggestArticle = require('../../models/SuggestArticle');

//router.get('/test', (req, res) => res.send('suggested articles route testing!'));

router.get('/', (req, res) => {
  SuggestArticle.find()
    .then(suggestArticles => res.json(suggestArticles))
    .catch(err => res.status(404).json({ nobooksfound:'No articles found' }));
});


router.post('/', (req, res) => {
  SuggestArticle.create(req.body)
    .then(suggestArticles => res.json({ msg: 'Suggested article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this suggested article' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    SuggestArticle.findByIdAndUpdate(req.params.id, req.body)
      .then(suggestArticles => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });

  // @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    SuggestArticle.findByIdAndRemove(req.params.id, req.body)
      .then(suggestArticles => res.json({ mgs: 'Article entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No article found' }));
  });


module.exports = router;