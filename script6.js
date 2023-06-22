// Anonymous function
let findMedianSortedArrays = function(arr1, arr2) {
    let combinedArray = arr1.concat(arr2);
    combinedArray.sort((a, b) => a - b);
  
    let medianIndex = Math.floor(combinedArray.length / 2);
  
    if (combinedArray.length % 2 !== 0) {
      return combinedArray[medianIndex];
    } else {
      let medianValue1 = combinedArray[medianIndex];
      let medianValue2 = combinedArray[medianIndex - 1];
      return (medianValue1 + medianValue2) / 2;
    }
  };
  
  // IIFE (Immediately-invoked Function Expression)
  let median = (function(arr1, arr2) {
    let combinedArray = arr1.concat(arr2);
    combinedArray.sort((a, b) => a - b);
  
    let medianIndex = Math.floor(combinedArray.length / 2);
  
    if (combinedArray.length % 2 !== 0) {
      return combinedArray[medianIndex];
    } else {
      let medianValue1 = combinedArray[medianIndex];
      let medianValue2 = combinedArray[medianIndex - 1];
      return (medianValue1 + medianValue2) / 2;
    }
  })([1, 3, 5], [2, 4, 6]);
  
  console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6]));  
  console.log(median);  
  