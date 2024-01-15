//1 Given an array, we have to find the largest element in the array.

let largestNumber = function (arr) {
  return Math.max(...arr);
};

let arr = [1, 2, 91];
console.log(largestNumber(arr)); // 91
console.log(largestNumber([8, 10, 5, 7, 9])); // 91

//2  to sort an array

const sorting = function (arrSort) {
  let n = arrSort.length;

  for (var i = 0; i < n - 1; i++) {
    if (arrSort[i] > arrSort[i + 1]) {
      return false;
    } else {
      return true;
    }
  }
};
let arrSort = [1, 9, 3, 4];
console.log(sorting(arrSort)); //[1, 21, 30, 4]
