/*You are tasked with implementing a JavaScript function called customReduce(arr, callback, initialValue) that mimics the behavior of the built-in reduce function. The customReduce function should iterate through the elements of an array arr and apply a callback function to each element, accumulating a result based on the specified initialValue. The accumulated result should be returned at the end.

Write the customReduce function and provide an example of how it can be used:

function customReduce(arr, callback, initialValue) {
  // Your code here
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

const sum = customReduce(numbers, (acc, current) => acc + current, 0);

console.log(sum); // Should print 15
*/
const arr1 = [1, 2, 3];

//const reduce = myArray.reduce((prev, curr)=> prev + curr,  initialVal)
const sumInitial = arr1.reduce((prev, curr) => prev + curr, 0);
const sumInitial2 = arr1.reduce((prev, curr) => prev + curr, 4);

console.log(sumInitial); // 6
console.log(sumInitial2); //10
