function procesNumber(arr) {
  let sum = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum *= arr[i];
    }
  }
  return sum;
}


module.exports = procesNumber;
