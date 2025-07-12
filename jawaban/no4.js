const numbers = [1, 2, 3, 4, 5];
function proccesNumber(arr) {
  let sum = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum *= arr[i];
    }
  }
  console.log(sum);
}

module.exports = proccesNumber;
