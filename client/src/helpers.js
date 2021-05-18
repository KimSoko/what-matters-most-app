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

var createOptions = (criteria) => {
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

  return options;
};

module.exports = { emptyCriteria, createOptions }