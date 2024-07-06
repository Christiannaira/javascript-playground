
// Array Map


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map(function(num) {

    return num * 2;

})

for (let i = 0; i < doubledNumbers.length; i++) {
    console.log(doubledNumbers[i]);
}