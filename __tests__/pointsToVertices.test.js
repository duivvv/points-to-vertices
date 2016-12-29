import pointsToVertices from '../src/';

describe(`returns the correct values`, () => {

  it(`returns correct vertices (x, y, z)`, () => {

    const points = [
      {
        x: 1,
        y: 1,
        z: 1
      },
      {
        x: 0,
        y: 1,
        z: - 1
      }
    ];

    expect(pointsToVertices(points, {color: false}))
      .toEqual([1, 1, 1, 0, 1, - 1]);

  });

  it(`returns correct vertices (x, z)`, () => {

    const points = [
      {
        x: 1,
        z: 1
      },
      {
        x: 0,
        y: 1,
        z: - 1
      }
    ];

    expect(pointsToVertices(points, {color: false}))
      .toEqual([1, 0, 1, 0, 1, - 1]);

  });

  it(`returns correct vertices (x)`, () => {

    const points = [
      {
        x: 1,
      },
      {
        x: 0,
      }
    ];

    expect(pointsToVertices(points, {color: false}))
      .toEqual([1, 0, 0, 0, 0, 0]);

  });

  it(`returns correct vertices (z, y)`, () => {

    const points = [
      {
        z: - 1,
        y: 0,
      },
      {
        z: 1,
        y: 1
      }
    ];

    expect(pointsToVertices(points, {color: false}))
      .toEqual([0, 0, - 1, 0, 1, 1]);

  });

});

describe(`detects color`, () => {

  it(`sets color: true if one color is set on a point`, () => {

    const points = [
      {
        x: 0,
        y: 0,
        z: - 1,
        color: `rgb(255, 255, 0)`
      },
      {
        x: 1,
        y: 1,
        z: 0
      }
    ];

    expect(pointsToVertices(points))
      .toEqual([0, 0, - 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1]);

  });

  it(`ignores color if color = false`, () => {

    const points = [
      {
        x: 0,
        y: 0,
        z: - 1,
        color: `rgb(255, 255, 0)`
      },
      {
        x: 1,
        y: 1,
        z: 0
      }
    ];

    expect(pointsToVertices(points, {color: false}))
      .toEqual([0, 0, - 1, 1, 1, 0]);

  });

});

describe(`returns metadata`, () => {

  it(`returns correct metadata without color`, () => {

    const points = [
      {
        x: 1,
        y: 1,
        z: 0
      },
      {
        x: 0,
        y: 0,
        z: 1
      }
    ];

    const data = {
      data: [1, 1, 0, 0, 0, 1],
      meta: {
        position: {start: 0, length: 3},
        vertexLength: 3,
        amount: 2
      }
    };

    expect(pointsToVertices(points, {color: false, meta: true}))
      .toEqual(data);

  });

  it(`returns correct metadata with color`, () => {

    const points = [
      {
        x: 1,
        y: 1,
        z: 0,
        color: `#FF0000`
      },
      {
        x: 0,
        y: 0,
        z: 1,
        color: `rgba(0, 255, 0, 0.5)`
      },
      {
        x: 0,
        y: 1,
      }
    ];

    const data = {
      data: [1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, .5, 0, 1, 0, 0, 0, 0, 1],
      meta: {
        position: {start: 0, length: 3},
        color: {start: 3, length: 4},
        vertexLength: 7,
        amount: 3
      }
    };

    expect(pointsToVertices(points, {meta: true}))
      .toEqual(data);

  });

});
