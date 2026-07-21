//A.Part 1

//1

// let x = "123";
// console.log(Number(x) + 7);

/* ----------------------------------------- */

//2

// let x = 0;
// if (Boolean(x) == false)
//     console.log("Invalid");

/* ----------------------------------------- */

//3

// let res = "";
// for (let i = 0; i < 10; i++)
// {
//     if (i % 2 == 0)
//         continue;
//     res += i;
//     if (i < 9)
//         res += ',';
// }
// console.log(res);

/* ----------------------------------------- */

//4

// let arr = [1, 2, 3, 4, 5];

// let res = arr.filter(
//     even => even % 2 == 0
//     );
// console.log(res);

/* ----------------------------------------- */

//5

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let megaArray = [...array1 , ...array2];
// console.log(megaArray);

/* ----------------------------------------- */

//6

// const arrOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sturday"];
// let key = 1;
// switch (key) {
//     case 1:
//         console.log(arrOfDays[key-1]);
//         break;
//     case 2:
//         console.log(arrOfDays[key-1]);
//         break;
//     case 3:
//         console.log(arrOfDays[key-1]);
//         break;
//     case 4:
//         console.log(arrOfDays[key-1]);
//         break;
//     case 5:
//         console.log(arrOfDays[key-1]);
//         break;
//     case 6:
//         console.log(arrOfDays[key-1]);
//         break;
//     case 7:
//         console.log(arrOfDays[key-1]);
//         break;

//     default:
//         console.log("INVALID VALUE");
//         break;
// }
/* ----------------------------------------- */

//7

// const arrOfString = ["a", "ab", "abc"];
// const arrOfLengths = arrOfString.map((string) => string.length);
// console.log(arrOfLengths);
/* ----------------------------------------- */

//8

// let isDivisible = function (number)
// {
//     if (number % 3 === 0 && number % 5 === 0)
//         console.log("Divisible by both");
// }
// let x = 15;
// isDivisible(x);

/* ----------------------------------------- */

//9

// let square = number => number * number;
// let x = 5;
// console.log(square(x));

/* ----------------------------------------- */

//10

// const person = {
//     name: 'john',
//     age:    25,
// };

// let destructuringObject = function (x) {
//     const {name, age} = x;
//     console.log(`${name} is ${age} years old`);
// }
// destructuringObject(person);
/* ----------------------------------------- */

//11

// let sumOfNumbers = function (...number)
// {
//     let total = 0;
//     for (const num of number) {
//         total += num;
//     }

//     return total;
// }

// console.log(sumOfNumbers(1, 5, 3, 4));

/* ----------------------------------------- */

// 12

// function getSuccess()
// {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 3000)
//     });
// }

// getSuccess().then((message) => {
//     console.log(message);
// });
/* ----------------------------------------- */

//13

// let largestNumber = function (array)
// {
//     let mx = array[0];
//     for (const number of array) {
//         mx = Math.max(mx, number);
//     }

//     return mx;
// }
// let arr = [5, 6, 3 , 2, 5, 9];
// console.log(largestNumber(arr));

/* ----------------------------------------- */

//14

// let arrayOfKeys = function (myObject)
// {
//     let arrKeys = Object.keys(myObject);
//     return arrKeys;
// }

// let firstObject = {
//     name: "John",
//     age: 30
// };
// console.log(arrayOfKeys(firstObject));

/* ----------------------------------------- */

//15

// let originalString = "The quick brown fox";
// let arrayOfSubstrings = originalString.split(" ");
// console.log(arrayOfSubstrings);
/* ----------------------------------------- */


//B.Part 2
/*
1. forEach : an Array Method used to iterate on array elements
    can't use continue , break , await with forEach.
    return undefined.

    for of : loop for iterate on any iterable thing in js.
    can use continue , break , await with for of.

2. Hoisting : is a behavior in js make the declarations of variable go on first lines with var.



3.  ==  : ()loose Equality) make comparison after Type Coercion.
    === : (Strict Equality) make comparison by value and dataType without Type Coercion.

4. (try) but into it a code may give an error , c
    (catch) catch the error .    

    its important with async because any rejected promise being an exception while using await.

5. type conversion : transform the dataType by yourself using constructor methods (String() , Number() ... etc).
   type coersion   : js transform the dataType by itself.

*/

