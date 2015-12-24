/**
 *
 * Created by mjames on 24/12/2015.
 */
'use strict';

const passesRequirements = function(pass) {
  const includesThreeStraight = function(pass) {
    for(let i = 0; i < pass.length - 2; i++) {
      if (pass.charCodeAt(i) === pass.charCodeAt(i + 1) - 1
        && pass.charCodeAt(i + 1) === pass.charCodeAt(i + 2) - 1) {
        return true;
      }
    }

    return false;
  };

  const doesntContainAmbiguousChars = function(pass) {
    return !/i|l|o/.test(pass);
  };

  const containsTwoDiffPairs = function(pass) {
    let matches = pass.match(/(\w)\1/g);

    if (!Array.isArray(matches) || matches.length < 2) {
      return false;
    }

    return matches.reduce(function(acc, match) {
      if(acc.uniqMatch.indexOf(match) > -1) {
        return acc;
      }

      acc.uniqMatch.push(match);
      acc.num += 1;
      return acc;
    }, { num: 0, uniqMatch: []}).num >= 2;
  };

  return includesThreeStraight(pass) && doesntContainAmbiguousChars(pass)
    && containsTwoDiffPairs(pass);
};

const incrementPass = function(pass) {
  for (let i = pass.length - 1; i >= 0; i--) {
    if (pass.charAt(i) !== 'z') {
      return `${pass.slice(0, i)}${String.fromCharCode(pass.charCodeAt(i) + 1)}${'a'.repeat(pass.slice(i + 1).length)}`;
    }
  }
};

let pass = 'hepxcrrq';
while (!passesRequirements(pass)) {
  pass = incrementPass(pass);
}

console.log(`The answer to part 1 is ${pass}`);

pass = incrementPass(pass);
while (!passesRequirements(pass)) {
  pass = incrementPass(pass);
}
console.log(`The answer to part 2 is ${pass}`);


