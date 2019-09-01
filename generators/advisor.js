const faker = require('faker/locale/en');

const person = require('./person');
const languages = require('../constants/languages');
const languagesKeys = languages.map(lang => lang.locale);

const getRandomLanguages = count => {
  const langs = new Array(count)
    .fill(null)
    .map(() => faker.random.arrayElement(languagesKeys));
  return langs.filter((lang, i) => langs.indexOf(lang) === i);
};
const getReviewsCount = () => faker.random.number({ min: 1, max: 50 });

const generateStarCounts = total => {
  let max = total;
  let totalStars = 0;
  const ratings = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1].reduce((acc, item) => {
    const count = faker.random.number({ min: 0, max });
    max -= count;
    max = max < 0 ? 0 : max;
    totalStars += count * item;
    return Object.assign(acc, { [item]: count });
  }, {});
  const average = +(totalStars / total).toFixed('2');
  return { average, ratings };
};
const advisor = id => {
  const reviewsCount = getReviewsCount();
  return Object.assign({}, person(), {
    reviewsCount,
    uuid: id || faker.random.uuid(),
    ratings: generateStarCounts(reviewsCount),
    languages: getRandomLanguages(faker.random.number({ min: 1, max: 4 })),
  });
};

// console.log(JSON.stringify(advisor(), null, 2));

module.exports = advisor;
