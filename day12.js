/**
 *
 * Created by mjames on 24/12/2015.
 */
'use strict';

const fs = require('fs');
const _ = require('lodash');

fs.readFile('./day12.json', function(err, input) {
  let data = JSON.parse(input.toString());

  const getValue = function getValue(sum, value) {
    if (typeof value === 'number') {
      return sum + value;
    } else if (Array.isArray(value)) {
      return value.reduce(getValue, sum);
    } else if (typeof value === 'object') {
      if (_.values(value).indexOf('red') >= 0) {
        return sum;
      }

      return Object.keys(value).reduce(function(sum, key) {
        return getValue(sum, value[key])
      }, sum);
    }

    return sum;
  };

  let ans = data.reduce(getValue, 0);
  console.log(`The answer to part 2 is ${ans}`);
});

