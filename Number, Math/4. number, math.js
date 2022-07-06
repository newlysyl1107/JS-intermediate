// 10진수를 2진수나 16진수로 변환
const number = 10;

// 2진수
console.log(number.toString(2));     // 1010

// 16진수
console.log(number.toString(16));    // a


const num1 = 5.1;
const num2 = 5.7;

// 올림
console.log(Math.ceil(num1));        // 6
console.log(Math.ceil(num2));        // 6

// 내림
console.log(Math.floor(num1));      // 5
console.log(Math.floor(num2));      // 5

// 반올림
console.log(Math.round(num1));      // 5
console.log(Math.round(num2));      // 6