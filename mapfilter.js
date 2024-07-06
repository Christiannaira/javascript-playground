

// Array Filter: Given an array of string, filter out all of the strings that have a length greater than 5 characters using array filter and return the filtered array.

// Array Map and Ternary Operator: Given an array of numbers, convert each even number to its square and each odd number to its cube using array map and a ternary operator. Return the modified array. 

let fruits = ["apple", "banana", "pear", "grapefruit", "kiwi"];


let filteredFruits = fruits.filter((fruit) => {

    return fruit.length > 5;

});

console.log(filteredFruits);