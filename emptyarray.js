//how to empty array
const numbers = [1, 2, 3, 4];
//1
console.log(numbers.splice(0, 0)); //[]
//2
console.log(numbers.slice(0, 0)); // []

//3
let myArray = [1, 2, 3, 4, 5, 6];
myArray.length = 0;
console.log(myArray); //[]

//4
let arrEmpty = [1, 2, 3, 4, 5, 6];
arrEmpty = [];
console.log(arrEmpty); //[]

//5
let arrFill = [1, 2, 3, 4, 5, 6];
console.log(arrFill.fill(0)); // [0, 0, 0, 0, 0, 0]

/// at() from right to left
const array = ["a", "b", "c", "d", "e"];
console.log(array.at(0)); //a
console.log(array.at(2)); //c
console.log(array.at(4)); //e
console.log(array.at(1)); //b
console.log(array.at(-1)); //e
console.log(array.at(-2)); //d
