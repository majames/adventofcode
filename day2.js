/**
 *
 * Created by mjames on 12/12/2015.
 */
'use strict';

const fs = require('fs');

fs.readFile('./day2.in', function(err, input) {
  let dimStrs = input.toString().split('\n');

  let dims = dimStrs.map(function(dimStr) {
    return dimStr.split('x').map(function(str) {
      return Number.parseInt(str, 10);
    })
  });

  let ans = dims.reduce(function(ans, currDim) {
    let areaOne, areaTwo, areaThree;
    areaOne = currDim[0] * currDim[1];
    areaTwo = currDim[1] * currDim[2];
    areaThree = currDim[0] * currDim[2];

    return ans + Math.min(areaOne, areaTwo, areaThree) +
        2 * areaOne + 2 * areaTwo + 2 * areaThree;
  }, 0);

  console.log(`The answer to part 1 is ${ans}`);

  ans = dims.reduce(function(ans, currDim) {
    let dim1, dim2;

    if (currDim[0] <= currDim[2] && currDim[1] <= currDim[2]) {
      dim1 = currDim[0];
      dim2 = currDim[1];
    } else if (currDim[0] <= currDim[1] && currDim[2] <= currDim[1]) {
      dim1 = currDim[0];
      dim2 = currDim[2];
    } else {
      dim1 = currDim[1];
      dim2 = currDim[2];
    }

    return ans + 2*dim1 + 2*dim2 + currDim[0]*currDim[1]*currDim[2];
  }, 0);

  console.log(`The answer to part 2 is ${ans}`);
});
