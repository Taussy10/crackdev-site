// Firstly nesting object inside js

// in JS it won't give any error but it's big error that' why always use ts
const arr1 = [2,4, {no , yo}]
const arr2 = [2,4, {"no" , "yo"}]

// Yaa shorthand props exist but for that you have to declare keys first still
const lo= "hello"
const po = "hello"
const arr3 = [2,4, {lo , po}]



// for writing object you have to provide key and values
const arr4 = ['apple', 'banana', {vege:'potato',fruit:'orange'}];

// for getting array: you know that array gives indexes to each item(from 0)
arr4[0]



// callback function execute on each element of an array, 
// and returns an array that contains the results ?? what does it mean ?
// if you console the "value" then you will get all console values in an [array]
// if you return something

const value = arr4.map((element)=> {
console.log(element);

return element
})

console.log(value);



// array.sort

const arr5 = [3, 'banana', {vege:'potato',fruit:'orange'},{vege:'potato',fruit:5},{vege:4,fruit:5}];

// will learn by docs 
// It's an array method that sorts things

// do three things

//1. Sorts an array in place.
// sorts according UTF-16 means
// a)  first captial letter then alphabatically for name
// b) according digits in short 20> 100 cause first digit of 20 is 
// 2 wheres 100 is 1

//  if array contains object then
// number then object(which contains more strings) then numbers


//

//  This method mutates the array and returns a reference to the same array.

const value1 = arr5.sort()
console.log(value1);


const arr6 = [3,4,5,4 ];

const value2 = arr6.sort(function(a , b){
    return a-b
})

console.log(value2);
// points.sort(function(a, b){return a-b});


// Spread method
const words = ["spray", "elite", "present"];

// by ... we can sparead the eachvalue of an array  
console.log(...words);
// Result: Spray , elite , present