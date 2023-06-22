let arr = ["hello", "world", "openai", "gpt-3"];
let titleCapsArr = [];

// Anonymous function
let convertToTitleCase = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let titleCaseStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    titleCapsArr.push(titleCaseStr);
  }
};

convertToTitleCase(arr);
console.log(titleCapsArr);

// Immediately Invoked Function Expression (IIFE)
(function(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let titleCaseStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    tempArr.push(titleCaseStr);
  }
  console.log(tempArr);
})(arr);