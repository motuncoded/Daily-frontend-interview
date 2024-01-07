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

// how to int
