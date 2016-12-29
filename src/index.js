// @flow

import pointToVertex from './lib/pointToVertex';
import flatten from './lib/flatten';

type color = any

type point = {
  x?: number,
  y?: number,
  z?: number,
  color?: color
}

type options = {
  color: boolean,
  dx: number,
  dy: number,
  dz: number,
  dcolor: color,
  meta: boolean
}

export default (points: Array<point>, {
  color = true,
  dx = 0,
  dy = 0,
  dz = 0,
  dcolor = [0, 0, 0, 1],
  meta = false
}: options = {}): Array<number>|Object => {

  const options = {
    color, dx, dy, dz, dcolor, meta
  };

  const vertices = flatten(points.map(p => pointToVertex(p, options)));

  if (meta) {

    const meta = {};
    meta.length = color ? 7 : 3;
    meta.position = {start: 0, length: 3};
    if (color) meta.color = {start: 3, length: 4};
    return {vertices, meta};

  } else {
    return vertices;
  }


};
