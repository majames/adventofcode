/**
 *
 * Created by mjames on 12/12/2015.
 */
'use strict';

const fs = require('fs');
const md5 = require('js-md5');

fs.readFile('./day4.in', function(err, key) {
  let ans = 1;
  while (md5(`${key.toString()}${ans}`).slice(0, 5) !== '00000') {
    ans++;
  }

  console.log(`The answer to part 1 is ${ans}`);

  ans = 1;
  while (md5(`${key.toString()}${ans}`).slice(0, 6) !== '000000') {
    ans++;
  }

  console.log(`The answer to part 2 is ${ans}`);
});
