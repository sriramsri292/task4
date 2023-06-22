
//Remove duplicates from an array
// Anonymous function
let uniqueArray = function(arr) {
    return [...new Set(arr)];
  };
  
  console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5, 5]));  
  
  // IIFE (Immediately-invoked Function Expression)
  let uniqueArrayResult = (function(arr) {
    return [...new Set(arr)];
  })([1, 2, 2, 3, 4, 4, 5, 5]);
  
  console.log(uniqueArrayResult);  
  