
// Write a function that takes in a number and uses nested loops to output a pattern of numbers based on the number.

function numberPattern(num) {

    for (let i = 1; i < num; i++) {
      
      let row = '';
      
      for (let j = 1; j < i; j++) {
  
          row += `${j} \t`
  
      }
  
      console.log(row)
  
    }
  
    num = num - 2;
  
    for (let i = 1; num > i; num--) {
  
      let second_row = "";
  
      for (let x = 1; num > x; x++) {
  
          second_row += `${x} \t`;
  
      }
  
      console.log(second_row);
  
    }
  
  }
  numberPattern(7);
  function astrologicalSign(month, num) {

    let sign;
    let invalid;

    switch(month) {

        case 'january':

            if (num >= 20 && num <= 31) {

                sign = "Aquarius"

            } else if (num >= 1 && num <= 19) {

                sign = "Capricorn"

            }
            
            else {

                invalid = `${num} is invalid`;   

            }

            break;

        case 'february':

            if (num >= 19 && num <= 29) {

                sign = "Pisces";

            } else if (num >= 1 && num <= 18) {

                sign = "Aquarius";

            } else {

                invalid = `${num} is invalid`;   

            }

            break;

        case 'march': 

            if (num >= 21 && num <= 31) {

                sign = "Aries";

            } else if (num >= 1 && num <= 20) {

                sign = 'Pisces';

            } else {

                invalid = `${num} is invalid`;

            }

            break;
        
        case 'april': 

            if (num >= 20 && num <= 30) {

                sign = "Taurus"

            } else if (num >= 1 && num <= 19) {

                sign = "Aries";

            } else {

                invalid = `${num} is invalid`;   

            }

            break; 

        case 'may': 

            if (num >= 21 && num <= 31) {

                sign = "Gemini";

            } else if (num >= 1 && num <= 20) {

                sign = "Taurus";

            } else {

                invalid = `${num} is invalid`;

            }

            break; 

        case 'june': 
            
        if (num >= 21 && num <= 30) {

            sign = "Cancer";

        } else if (num >= 1 && num <= 20) {

            sign = "Gemini";

        } else {

            invalid = `${num} is invalid`;

        }

        break;

    case 'july': 

        if (num >= 23 && num <= 31) {

            sign = "Leo";

        } else if (num >= 1 && num <= 22) {

            sign = "Cancer";

        } else {

            invalid = `${num} is invalid`; 

        }

        break; 

    case 'august': 

        if (num >= 23 && num <= 31) {

            sign = "Virgo";

        } else if (num >= 1 && num <= 22) {

            sign = "Leo"; 

        } else {

            invalid = `${num} is invalid`;

        } 

        break; 

    case "september": 

        if (num >= 23 && num <= 30) {

            sign = "Libra";

        } else if (num >= 1 && num <= 22) {

            sign = "Virgo"

        } else {

            invalid = `${num} is invalid`;

        }

        break;

    case "october": 

        if (num >= 23 && num <= 31) {

            sign = "Scorpio";

        } else if (num >= 1 && num <= 22) {

            sign = "Libra";

        } else {

            invalid = `${num} is invalid`;

        }

        break; 

    case "november": 

        if (num >= 22 && num <= 30) {

            sign = "Sagittarius";

        } else if (num >= 1 && num <= 21) {

            sign = "Scorpio";

        } else {

            invalid = `${num} is invalid`;

        }

        break; 

    case "december": 

        if (num >= 22 && num <= 31) {

            sign = "Capricorn";

        } else if (num >= 1 && num <= 21) {

            sign = "Sagittarius";

        } else {

            invalid = `${num} is invalid`;

        }

        break;


    }

    if (sign) {

        return `Your Astrological Sign is ${sign}`

    } else {

        return invalid;

    }


}


//switch statements


// 1. Write a function that takes in a month number (1-12) and returns the corresponding month name. 

function monthNumber(your_month_num) {

    let month;

    switch(your_month_num){

        case 1: 
            month = "January";
            break;
        case 2: 
            month = "February";
            break;
        case 3: 
            month = "March";
            break;
        case 4: 
            month = "April";
            break;
        case 5: 
            month = "May";
            break;
        case 6: 
            month = "June";
            break;
        case 7: 
            month = "July";
            break;
        case 8: 
            month = "August";
            break;
        case 9: 
            month = "September";
            break;
        case 10: 
            month = "October";
            break;
        case 11: 
            month = "November";
            break;
        case 12: 
            month = "December";
            break;
        default: 
            month = `There's no month in ${your_month_num}`;

    }

    return month;

}

let yourMonth = monthNumber(11);
console.log(yourMonth)


// 2. Write a function that takes in a day of the week (Monday - Sunday) and returns the corresponding number of the day (1-7)

function numOfDay(day_name) {

    let day_number;

    switch(day_name) {

        case "Sunday":
            day_number = 1;
            break;
        case "Monday":
            day_number = 2;
            break; 
        case "Tuesday":
            day_number = 3;
            break; 
        case "Wednesday":
            day_number = 4;
            break; 
        case "Thursday":
            day_number = 5;
            break; 
        case "Friday":
            day_number = 6;
            break; 
        case "Saturday":
            day_number = 7;
            break;
        default:
            day_number = 'There\'s no day'
            break;

    }

    return day_number;

}

let day_name = numOfDay('Sunsday');
console.log(day_name)


// 3. Write a function that takes in a person's birth month and returns a message that describes their astrological sign based on their birth month. Use a switch statement to implement this.

let user_month = prompt("Enter your birth-month: ");
let user_day = prompt("Enter your birth-day: ");
let astrological_sign = astrologicalSign(user_month.toLowerCase(), user_day);
document.getElementById("demo").innerHTML = astrological_sign;


// Write a function that takes in a number as an argument and uses a while loop to count down from that number to 0. logging each number to the console

function countDown(num) {

    while (num) {

        console.log(num);
        num--;

    }

}
countDown(10);


// Create a funciton that takes in a number as an argument and uses a do-while loop to count up from 0 to that number, logging each number to the console

function countUp(num) {

    let i = 0;

    do {
        console.log(i);
        i++;
    } while (i < num)

}
countUp(10);


// Write a function that takes in a number and uses a for loop to generate the sum of all the numbers from 1 to that number, returning the sum as the result.

function sumOfAllNum(num) {

    let result = 0;

    for (let i = 1; i < num; i++) {
        result += i
    }

    return result;


}
let result = sumOfAllNum(10);
console.log(result);


// Write a function that takes in a number as an argument and uses a do-while loop to calculate the sum of all the even numbers from 0 to that number returning the sum as the result

function sumOfAllEven(num) {

    let i = 0;
    let sumOfEven = 0;

    do {
        if (i % 2 === 0) {
            sumOfEven += i
        }
        i++;
    } while (i < num)

    return sumOfEven;
}
let evenResult = sumOfAllEven(10);
console.log(evenResult);

