/*
#11 
This problem was asked by Google.

Given an array of sorted integers in ascending order, and a target integer, write a function to search target in nums array. If target exists, return the index of the target in the array, otherwise return -1.

Example
function binarySearch(arr, target){
 
};
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target)); // 4const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
 var getTarget = function binarySearch(arr, target) {
     for (let i = 0; i < arr.length; i++){
             if (arr[i] > target) {
                 return target - 1
             }else return target
         }
     }
console.log(getTarget(arr, target));
