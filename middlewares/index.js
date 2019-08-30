const express = require('express');
const router = express.Router();

const advisors = require('../generators/advisors');
const advisor = require('../generators/advisor');
const reviews = require('../generators/reviews');
const review = require('../generators/review');

const MAX_RESULTS = 100;

router.get('/advisors', async (req, res) => {
  const limit = +req.query.limit;
  const offset = +req.query.offset;
  res.send({
    limit,
    offset,
    advisors: advisors(+limit),
    hasMore: MAX_RESULTS - (offset + limit) > 0,
  });
});

router.get('/advisors/:id', async (req, res) => {
  const { id } = req.params;
  res.send(advisor(id));
});

router.get('/advisors/:id/reviews', async (req, res) => {
  const { id } = req.params;
  const { limit = 20, offset = 0 } = req.query;
  res.send(reviews(+limit));
});

router.get('/advisors/:id/reviews/:reviewId', async (req, res) => {
  const { id, reviewId } = req.params;
  res.send(review(reviewId));
});

module.exports = router;
