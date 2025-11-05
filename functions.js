function multiply(num1, num2, num3) {
    if (num1 === num2 || num2 === num3 || num1 === num3) {
        return "Numbers must be different";
    }
    return num1 * num2 * num3;
}
const convertToSeconds = function(minutes) {
    return minutes * 60;
};
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
function countVowels(str) {
    const vowels = str.toLowerCase().match(/[aeiou]/g);
    return vowels ? vowels.length : 0;
}
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(multiply(2, 3, 4));
console.log(convertToSeconds(5)); 
console.log(fahrenheitToCelsius(100));
console.log(reverseString("hello")); 
console.log(countVowels("hello world")); 
console.log(isPrime(11)); 
console.log(isPrime(4));
console.log(multiply(2, 2, 4));
console.log(fahrenheitToCelsius(32)); 
console.log(fahrenheitToCelsius(212));
console.log(reverseString("JavaScript")); 
console.log(countVowels("AEIOU aeiou")); 
console.log(isPrime(1)); 
console.log(isPrime(2)); 
console.log(isPrime(15));
console.log(isPrime(17));