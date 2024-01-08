// Array methods

//toString()  it return the array values separated by commans
let sports = ["volleyball", "basketball", "football"]
console.log(sports.toString()) // volleyball,basketball,football


//join() this joins the values of the array together by catenation
console.log(sports.join()) //volleyball,basketball,football
console.log(sports.join(" ")) //volleyball basketball football
console.log(sports.join("+")) //volleyball+basketball+football
 

//pop() to remove the last value of an array
console.log(sports.pop()) //football
console.log(sports) //['volleyball', 'basketball']


//push() to add new value to the end of the array
console.log(sports.push("badminton")) //3
console.log(sports) // ['volleyball', 'basketball', 'badminton']

//shift() to remove the first element in the array
console.log(sports.shift()) //volleyball
console.log(sports) //['basketball', 'badminton']

//unshift() to add the first element to the array
console.log(sports.unshift("hockey")) //3
console.log(sports) //['hockey', 'basketball', 'badminton']

//delete to delete elemt in thearray
delete sports[1];
console.log(sports) //['hockey', empty, 'badminton'];

//concat to add elementi different array together
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8]
let new_arr = arr1.concat(arr2, arr3);
console.log(new_arr) //[1, 2, 3, 4, 5, 6, 7, 8]

//