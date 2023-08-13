const arr1 = [1, 2, 3];

//const reduce = myArray.reduce((prev, curr)=> prev + curr,  initialVal)
const sumInitial = arr1.reduce((prev, curr) => prev + curr, 0) 
const sumInitial2 = arr1.reduce((prev, curr) => prev + curr, 4); 

console.log(sumInitial) // 6
console.log(sumInitial2) //10



