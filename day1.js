'use strict';

const fs = require('fs');

fs.readFile('./day1.in', function(err, input) {
  let arr = input.toString().split('');

  let ans = arr.reduce(function(floor, curr) {
    return floor + (curr === '(' ? 1 : -1);
  }, 0);

  console.log(`The answer to part 1 is ${ans}`);

  ans = null;
  arr.reduce(function(floor, curr, i) {
    if (ans === null && floor === -1) {
      ans = i;
    }

    return floor + (curr === '(' ? 1 : -1);
  }, 0);

  console.log(`The answer to part 2 is ${ans}`);
});