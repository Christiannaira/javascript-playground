
// a FizzBuzz program can be created using a for loop that iterates from 1 to a specified number. Conditionally, replace multiples of 3 with “Fizz,” multiples of 5 with “Buzz,” and both with “FizzBuzz,” then print the result. - using FOR LOOP

function FizzBuzz(num) {

    for (let i = 1; i < num; i++) {

        let fizz_buzz = "";
        
        if (i % 3 == 0 && i % 5 == 0) {
            fizz_buzz = `${i}, FizzBuzz`
        } else if (i % 3 == 0) {
            fizz_buzz = `${i}, Fizz`
        } else if (i % 5 == 0) {
            fizz_buzz = `${i}, Buzz`
        } else {
            fizz_buzz = `${i}, Number`
        }

        console.log(fizz_buzz)

    }

}

// FizzBuzz(30);


function FizzBuzz2(num) {

    let fizz_buzz = "";

    for (let x = 1; x < num; x++) {

        switch(x) {

            case x % 3 == 0 && x && 5 == 0:
                fizz_buzz = `${x}, FizzBuzz`;
                break; 
            case x % 3 == 0:
                fizz_buzz = `${i}, Fizz`;
                break;
            case x % 5 == 0: 
                fizz_buzz = `${i}, Buzz`;
                break; 
            default: 
                fizz_buzz = `${i}, Number`;
                break

        }

    }

    console.log(fizz_buzz)

} //using switch statements

// FizzBuzz(40);


function FizzBuzzClass(num) {


} //using objects

function FizzBuzzArray(num) {

} //using array


// Write a Javascript function that takes a string as input and determines whether it is a palindrome (reads the same forwards and backwards). The function should return true if the string is a palindrome and false otherwise. You should consider edge cases. Ignore non-alphanumeric characters and handle case sensitivity. Palindrome

// Write a javascript function that generates the Fibonacci sequence up to a given number of terms. The function should return an array containing the sequence.

// Array Map 1

const numbersTwo = [4, 9, 16, 25];
const newArr = numbersTwo.map(Math.sqrt);

// document.getElementById("demo").innerHTML = newArr

// Array Map 2

const numbersThree = [65, 44, 12, 4];
const newArr2 = numbersThree.map(myFunction);

// document.getElementById("demo").innerHTML = newArr2;

function myFunction(num) {
    return num * 10;
}

// Array Map 3

const persons = [
    {firstname: "Malcom", lastname: 'Reynolds'},
    {firstname: "Kaylee", lastname: "Fryle"},
    {firstname: "Jayne", lastname: "Cobb"}
];

// document.getElementById("demo").innerHTML = persons.map(getFullName);

function getFullName(item) {

    return [item.firstname, item.lastname].join(" ");

}


// Array Filter

let filterNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = filterNumbers.filter((num) => {

    return num % 2 === 0;

})

// console.log(evenNumbers);

const age = [32, 33, 16, 40];

let adult = age.filter(checkAdult); 

function checkAdult(age) {
    return age >= 18;
}

// console.log(adult);

const newAge = 25; 

let isLegal = (age > 18) ? "You are legal" : "You are not legal";

console.log(isLegal);