describe('Number', () => {
  test('Number', () => {
    expect(typeof (1)).toBe('number');
  });
  test('NaN', () => {
    expect(2 * 'string').toBe(NaN);
  });
});

describe('String', () => {
  test('String postestive', () => {
    expect(typeof ('Text')).toBe('string');
  });
  test('String negative', () => {
    expect(Number('Text')).toBe(NaN);
  });
});

describe('Boolean', () => {
  test('True test', () => {
    expect(2 > 1).toBeTruthy();
  });
  test('False test', () => {
    expect(2 < 1).toBeFalsy();
  });
});

describe('Null and Undefined', () => {
  test('Null', () => {
    expect(null).toBeNull();
  });
  test('Undefined', () =>{
    expect(undefined).toBeUndefined();
  });
  test('Null compare', () => {
    expect(null > 0).toBeFalsy();
    expect(null >= 0).toBeTruthy();
  });
  test('Undefined compare', () => {
    expect(undefined > 0).toBeFalsy();
    expect(undefined >= 0).toBeFalsy();
    expect(undefined === 0).toBeFalsy();
  });
});

describe('Artesthmetic operations', () => {
  test('sum', () => {
    expect(1 + 1).toBe(2);
  });
  test('sub', () => {
    expect(2 - 1).toBe(1);
  });
  test('multiplication', () => {
    expect(2 * 2).toBe(4);
  });
  test('division', () => {
    expect(4 / 2).toBe(2);
  });
  test('division wtesth remainder', () => {
    expect(5 % 2).toBe(1);
  });
  test('increment', () => {
    let a = 1;
    expect(--a).toBe(0);
  });
  test('preproduction', () => {
    let a = 1;
    expect(--a).toBe(0);
  });
  test('pre-increment', () => {
    let a = 1;
    expect(++a).toBe(2);
  });
  test('postdecrement', () => {
    let a = 1;
    expect(a--).toBe(1);
  });
  test('postdecrement', () => {
    let a = 1;
    expect(a--).toBe(1);
  });
  test('postincrement', () => {
    let a = 1;
    expect(a++).toBe(1);
  });
});

describe('operations wtesth string', () => {
  test('summ string', () => {
    expect('кофе' +  'машина').toBe('кофемашина');
  });
});

describe('comparison operators', () => {
  test('less or equal', () => {
    expect(2 >= 4).toBeFalsy();
  });
  test('equal', () => {
    expect('2' == 2).toBeTruthy();
  });
  test('notequal', () => {
    expect('2' != 2).toBeFalsy();
  });
  test('identically', () => {
    expect('2' === 2).toBeFalsy();
  });
});

describe('logical operators', () => {
  test('logical and', () => {
    expect(1 && 2 && null && 3).toBe(null);
  });
  test('logical or', () => {
    expect(5 || 2).toBe(5);
  });
  test('logical not', () => {
    expect(!0).toBeTruthy();
  });
});

describe('type conversion', () => {
  test('parseInt', () => {
    expect(parseInt('22')).toBe(22);
  });
  test('parseInt', () => {
    expect(parseFloat('1.5')).toBe(1.5);
  });
  test('Number', () => {
    expect(Number('22кг')).toBe(NaN);
  });
  test('isNaN', () => {
    expect(isNaN('1')).toBe(false);
  });
  test('isFinite', () => {
    expect(isFinite('1q')).toBe(false);
  });
});

describe('Math', () => {
  test('max', () => {
    expect(Math.max(2, 1)).toBe(2);
  });
  test('min', () => {
    expect(Math.min(2, 1)).toBe(1);
  });
  test('sqrt', () => {
    expect(Math.sqrt(4)).toBe(2);
  });
  test('random', () => {
    const random = Math.random();
    expect(random > 0 && random < 1).toBeTruthy();
  });
  test('abs', () => {
    expect(Math.abs(-4)).toBe(4);
  });
  test('ceil', () => {
    expect(Math.ceil(4.2)).toBe(5);
  });
  test('PI', () => {
    expect(Math.PI).toBe(3.141592653589793);
  });
});

describe('string', () => {
  test('length', () => {
    expect('qwerty'.length).toBe(6);
  });
  test('charAt', () => {
    expect('test'.charAt(2)).toBe('s');
  });
  test('substr', () => {
    expect('qwerty'.substr(3, 5)).toBe('rty');
  });
  test('split', () => {
    expect('test'.split('')).toEqual(['t', 'e', 's', 't']);
  });
  test('toLowerCase', () => {
    expect('TeSt'.toLowerCase()).toBe('test');
  });
  test('toUpperCase', () => {
    expect('TeSt'.toUpperCase()).toBe('TEST');
  });
  test('indexOf', () => {
    expect('test te'.indexOf('e')).toBe(1);
  });
  test('lastIndexOf', () => {
    expect('test te'.lastIndexOf('q')).toBe(-1);
  });
  test('replace', () => {
    expect('test'.replace('e', 'E')).toBe('tEst');
  });
});

describe('array', () => {
  test('length', () => {
    expect([0, 1, 2].length).toBe(3);
  });
  test('concat', () => {
    const a = [1, 2];
    const a2 = [3, 4];
    expect(a.concat(a2)).toEqual([1, 2, 3, 4]);
  });
  test('join', () => {
    const a = [1, 2];
    expect(a.join('')).toBe('12');
  });
  test('push', () => {
    const a = [1, 2];
    expect(a.push(3, 4)).toBe(4);
    expect(a).toEqual([1, 2, 3, 4]);
  });
  test('pop', () => {
    const a = [1, 2, 3];
    expect(a.pop()).toEqual(3);
    expect(a).toEqual([1, 2]);
  });
  test('unshift', () => {
    const a = [1, 2];
    expect(a.unshift(3, 4)).toBe(4);
    expect(a).toEqual([3, 4, 1, 2]);
  });
  test('shift', () => {
    const a = [1, 2, 3];
    expect(a.shift()).toBe(1);
    expect(a).toEqual([2, 3]);
  });
  test('slice', () => {
    const a = [1, 2, 3, 4, 5, 6];
    expect(a.slice(2, -1)).toEqual([3, 4, 5]);
    expect(a).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('reverse', () => {
    const a = [1, 2, 3, 4, 5];
    expect(a.reverse()).toEqual([5, 4, 3, 2, 1]);
  });
});
