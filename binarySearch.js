const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
 var getTarget = function binarySearch(arr, target) {
     for (let i = 0; i < arr.length; i++){
             if (arr[i] > target) {
                 return target - 1
             }else return target
         }
     }
console.log(getTarget(arr, target));
