// Array methods

//toString()  it return the array values separated by commans
let sports = ["volleyball", "basketball", "football"];
console.log(sports.toString()); // volleyball,basketball,football

//join() this joins the values of the array together by catenation
console.log(sports.join()); //volleyball,basketball,football
console.log(sports.join(" ")); //volleyball basketball football
console.log(sports.join("+")); //volleyball+basketball+football

//pop() to remove the last value of an array
console.log(sports.pop()); //football
console.log(sports); //['volleyball', 'basketball']
let fruitss = ["apple", "banana", "orange"]
let removedFruits = fruitss.pop()
console.log(removedFruits) //orange

//push() to add new value to the end of the array
console.log(sports.push("badminton")); //3
console.log(sports); // ['volleyball', 'basketball', 'badminton']
let fruits = ["apple", "banana"]
fruits.push("orange", "grape")
console.log(fruits) //['apple', 'banana', 'orange', 'grape']
console.log(typeof removedFruits) //string
console.log(fruits)  //['apple', 'banana', 'orange', 'grape']



//shift() to remove the first element in the array
console.log(sports.shift()); //volleyball
console.log(sports); //['basketball', 'badminton']

//unshift() to add the first element to the array
console.log(sports.unshift("hockey")); //3
console.log(sports); //['hockey', 'basketball', 'badminton']

//delete to delete elemt in thearray
delete sports[1];
console.log(sports); //['hockey', empty, 'badminton'];

//concat to add elementi different array together
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8];
let new_arr = arr1.concat(arr2, arr3);
console.log(new_arr); //[1, 2, 3, 4, 5, 6, 7, 8]

//sort() to sort the values of the array
let arry = [99, 23, 45, 67];
arry.sort();
console.log(arry); //[23, 45, 67, 99]

let ary = ["female", "male", "boy", "girl", "man", "woman"];
ary.sort();
console.log(ary); //['boy', 'female', 'girl', 'male', 'man', 'woman']

//splice to remove and add values
let values = [99, 23, 45, 67];
values.splice("female", "male", "boy", "girl", "man", "woman");
console.log(values); //['boy', 'girl', 'man', 'woman', 99, 23, 45, 67]

//slice to remove a piece from the array

let numbers = [1, 2, 3, 4, 5, 6];
let number = numbers.slice(1, 4); // 1 for start, 2 for end
console.log(number); //[2, 3, 4]

//reverse to chsnge the order of values
numbers.reverse();
console.log(numbers); // [6, 5, 4, 3, 2, 1]

//isArray to check if the oject is an array or not  (left-right)
let alpha = "abcdefg";

console.log(Array.isArray(numbers)); //true
console.log(Array.isArray(alpha)); // false

let elements = ["desktop", "laptop", "mobile", "tablets"];

console.log(elements.indexOf("mobile", 0)); // first arg:item, second arg:start //2
console.log(elements.indexOf("mobile", 3)); // -1

//lastindexOf return the last index (right-left)
let elem = ["laptop", "mobile", "headset", "mobile", "router"];

console.log(elem.lastIndexOf("mobile", 4)); // 3

//find to see the first element in the array for testing

console.log(elem.find((element) => element == "laptop")); //laptop
const numArray = [15, 2, 12, 190];
console.log(numArray.find((element) => element > 10)); //15

//findIndex to find the index of the first element

let arrNum = [5, 12, 8, 130, 44];
console.log(arrNum.findIndex((elem) => elem > 5)); // 1
console.log(arrNum.findIndex((elem) => elem < 5)); // -1

//includes() if it contain the value, it return a boolean

let arrIncludes = [1, 2, 3];
console.log(arrIncludes.includes(2)); // true

//entries()  returns an array
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const day = days.entries();

for (let x of day) {
  console.log(x + "\n");
}
//1,mon

// 2,tue

// 3,wed

// 4,thu

// 5,fri

// 6,sat
