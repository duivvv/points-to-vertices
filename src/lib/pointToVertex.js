// @flow

import colorToVec4 from 'color-to-vec4';

type point = {
  x?: number,
  y?: number,
  z?: number,
  color?: color
}

type color = any

type options = {
  color: boolean,
  dx: number,
  dy: number,
  dz: number,
  dcolor: color
}

const normalize = (min, max, value) => {
  if (value < min) return min;
  else if (value > max) return max;
  return value;
};

export default (point: point, {
  color = true,
  dx = 0,
  dy = 0,
  dz = 0,
  dcolor = [0, 0, 0, 1]
}: options = {}): Array<number> => {

  let {x = dx, y = dy, z = dz} = point;

  x = normalize(- 1, 1, x);
  y = normalize(- 1, 1, y);
  z = normalize(- 1, 1, z);

  const {color: pColor = dcolor} = point;

  if (pColor && color) {
    const colorVec: Array<number> = colorToVec4(pColor);
    // [x, y, z, r, g, b, a]
    return [x, y, z, ...colorVec];
  } else {
    // [x, y, z]
    return [x, y, z];
  }

};
