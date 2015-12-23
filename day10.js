/**
 *
 * Created by mjames on 24/12/2015.
 */
'use strict';

const lookAndSayAux = function(numberStr) {
  let numberChars = numberStr.split('');
  let acc = {
    result: '',
    seq: 0,
    last: numberChars[0]
  };

  return numberChars.reduce(function(acc, numberChar, i) {

    if (numberChars.length - 1 === i && numberChar !== acc.last) {
      acc.result += acc.seq + acc.last + '1' + numberChar;
      acc.seq = 1;
      acc.last = numberChar;
      return acc;
    }

    if (numberChars.length !== i && numberChar === acc.last) {
      acc.seq += 1;
      return acc;
    }

    acc.result += acc.seq + acc.last;
    acc.seq = 1;
    acc.last = numberChar;

    return acc;
  }, acc);
};

let ans = '3113322113';
for(let i = 0; i < 40; i++) {
  ans = lookAndSayAux(ans).result;
}

console.log(`The answer to part 1 is ${ans.length}`);

ans = '3113322113';
for(let i = 0; i < 50; i++) {
  ans = lookAndSayAux(ans).result;
}

console.log(`The answer to part 2 is ${ans.length}`);
