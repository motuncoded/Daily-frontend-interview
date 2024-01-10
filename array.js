var products = ["soccer ball", "cleats", "socks", "shorts"];
console.log(products[0]);
console.log(products[1]);
console.log(products[4]);

var twoDimensional = [
  [41, 13],
  [7, 29],
];
console.log(twoDimensional[0]); // [41, 13]
console.log(twoDimensional[0][1]); // 13
console.log(twoDimensional[1]); // [7. 29]
console.log(twoDimensional[1][1]); //29

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[1]); //orange
console.log(fruits[fruits.length - 1]); // Plum
console.log(fruits[fruits.length - 3]); // Apple
console.log(fruits.at(-1)); // Plum
console.log(fruits.at(-2)); // Plum

fruits[3] = "Watermelon";
console.log(fruits[3]); //watermelon
console.log(fruits.length); // 4
console.log(fruits);

//array to store other values
let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];

console.log(arr[1].name); //John
console.log(arr[3]); //function(){alert("hello")}

// create an array size
let array = new Array(5);
console.log(array);

//array method
console.log(fruits.pop()); // remove watermelon because it is at the end
console.log(fruits); // ['Apple', 'Orange', 'Plum']
console.log(fruits.pop()); //Plum

fruits.push("Watermelon"); //to add watermelon
console.log(fruits); // ['Apple', 'Orange', 'Watermelon']

fruits.unshift("Pear"); //to add atthe beginning of the array
console.log(fruits); // ['Pear', 'Apple', 'Orange', 'Watermelon']

fruits.shift(); // to remove at the beginning of the array
console.log(fruits); //['Apple', 'Orange', 'Watermelon']

let foods = ["Eba"];
foods.unshift("Amala", "Semo");
console.log(foods); //['Amala', 'Semo', 'Eba']
foods.push("Beans", "Fufu");
console.log(foods); // ['Amala', 'Semo', 'Eba', 'Beans', 'Fufu']

//to copy array as reference
let boys = ["Bolu"];

let male = boys;
console.log(male); //['Bolu']
male.push("Ade");
console.log(male); //['Bolu', 'Ade']

//Array and Loops

let names = ["Ada", "Ade", "Bola"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
//Ada
//Ade
//Bola
let places = ["Lagos", "Ibadan", "Ondo"];
for (let key in places) {
  console.log(places[key]);
}
//Lagos
//Ibadan
//Ondo

let males = [];
males[123] = "Shola";
console.log(males); //[empty × 123, 'Apple']
console.log(males.length); //124

let num = [1, 2, 3, 4, 5, 6];
num.length = 2;
console.log(num); //[1, 2]

num.length = 5;
console.log(num); //[1, 2, empty × 3]
//define new array
let female = new Array("Apple", "Pear");
console.log(female); //['Apple', 'Pear']
console.log(female.length); //  2

//undefined new array
let person = new Array(2);
console.log(person); //empty
console.log(person.length);

//mutidimensional array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][3]); //undefined
console.log(matrix[0][1]); // 2

let fig = [1, 2, 3];
console.log(fig[1].toString()); // 2
console.log(fig.toString()); // 1, 2,3
console.log(String(fig)); // 1,2,3
console.log(String(fig) === "1,2,3"); // true
console.log("" + 1); // 1
console.log("1" + 1); // 11
console.log([1] + 1); //11
console.log([1, 2] + 1); //1,21
console.log("1, 2" + 1); // 1, 21

console.log([] == []); //false
console.log([] == ""); //truelet fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // 4

const style = ["Jazz", "Blues"];

style.push("Rock-n-Roll");
console.log(style); //['Jazz', 'Blues', 'Rock-n-Roll']

style[1] = "Classics";
console.log(style); //['Jazz', 'Classics', 'Rock-n-Roll']

style.shift();
console.log(style); //['Classics', 'Rock-n-Roll']

style.unshift("Rap", "Reggae");
console.log(style); // ['Rap', 'Reggae', 'Classics', 'Rock-n-Roll']

let arry = ["a", "b"];

arry.push(function () {
  console.log(this);
});

arry[2]();
console.log(arry[2]); //f (){alert(this)}
console.log(arry); // a, b, f (){alert(this)}
