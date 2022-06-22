function fizz() {
  function testPrime(n) {
    if (n === 1) {
      return false;
    }
    if (n === 2) {
      return true;
    }
    // eslint-disable-next-line
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
  // eslint-disable-next-line
  for (let i = 1; i <= 500; i++) {
    if (testPrime(i)) {
      console.log('FiZZBUZZ++');
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('FIZZBUZZ');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
export default fizz;
