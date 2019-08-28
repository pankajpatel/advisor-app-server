const express = require('express');
const router = express.Router();

const advisors = require('../generators/advisors');
const advisor = require('../generators/advisor');
const reviews = require('../generators/reviews');
const review = require('../generators/review');

router.get('/advisors', async (req, res) => {
  const { count = 20, offset = 0 } = req.query;
  res.send(advisors(+count));
});

router.get('/advisors/:id', async (req, res) => {
  const { id } = req.params;
  res.send(advisor(id));
});

router.get('/advisors/:id/reviews', async (req, res) => {
  const { id } = req.params;
  const { count = 20, offset = 0 } = req.query;
  res.send(reviews(+count));
});

router.get('/advisors/:id/reviews/:reviewId', async (req, res) => {
  const { id, reviewId } = req.params;
  res.send(review(reviewId));
});

module.exports = router;
