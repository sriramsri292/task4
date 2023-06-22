// 1. Print odd numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddNumbers = arr.filter(number => number % 2 !== 0);

console.log(oddNumbers);


// 2. Convert all the strings to title caps in a string array
let stringArray = ["hello", "world", "openai", "gpt-3"];

let titleCapsArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log(titleCapsArray);


// 3. Sum of all numbers in an array
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = numberArray.reduce((acc, curr) => acc + curr, 0);

console.log(sum);


// 4. Return all the prime numbers in an array
let primeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

let primeNumbers = primeArray.filter(isPrime);

console.log(primeNumbers);


// 5. Return all the palindromes in an array
let palindromeArray = ["level", "radar", "hello", "madam"];

let isPalindrome = str => {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

let palindromes = palindromeArray.filter(isPalindrome);

console.log(palindromes);
