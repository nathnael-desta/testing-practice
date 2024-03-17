import {
  capitalize, reverseString, calculator, getKeyInfo, getCipheredKey
} from './random';

describe('my random', () => {
  let calc;

  beforeEach(() => {
    calc = calculator(); // Initialize calc before each test
  });

  it('capitalize nati equals Nati', () => {
    expect(capitalize('nati')).toBe('Nati');
  });

  it('capitalize natty equals Natty', () => {
    expect(capitalize('natty')).toBe('Natty');
  });

  it('reverse nati equals itan', () => {
    expect(reverseString('nati')).toBe('itan');
  });

  it('reverse natty equals yttan', () => {
    expect(reverseString('natty')).toBe('yttan');
  });

  it('add 1 and 1 gives 2', () => {
    expect(calc.add(1, 1)).toBe(2);
  });

  it('sub 1 and 1 gives 2', () => {
    expect(calc.sub(1, 1)).toBe(0);
  });

  test('div 4 and 2 gives 2', () => {
    expect(calc.div(4, 2)).toBe(2);
  });

  test('div 1 and 0 gives zero error', () => {
    expect(calc.div(1, 0)).toBe('zero error');
  });

  test('mult 4 and 2 gives 8', () => {
    expect(calc.mult(4, 2)).toBe(8);
  });

  test('caracter info', () => {
    expect(getKeyInfo('n')).toEqual([{
      number: 110,
      isCapital: false,
      isNoChange: false,
      theLetter: 'n',
    }]);
  });

  test('caracter info', () => {
    expect(getKeyInfo('N')).toEqual([{
      number: 78,
      isCapital: true,
      isNoChange: false,
      theLetter: 'N',
    }]);
  });

  test('caracter info', () => {
    expect(getKeyInfo('!')).toEqual([{
      number: 33,
      isCapital: false,
      isNoChange: true,
      theLetter: '!',
    }]);
  });

  test('caracter info', () => {
    expect(getKeyInfo('nAti!')).toEqual([
      {
        number: 110, isCapital: false, isNoChange: false, theLetter: 'n',
      },
      {
        number: 65, isCapital: true, isNoChange: false, theLetter: 'A',
      },
      {
        number: 116, isCapital: false, isNoChange: false, theLetter: 't',
      },
      {
        number: 105, isCapital: false, isNoChange: false, theLetter: 'i',
      },
      {
        number: 33, isCapital: false, isNoChange: true, theLetter: '!',
      },
    ]);
  });

  test('ciphered', () => {
    expect(getCipheredKey(getKeyInfo('nAti!')).toEqual([
      {
        number: 115,theLetter: 'n',
      },
      {
        number: 70, theLetter: 'A',
      },
      {
        number: 121, theLetter: 't',
      },
      {
        number: 110,theLetter: 'i',
      },
      {
        number: 38, theLetter: '!',
      },
    ]))
  })

  // test('cipher', () => {
  //   expect(cipher('Nati!')).toEqual('Sftn!');
  // });
  //   test('cipher nati gives sfyn', () => {
  //     expect(cipher('nati')).toBe('sfyn');
  //   });

//   test('cipher nati gives sfyn', () => {
//     expect(cipher('zzzz')).toBe('eeee');
//   });
});
