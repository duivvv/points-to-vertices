import pointToVertex from '../src/lib/pointToVertex';

describe(`returns the correct values`, () => {

  it(`returns correct vertices (x, y, z)`, () => {

    const point = {
      x: 1,
      y: 1,
      z: 1
    };

    expect(pointToVertex(point, {color: false}))
      .toEqual([1, 1, 1]);

  });

  it(`returns correct vertices (x, y, z, hex)`, () => {

    const point = {
      x: 1,
      y: - 1,
      z: 1,
      color: `#0000FF`
    };

    expect(pointToVertex(point))
      .toEqual([1, - 1, 1, 0, 0, 1, 1]);

  });

  it(`returns correct vertices (x, y, z, rgba)`, () => {

    const point = {
      x: - 1,
      y: - 1,
      z: - 1,
      color: `rgba(255, 255, 0, .4)`
    };

    expect(pointToVertex(point))
      .toEqual([- 1, - 1, - 1, 1, 1, 0, 0.4]);

  });

  it(`returns correct vertices (x, y, z, rgb)`, () => {

    const point = {
      x: 1,
      y: - 1,
      z: 1,
      color: `rgb(0, 255, 0)`
    };

    expect(pointToVertex(point))
      .toEqual([1, - 1, 1, 0, 1, 0, 1]);

  });

});

describe(`uses correct defaults`, () => {

  it(`defaults to the standard x (0)`, () => {

    const point = {
      y: 1,
      z: 0
    };

    expect(pointToVertex(point, {color: false}))
      .toEqual([0, 1, 0]);

  });

  it(`defaults to the standard y (0)`, () => {

    const point = {
      x: 0,
      z: 0
    };

    expect(pointToVertex(point, {color: false}))
      .toEqual([0, 0, 0]);

  });

  it(`defaults to the standard z (0)`, () => {

    const point = {
      x: 1,
      y: 1
    };

    expect(pointToVertex(point, {color: false}))
      .toEqual([1, 1, 0]);

  });

  it(`defaults to the standard color [0, 0, 0, 1]`, () => {

    const point = {
      x: 1,
      y: 1,
      z: 1
    };

    expect(pointToVertex(point))
      .toEqual([1, 1, 1, 0, 0, 0, 1]);

  });

});

describe(`normalizes points`, () => {

  it(`normalizes negative x`, () => {

    const point = {
      x: - 2
    };

    expect(pointToVertex(point, {color: false}))
      .toEqual([- 1, 0, 0]);

  });

  it(`normalizes positive x`, () => {

    const point = {
      x: 2
    };

    expect(pointToVertex(point, {color: false}))
      .toEqual([1, 0, 0]);

  });

  it(`normalizes negative y`, () => {

    const point = {
      y: - 2
    };

    expect(pointToVertex(point, {color: false}))
      .toEqual([0, - 1, 0]);

  });

  it(`normalizes positive y`, () => {

    const point = {
      y: 2
    };

    expect(pointToVertex(point, {color: false}))
      .toEqual([0, 1, 0]);

  });

  it(`normalizes negative z`, () => {

    const point = {
      z: - 2
    };

    expect(pointToVertex(point, {color: false}))
      .toEqual([0, 0, - 1]);

  });

  it(`normalizes positive z`, () => {

    const point = {
      z: 2
    };

    expect(pointToVertex(point, {color: false}))
      .toEqual([0, 0, 1]);

  });


});

describe(`uses correct defaults (user provided)`, () => {

  it(`defaults to given x: 1`, () => {

    const point = {
      y: 1,
      z: 0
    };

    expect(pointToVertex(point, {dx: 1, color: false}))
      .toEqual([1, 1, 0]);

  });

  it(`defaults to y: -1`, () => {

    const point = {
      x: 1,
      z: 0
    };

    expect(pointToVertex(point, {dy: - 1, color: false}))
      .toEqual([1, - 1, 0]);

  });

  it(`defaults to z: 1`, () => {

    const point = {
      x: 1,
      y: 1
    };

    expect(pointToVertex(point, {dz: 1, color: false}))
      .toEqual([1, 1, 1]);

  });

  it(`defaults to color: #FF00FF`, () => {

    const point = {
      x: - 1,
      y: 1,
      z: 0
    };

    expect(pointToVertex(point, {dcolor: `#FF00FF`}))
      .toEqual([- 1, 1, 0, 1, 0, 1, 1]);

  });

  it(`defaults to color: rgba(255, 0, 0, 0.4)`, () => {

    const point = {
      x: - 1,
      y: 1,
      z: 0
    };

    expect(pointToVertex(point, {dcolor: `rgba(255, 0, 0, 0.4)`}))
      .toEqual([- 1, 1, 0, 1, 0, 0, 0.4]);

  });

});
