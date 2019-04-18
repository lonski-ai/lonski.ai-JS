describe('Test Task1', () => {
  const calc = require('./Task1');
  var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
  };

  test('completed more tasks', () => {
    expect(calc(tasksCompleted)).toBe('Anton');
  });
});

describe('Test Task2', () => {
  const multiplyNumeric = require('./Task2');
  var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
  };

  test('numerical values are multiplied by 2', () => {
    expect(multiplyNumeric(image)).toEqual({
      width: 200,
      height: 800,
      title: 'Cool image'
    });
  });
});
