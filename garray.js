//Create an array of given size in JavaScript

//1
let arrt = new Array(5);
console.log(arrt);

//2
let arra = Array.apply(null, Array(5)).map(function () {});

console.log(arra.length);
console.log(arra);

//3
let arrb = Array.apply(null, Array(5)).map(function (y, i) {
  return i;
});

console.log(arrb.length); //5
console.log(arrb); //[0, 1, 2, 3, 4]

//4
let arrc = Array.from(Array(5));
console.log(arrc.length); //5
console.log(arrc); //  [undefined, undefined, undefined, undefined, undefined]

//5

let arrd = Array.from("GEEKSFORGEEKS");
console.log(arrd.length); //13
console.log(arrd); //  ['G', 'E', 'E', 'K', 'S', 'F', 'O', 'R', 'G', 'E', 'E', 'K', 'S']

let arre = Array.from("G".repeat(5));
console.log(arre.length); //5
console.log(arre); //  ['G', 'G', 'G', 'G', 'G']

let arrf = Array.from({ length: 5 }, (x, i) => i);
console.log(arrf.length); // 5
console.log(arrf); //[0, 1, 2, 3, 4]

const size = 5;
let arrg = [];
for (let i = 0; i < size; i++) {
  arrg.push(undefined);
}
console.log(arrg);

// how to intiatae an array

//Using an array as literal

const sports = ["cricket", "football", "competitive-programming"];
console.log("sports=", sports);

const myArray = [];
console.log("myArray=", myArray);

const score = [420, 10, 1, 12, 102];
console.log("score=", score);

//using array constructor
const sportsa = new Array("cricket", "football", "competitive-programming");
console.log("sportsa=", sportsa);

const myArraya = new Array();
console.log("myArraya=", myArraya);

const pointsa = new Array();
console.log("points=a", pointsa);

const scorea = new Array(140, 200, 21, 53, 245, 20);
console.log("scorea=", scorea);

//Ways of iterating over a array in JavaScript
let array = ["geeks", "4", "geeks"];

// Accessing array elements one by one using conole.log
console.log(array[0]); // geeks
console.log(array[1]); // 4
console.log(array[2]); //geeks

//using for loop

{
  /*let array1 = [0, 1,2];
for (index = 0; index < array1.length; index++){
    console.log(array1[index])
}*/
}

//using  while loop
{
  /*let index = 0;
let array2 = [1, 2, 3, 4, 5, 6];
 
while (index < array2.length) {
    console.log(array2[index]);
    index++;
}*/
}

// foreach
let index = 0;
let array3 = [1, 2, 3, 4, 5, 6];

array.forEach(myFunction);

function myFunction(item, index) {
  console.log(item);
}
