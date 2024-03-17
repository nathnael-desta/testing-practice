export function capitalize(string) {
  return string.split('').map((letter, index) => (index === 0 ? letter.toUpperCase() : letter)).join('');
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}

export function calculator() {
  function add(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mult(a, b) {
    return a * b;
  }

  function div(a, b) {
    if (b === 0) {
      return 'zero error';
    }
    return a / b;
  }

  return {
    add,
    sub,
    mult,
    div,
  };
}

export function getKeyInfo(string) {
  return string.split('').map((letter) => {
    const number = letter.charCodeAt(0);
    const lower = letter.toLowerCase().charCodeAt(0);
    const isCapital = (number >= 65 && number <= 90);
    const isNoChange = !((number >= 65 && number <= 90) || (number >= 97 && number <= 122));
    const theLetter = letter;
    return {
      lower,
      isCapital,
      isNoChange,
      theLetter,
    };
  });
}

export function cipher(string) {
  const keyInfo = getKeyInfo(string);


}

export function getCipheredKey(objs) {
  objs.forEach((obj) => {
    return {
      number : obj.number + 5,
      theLetter : theLetter
    }
  })
}



console.log(getKeyInfo('nAti!'));

