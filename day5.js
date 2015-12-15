/**
 *
 * Created by mjames on 15/12/2015.
 */


'use strict';

const fs = require('fs');

fs.readFile('./day5.in', function(err, input) {
  const hasThreeOrMoreVowels = (word) => {
    return /(a|e|i|o|u)\w*(a|e|i|o|u)\w*(a|e|i|o|u)/g.test(word);
  };

  const hasTwoLettersInARow= (word) => {
    return /(\w)\1/.test(word);
  };

  const avoidsNaughtyStrings = (word) => {
    return !/(ab)|(cd)|(pq)|(xy)/.test(word);
  };

  let words = input.toString().split('\n');
  let numNiceWords = words.filter(function(word) {
    return hasThreeOrMoreVowels(word) && hasTwoLettersInARow(word) &&
      avoidsNaughtyStrings(word);
  }).length;

  console.log(`The answer to part 1 is ${numNiceWords}`);

  const repeatWithLetterInBetween = (word) => {
    return /(\w)\w\1/.test(word);
  };

  const doubleRepeatWithoutOverlap = (word) => {
    return /(\w{2})\w*\1/.test(word);
  };

  numNiceWords = words.filter(function(word) {
    return repeatWithLetterInBetween(word) && doubleRepeatWithoutOverlap(word);
  }).length;

  console.log(`The answer to part 2 is ${numNiceWords}`);
});
