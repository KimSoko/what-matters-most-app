const emptyCriteria = [
  {
    name: '1',
    value: '',
    score: 0
  },
  {
    name: '2',
    value: '',
    score: 0
  },
  {
    name: '3',
    value: '',
    score: 0
  },
  {
    name: '4',
    value: '',
    score: 0
  },
  {
    name: '5',
    value: '',
    score: 0
  },
  {
    name: '6',
    value: '',
    score: 0
  },
  {
    name: '7',
    value: '',
    score: 0
  },
];

const randomizeOptions = (options) => {
  let randomized = [];
  while (options.length) {
    let randomIndex = Math.floor(Math.random() * options.length);
    randomized.push(options[randomIndex]);
    options.splice(randomIndex, 1);
  }
  return randomized;
};

const createOptions = (criteria) => {
  let options = [];
  let first = 0;
  let second = 1;

  while (first < criteria.length - 1) {
    options.push([criteria[first], criteria[second]]);
    if (second < criteria.length - 1) {
      second++;
    } else {
      first++;
      second = first + 1;
    }
  }
  randomizeOptions(options);
  return options;
};

module.exports = { emptyCriteria, createOptions }