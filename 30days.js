// 30 days of leetcode challege

//1 Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = function() {
    return "Hello world"

}
console.log(createHelloWorld)

//2 Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

let counter = function (n) {
    return n + 1;

}
console.log(counter(10))

//3 Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
//toBe(val) accepts another value and returns true if the two values === each other.If they are not equal, it should throw an error "Not Equal".
//notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

function expect(val) {
    
}
