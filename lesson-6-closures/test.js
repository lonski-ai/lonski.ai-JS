const averageTip = require('./task1');

test('Calculate the average', () => {
  expect(averageTip([1, 2, 3, 4, 5])).toBe(3);
});