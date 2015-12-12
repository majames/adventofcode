/**
 *
 * Created by mjames on 12/12/2015.
 */
'use strict';

const fs = require('fs');

const hasCooBeenVisited = (coos, newCoo) => {
  return coos.reduce(function(visited, coo) {
    return visited || (coo.x === newCoo.x && coo.y === newCoo.y);
  }, false);
};

fs.readFile('./day3.in', function(err, input) {
  let dirs, visited;

  dirs = input.toString().split('');

  const delivered = function(visited, dir, i) {
    let coo = visited.santas[i % visited.numSantas]
      ? { x: visited.santas[i % visited.numSantas].x, y: visited.santas[i % visited.numSantas].y }
      : { x: 0, y: 0 };

    switch (dir) {
      case '^':
        coo.y += 1;
        break;
      case '>':
        coo.x += 1;
        break;
      case 'v':
        coo.y -= 1;
        break;
      case '<':
        coo.x -= 1;
    }

    if (!hasCooBeenVisited(visited.coos, coo)) {
      visited.numHouses += 1;
      visited.coos.push(coo);
    }

    visited.santas[i % visited.numSantas] = coo;
    return visited;
  };

  visited = dirs.reduce(delivered, { numHouses: 1, coos: [ { x: 0, y: 0 }], santas: [], numSantas: 1 });
  console.log(`The answer to part 1 is ${visited.numHouses}`);

  visited = dirs.reduce(delivered, { numHouses: 1, coos: [ { x: 0, y: 0} ], santas: [], numSantas: 2 });
  console.log(`The answer to part 2 is ${visited.numHouses}`);
});

