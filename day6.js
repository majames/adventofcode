/**
 *
 * Created by mjames on 16/12/2015.
 */

'use strict';

const fs = require('fs');

fs.readFile('./day6.in', function(err, input) {
  const initLights = () => {
    let row, col, lights = [];
    for (row = 0; row < 1000; row++) {
      lights.push([]);
      for (col = 0; col < 1000; col++) {
        lights[row][col] = false;
      }
    }
    return lights;
  };

  const turnLights = (lights, startCoo, endCoo, on) => {
    let i, j;

    for (i = startCoo.y; i <= endCoo.y; i++) {
      for (j = startCoo.x; j <= endCoo.x; j++) {
        lights[i][j] = on;
      }
    }
  };

  const toggleLights = (lights, startCoo, endCoo) => {
    let i, j;

    for (i = startCoo.y; i <= endCoo.y; i++) {
      for (j = startCoo.x; j <= endCoo.x; j++) {
        lights[i][j] = !lights[i][j];
      }
    }
  };

  const numLightsOn = (lights) => {
    return lights.reduce(function(num, row) {
      return num + row.reduce(function(num, light) {
        return num + (light ? 1 : 0);
      }, 0);
    }, 0);
  };

  let lights, instructions = input.toString().split('\n');

  instructions = instructions.map(function(instruction) {
    instruction = instruction.split(' ');

    if (instruction.length === 5) {
      instruction = instruction.slice(1, instruction.length);
    }

    instruction[1] = {
      y: Number.parseInt(instruction[1].split(',')[0]),
      x: Number.parseInt(instruction[1].split(',')[1])
    };
    instruction[3] = {
      y: Number.parseInt(instruction[3].split(',')[0]),
      x: Number.parseInt(instruction[3].split(',')[1])
    };

    return instruction;
  });

  lights = initLights();
  lights = instructions.reduce(function(lights, instruction) {
    if (instruction[0] === 'on') {
      turnLights(lights, instruction[1], instruction[3], true);
    } else if (instruction[0] === 'off') {
      turnLights(lights, instruction[1], instruction[3], false);
    } else if (instruction[0] === 'toggle') {
      toggleLights(lights, instruction[1], instruction[3]);
    }

    return lights;
  }, lights);

  console.log(`The answer to part 1 is ${numLightsOn(lights)}`);

  const initLights2 = () => {
    let row, col, lights = [];
    for (row = 0; row < 1000; row++) {
      lights.push([]);
      for (col = 0; col < 1000; col++) {
        lights[row][col] = 0;
      }
    }
    return lights;
  };

  const turnLights2 = (lights, startCoo, endCoo, on) => {
    let i, j;

    for (i = startCoo.y; i <= endCoo.y; i++) {
      for (j = startCoo.x; j <= endCoo.x; j++) {
        if (on) {
          lights[i][j] += 1;
        } else {
          lights[i][j] = lights[i][j] > 0 ? lights[i][j] - 1 : 0;
        }
      }
    }
  };

  const toggleLights2 = (lights, startCoo, endCoo) => {
    let i, j;

    for (i = startCoo.y; i <= endCoo.y; i++) {
      for (j = startCoo.x; j <= endCoo.x; j++) {
        lights[i][j] += 2;
      }
    }
  };

  const numLightsOn2 = (lights) => {
    return lights.reduce(function(num, row) {
      return num + row.reduce(function(num, light) {
          return num + light;
        }, 0);
    }, 0);
  };

  lights = initLights();
  lights = instructions.reduce(function(lights, instruction) {
    if (instruction[0] === 'on') {
      turnLights2(lights, instruction[1], instruction[3], true);
    } else if (instruction[0] === 'off') {
      turnLights2(lights, instruction[1], instruction[3], false);
    } else if (instruction[0] === 'toggle') {
      toggleLights2(lights, instruction[1], instruction[3]);
    }

    return lights;
  }, lights);

  console.log(`The answer to part 2 is ${numLightsOn2(lights)}`);
});
