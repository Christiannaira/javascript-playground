
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


FizzBuzz(30);





