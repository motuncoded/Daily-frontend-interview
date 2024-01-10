//how to empty array
const numbers = [1, 2, 3, 4]
//1
console.log(numbers.splice(0, 0)) //[]
//2
console.log(numbers.slice(0, 0)) // []
 
//3
let myArray = [1, 2, 3, 4, 5, 6]
myArray.length = 0;
console.log(myArray) //[]

//4 
let arrEmpty = [1, 2, 3, 4, 5, 6]
arrEmpty = [];
console.log(arrEmpty) //[]

//5
let arrFill = [1, 2, 3, 4, 5, 6]
 console.log(arrFill.fill(0)) // [0, 0, 0, 0, 0, 0]