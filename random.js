function capitalize(string) {
  return string.split('').map((letter, index) => (index === 0 ? letter.toUpperCase() : letter)).join('');
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function calculator() {
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

function getKeyInfo(string) {
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

function cipher(string) {
  const words = string.split(' ');
  const finalWord = [];
  words.forEach((word) => {
    const keyInfo = getKeyInfo(word);
    const cipherKeys = getCipheredKey(keyInfo);
    finalWord.push(cipherKeys.map((key) => String.fromCharCode(key.number)).join(''));
  });
  return finalWord.join(' ');
}

function getCipheredKey(objs) {
  const result = [];
  objs.forEach((obj) => {
    let number;
    if (obj.isCapital) {
      number = (obj.lower + 5 > 122 ? obj.lower + 5 - 26 : obj.lower + 5) - 32;
    } else if (obj.isNoChange) {
      number = obj.lower;
    } else {
      number = (obj.lower + 5 > 122 ? obj.lower + 5 - 26 : obj.lower + 5);
    }
    result.push({
      number,
      theLetter: obj.theLetter,
    });
  });

  return result;
}

function analyzeArray(arr) {
  return {
    average: average(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  }
}

function average(arr) {
  return arr.reduce((total, cur) => total + cur, 0) / arr.length;
}

exports.capitalize = capitalize;
exports.reverseString = reverseString;
exports.calculator = calculator;
exports.getKeyInfo = getKeyInfo;
exports.getCipheredKey = getCipheredKey;
exports.cipher = cipher;
exports.analyzeArray = analyzeArray;
