const faker = require('faker/locale/en');

const person = require('./person');

const generateReview = id => {
  return {
    uuid: id || faker.random.uuid(),
    title: faker.lorem.sentence(15),
    detailedReview: faker.lorem.paragraphs(3, '\n'),
    stars: faker.random.number({ min: 4, max: 10 }), // Out of 10
    on: faker.date.recent(faker.random.number({ min: 4, max: 10 })), // date of review
  };
};

const review = id => Object.assign({}, generateReview(id), { by: person() });

// console.log(JSON.stringify(review(), null, 2));

module.exports = review;
