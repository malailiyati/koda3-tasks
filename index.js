

/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul(){
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10,50);
    console.log(resultSum);

    // Failed
    try{
        const result = irul.sumNumber("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10,50);
    console.log(resultMultiply);

    // Failed
    try{
        const result = irul.multiplyNumbers("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(`the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`);

    // Failed
    try{
        const result = irul.celciusToFahrenheit("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
tasksIrul();

/**
 * Task lala
 */

// import your tasks here
const triangle = require("./jawaban/no1.js");
const countArray = require("./jawaban/no2.js");
const triangleIsiTerbalik = require("./jawaban/no3.js");
const processNumber = require("./jawaban/no4.js");
const cetakTabel = require("./jawaban/no5.js");
const buatRentang = require("./jawaban/no6.js");

const number = [1, 2, 3, 4, 5];
function tasksLala(){
    // Program: triangle
    const resultTringale = triangle(5);
    console.log(resultTringale);

    // Program: countArray
    const resultCountArray = countArray(number);
    console.log(resultCountArray);

    // Program: tringaleTerbalik
    const resultTringaleTerbalik = triangleIsiTerbalik(5);
    console.log(resultTringaleTerbalik);

    // Program: processNumber
    const resultProcessNumber = processNumber(number);
    console.log(resultProcessNumber);

     // Program: cetakTabel
    const resultCetakTabel = cetakTabel(3);
    console.log(resultCetakTabel);

    // Program: buatRentang
    const resultbuatRentang = buatRentang(5, 10);
    console.log(resultbuatRentang);
}
tasksLala();

