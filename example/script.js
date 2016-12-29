const pointsToVertices = require(`../`);

const points = [
  {
    x: 0,
    y: 0,
    z: 1
  },
  {
    x: 1,
    y: - 1,
    z: 0
  }
];

// default, with color (default: black)
const vertices = pointsToVertices(points);
console.log(vertices);

// no colors, only points
const vertices2 = pointsToVertices(points, {color: false});
console.log(vertices2);

// with meta object and default color
const vertices3 = pointsToVertices(points, {meta: true, dcolor: `#00ffff`});
console.log(vertices3);

const points2 = [
  {
    x: 0,
    y: 0
  },
  {
    x: 1,
    y: - 1
  }
];

// with default color and default z
const vertices4 = pointsToVertices(points2, {dcolor: `#ff0000`, dz: - 1});
console.log(vertices4);
