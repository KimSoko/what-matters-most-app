const emptyCriteria = [
  {
    name: '1',
    value: '',
    score: 0,
    display: 'A'
  },
  {
    name: '2',
    value: '',
    score: 0,
    display: 'A'
  },
  {
    name: '3',
    value: '',
    score: 0,
    display: 'B'
  },
  {
    name: '4',
    value: '',
    score: 0,
    display: 'B'
  },
  {
    name: '5',
    value: '',
    score: 0,
    display: 'C'
  },
  {
    name: '6',
    value: '',
    score: 0,
    display: 'C'
  },
  {
    name: '7',
    value: '',
    score: 0,
    display: 'A'
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

const formatForDB = (criteria) => {
  let data = { topic: ''};

  data['1_name'] = criteria[0].name || null;
  data['1_score'] = criteria[0].score || null;
  data['2_name'] = criteria[1].name || null;
  data['2_score'] = criteria[1].score || null;
  data['3_name'] = criteria[2].name || null;
  data['3_score'] = criteria[2].score || null;
  data['4_name'] = criteria[3].name || null;
  data['4_score'] = criteria[3].score || null;
  data['5_name'] = criteria[4].name || null;
  data['5_score'] = criteria[4].score || null;
  data['6_name'] = criteria[5].name || null;
  data['6_score'] = criteria[5].score || null;
  data['7_name'] = criteria[6].name || null;
  data['7_score'] = criteria[6].score || null;

  return data;
};

module.exports = { emptyCriteria, createOptions, formatForDB }