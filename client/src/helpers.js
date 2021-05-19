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

const formatForDB = (data) => {
  return data = {
          topic: data.topic,
          '1_name': data['1_name'] || null,
          '1_score': data['1_score'] || null,
          '2_name': data['2_name'] || null,
          '2_score': data['2_score'] || null,
          '3_name': data['3_name'] || null,
          '3_score': data['3_score'] || null,
          '4_name': data['4_name'] || null,
          '4_score': data['4_score'] || null,
          '5_name': data['5_name'] || null,
          '5_score': data['5_score'] || null,
          '6_name': data['6_name'] || null,
          '6_score': data['6_score'] || null,
          '7_name': data['7_name'] || null,
          '7_score': data['7_score'] || null
  }
};

module.exports = { emptyCriteria, createOptions, formatForDB }