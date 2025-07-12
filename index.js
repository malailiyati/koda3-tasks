

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
const lala = require("./tasks/lala");


const number = [1, 2, 3, 4, 5];
function tasksLala(){
    // Program: triangle
    // Success
    const resultTringale = lala.triangle(5);
    console.log(resultTringale);

    //Failed
    try {
        const result = lala.triangle(-5);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }

    // Program: countArray
    const resultCountArray = lala.countArray(number);
    console.log(resultCountArray);


    // Program: tringaleTerbalik
    // Success
    const resultTringaleTerbalik = lala.triangleIsiTerbalik(5);
    console.log(resultTringaleTerbalik);

    //Failed
    try {
        const result = lala.triangleIsiTerbalik(-5);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }

    // Program: processNumber
    // Success
    const resultProcessNumber = lala.processNumber(number);
    console.log(resultProcessNumber);

    //Failed
    try {
        const result = lala.processNumber([2, 4, 6]);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }

    // Program: cetakTabel
    // Success
    const resultCetakTabel = lala.cetakTabel(3);
    console.log(resultCetakTabel);

    //Failed
    try {
        const result = lala.cetakTabel(-3);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }

    // Program: buatRentang
    const resultbuatRentang = lala.buatRentang(5, 10);
    console.log(resultbuatRentang);

}
tasksLala();

