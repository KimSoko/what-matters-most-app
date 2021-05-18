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

const determineFirst = (randomized) => {
  let final = [];
  for (let i = 0; i < randomized.length; i++) {
    let combo = randomized[i];
    let coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
      final.push(combo);
    } else {
      let first = combo[1];
      let second = combo[0];
      final.push([first, second]);
    }
  }
  return final;
}

const createOptions = (criteria) => {
  let options = [];
  let first = 0;
  let second = 1;

  let filtered = criteria.filter(obj => obj.value !== '');

  while (first < filtered.length - 1) {
    if (filtered[second].value === '') {
      break;
    }
    options.push([filtered[first], filtered[second]]);
    if (second < filtered.length - 1) {
      second++;
    } else {
      first++;
      second = first + 1;
    }
  }
  let randomized = randomizeOptions(options);
  let final = determineFirst(randomized);
  return final;
};

module.exports = { emptyCriteria, createOptions }