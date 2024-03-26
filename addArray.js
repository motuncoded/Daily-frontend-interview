// Ways of merging arrays


let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]

// spread operator
let array1 = [...arr1, ...arr2]
console.log(array1) //[1, 2, 3, 4, 5, 6, 7, 8]

//concatenation
let array2 = arr1.concat(arr2)
console.log(array2) //[1, 2, 3, 4, 5, 6, 7, 8]

// using push array method
 arr1.push( ...arr2);
console.log(arr1)// [1, 2, 3, 4, 5, 6, 7, 8]

//using join array method
arr1.join(...arr2);
console.log(arr1) // [1, 2, 3, 4, 5, 6, 7, 8]
   
//for each method

arr1.forEach(function (num) {
    arr2.push(num)
    
})
console.log(arr1) //[1, 2, 3, 4, 5, 6, 7, 8]

//map method
arr1.map((num) => {
    arr2.push(num)
})

console.log(arr1) //[1, 2, 3, 4, 5, 6, 7, 8]

const array4 =(arr1, arr2)=>{
    for (let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i])
    }
}
console.log(arr1) //[1, 2, 3, 4, 5, 6, 7, 8]
 
let array5 = arr2.reduce((arr, array) => {
    arr.push(array);
return arr;
}, arr1);
console.log(arr1)

let array6 = [33, 29, 2]
array6 = array6.sort();
console log()
