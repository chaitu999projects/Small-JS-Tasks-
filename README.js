/*================ 

1.) Create a function that takes an array of numbers and return both the minimum and maximum
numbers, in that order
Examples:
➔ minMax([1, 2, 3, 4, 5])
 Expected Output ➞ [1, 5]
➔ minMax([2334454, 5])
 Expected Output ➞ [5, 2334454]
➔ minMax([1])
 Expected Output ➞ [1, 1]
Notes:
All test arrays will have at least one element and are valid.

=================*/ 
console.log(`Quastion Number 1 from Achievers IT (Finding Minimum and MAximum number  in array)`);

let minAndMaxOperation = (a) => [Math.min(...a) , Math.max(...a)]
console.log(minAndMaxOperation([1, 2, 3, 4, 5]));

let minMax = (b) => [Math.min(...b) , Math.max(...b)];
console.log(minMax([2334454, 5]));

let lastMinMax = (c) => [Math.min(c), Math.max(c)];
console.log(minMax([1]));

/* ================= 

2.) Create a function that takes a string and returns the number (count) of vowels contained
within it.
Examples:
countVowels("Celebration") ➞ 5
countVowels("Palm") ➞ 1
countVowels("Prediction") ➞ 4
Notes:
a, e, i, o, u are considered vowels (not y).
All test cases are one word and only contain letters.


================= */
console.log(`Quastion Number 2 from Achievers IT (Finding the Vowels in given Inputs)`);

let countVowels = (str) => {
    let matchLeters = str.match(/[aeiou]/gi);
    return matchLeters ? matchLeters.length : 0;
}

console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));
console.log(countVowels("Prediction"));
/* ================== 
3.) Write a program to generate a 10 digit alpha-numeric coupon?

================== */

console.log(`Quastion Number 3 from Achievers IT (Genarating 10 Digit alpha numeric Copon)`);

function generateCoupon(length = 10) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
    let coupon = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        coupon += chars[randomIndex];
    }

    return coupon;
}

console.log(generateCoupon());

/* ====================== 

4.) Return the sum of all items in an array, where each item is
multiplied by its index (zero-based). For empty arrays,return 0.
Examples:
➔ indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
 // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
➔ indexMultiplier([-3, 0, 8, -6]) ➞ -2
 // (-3*0 + 0*1 + 8*2 + -6*3)
Notes:
All items in the array will be integers.

==================== */
console.log(`Quastion Number 4 from Achievers IT (Index Multiplier)`);

function indexMultiplier(arr) {
    return arr.reduce((sum, num, index) => sum + num * index, 0);
}

console.log(indexMultiplier([1, 2, 3, 4, 5])); // Output: 40
console.log(indexMultiplier([-3, 0, 8, -6]));  // Output: -2


/* ====================== 
5.) Write a program to capitalize the third word of a sentence and make it reverse
Input: "Rama went to forest"
Expected output: "Rama went TO forest".
Reverse: tserof OT tnew amaR
=======================  */
console.log(`Quastion Number 5 from Achievers IT (Capitalizing the Letters and reversing the string)`);



function modifySentence(sentence) {
    let words = sentence.split(" ");
    
    if (words.length >= 3) {
        words[2] = words[2].toUpperCase(); // Capitalizing the third word
    }

    let modifiedSentence = words.join(" ");
    let reversedSentence = modifiedSentence.split("").reverse().join("");

    return {
        modified: modifiedSentence,
        reversed: reversedSentence
    };
}

let result = modifySentence("Rama went to forest");
console.log("Modified:", result.modified);  // Output: "Rama went TO forest"
console.log("Reversed:", result.reversed);  // Output: "tserof OT tnew amaR"

/* ====================== 
6.) Remove duplicate number & make new array
Input: [1,1,2,8,5,8,6,2]
Expected Output: [1,2,8,5,6]

=====================  */
console.log(`Quastion Number 6 from Achievers IT (Simple Quastion Just remove the Duplicate numbers in Array using spread and New Keyword)`);

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Test case
console.log(removeDuplicates([1,1,2,8,5,8,6,2])); // Output: [1, 2, 8, 5, 6]



/* =====================   
7.) Write a function that takes an array of strings and returns an array with the length of each string.
Example:
Input : [“hello”, “world”] & Output = [5, 5]

=======================  */

console.log(`Quastion Number 7 from Achievers IT (Finding the length Each String)`);

function getStringLengths(arr) {
    return arr.map(str => str.length);
}

// Test case
console.log(getStringLengths(["hello", "world"])); // Output: [5, 5]


/* ============================= 
8.) Write a function that takes a number and returns true if it's even, and false if it's odd.
Example:
Input: 4 & Output = True
Input: 3 & Output = false

======================== */

console.log(`Quastion Number 8 from Achievers IT (Rememebering the Even and Odd Numbers)`);

function isEven(num) {
    return num % 2 === 0;
}

// Test cases
console.log(isEven(4)); // Output: true
console.log(isEven(3)); // Output: false

/* ====================  
9.) separate even and odd numbers in a given array
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9];
Expected output: [2,4,6,8], [1,3,5,7,9]

==================== */
console.log(`Quastion Number 9 from Achievers IT (Superate the Even and Odd Numbers in and Divide into also a arrays)`);

function separateEvenOdd(arr) {
    let evens = arr.filter(num => num % 2 === 0);
    let odds = arr.filter(num => num % 2 !== 0);
    
    return [evens, odds];
}

console.log(separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
// Output: [[2, 4, 6, 8], [1, 3, 5, 7, 9]]


/* ==================== 
10.) Write a function that takes an array of numbers and returns the sum of all the numbers.
Example:
Input: [1,2,3,4] & Output = 10

=================== */
console.log(`Quastion Number 10 from Achievers IT (Sum of Numbers )`);



function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


console.log(sumArray([1, 2, 3, 4])); // Output: 10
