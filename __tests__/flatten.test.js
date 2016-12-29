import flatten from '../src/lib/flatten';

describe(`returns the correct values`, () => {

  it(`flattens a given array`, () => {

    const arr = [
      [1, 0, 1],
      [0, 1, 0]
    ];

    expect(flatten(arr))
      .toEqual([1, 0, 1, 0, 1, 0]);

  });

});
