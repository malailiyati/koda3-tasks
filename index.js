//import jawaban
const triangle = require("./jawaban/no1.js");
const countArray = require("./jawaban/no2.js");
const triangleIsiTerbalik = require("./jawaban/no3.js");
const proccesNumber = require("./jawaban/no4.js");
const cetakTabel = require("./jawaban/no5.js");
const buatRentang = require("./jawaban/no6.js");

//pemanggilan jawaban no 1-6
triangle(5); //no1

const number = [1, 2, 3, 4, 5];
countArray(number); //no2

triangleIsiTerbalik(5); //no3

proccesNumber(number); //no4

cetakTabel(3); //no5

buatRentang(5, 10); //no6

/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul() {
  // Program: Sum Number
  // Success
  const resultSum = irul.sumNumber(10, 50);
  console.log(resultSum);

  // Failed
  try {
    const result = irul.sumNumber("10", 30);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
  // Program: Multiply Number
  // Success
  const resultMultiply = irul.multiplyNumbers(10, 50);
  console.log(resultMultiply);

  // Failed
  try {
    const result = irul.multiplyNumbers("10", 30);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
  // Program: Convert Celcius to Fahrenheit
  // Success
  const temperatureResult = irul.celciusToFahrenheit(10);
  console.log(
    `the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`
  );

  // Failed
  try {
    const result = irul.celciusToFahrenheit("10", 30);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
tasksIrul();

/**
 * Task "Person Name"
 */

// import your tasks here
