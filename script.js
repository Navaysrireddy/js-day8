// 1.	What is the result of the following code?
 	console.log(true && false);
// a)	true

// b)	false

// c)	undefined

// d)	null
// 2.	What does the following code output?
 	console.log(false || true);
// a)	true

// b)	false

// c)	undefined

// d)	null
// 3.	What is the value of result?
 	const result = !true;
console.log(result);
// a)	true

// b)	false

// c)	undefined

// d)	null
// 4.	What will be logged to the console?
 	console.log(10 > 5 && 3 < 4);
// a)	true

// b)	false

// c)	undefined

// d)	null
// 5.	What will the following code output?
 	console.log(5 === 5 || 5 > 10);
// a)	true

// b)	false

// c)	undefined

// d)	null
// 6.	What is the result of this code?
 	const x = false;
const y = true;
console.log(x && y || !x);
// a)	true

// b)	false

// c)	undefined

// d)	null
// 7.	What does this code evaluate to?
 	console.log(!!(5 > 3));
// a)	true

// b)	false

// c)	undefined

// d)	null
// 8.	What will result be?
 	const resultS = false || 0 || "hello";
console.log(resultS);
// a)	false

// b)	0

// c)	"hello"

// d)	undefined
// 9.	What will the following code return?
 	console.log(null && "JavaScript");
// a)	null

// b)	"JavaScript"

// c)	true

// d)	false
// 10.	What does this code output?
console.log(true || false && false);
// a)	true

// b)	false

// c)	undefined

// d)	null
// 11.	What is the result of the following expression?
console.log(!("hello" && 0));
// a)	true

// b)	false

// c)	null

// d)	undefined
// 12.	What will be logged?
console.log(10 || 0 && 5);
// a)	10

// b)	0

// c)	5

// d)	false
// 13.	What will result be?
const Result = "abc" && "def" || "";     
console.log(result);
// a)	"abc"

// b)	"def"

// c)	""

// d)	undefined
// 14.	What does this code evaluate to?
console.log(3 > 2 && 2 > 4);
// a)	true

// b)	false

// c)	undefined

// d)	null
// 15.	What will the following code return?
console.log(false || NaN || undefined);
// a)	false

// b)	NaN

// c)	undefined

// d)	null

// #scenario-based questions
// 1. Eligibility Check
// Write a condition to check if a student is eligible for a scholarship. The criteria are:
// - The student’s grade is A or B.
// - The student’s attendance is above 75%.
// Use a ternary operator to assign "Eligible" or "Not Eligible" to a variable.


let grade = 'A';
let attendance = 80;

let eligibility = (grade === 'A' || grade === 'B') && attendance > 75 ? "Eligible" : "Not Eligible";
console.log(eligibility);

________________________________________
// 2. Age Group Classification
// Classify a person based on their age:
// - If the age is less than 13, they are a “Child”.
// - If the age is between 13 and 19 (inclusive), they are a “Teenager”.
// - Otherwise, they are an “Adult”.
// Use nested ternary operators to determine the classification.
// _____

let age = 17;

let classification = age < 13 ? "Child" : (age >= 13 && age <= 19) ? "Teenager" : "Adult";
console.log(classification);
___________________________________
// 3. Login Status
// Check the login status of a user. A user is considered logged in if:
// - isLoggedIn is true.
// - Their session is active (sessionActive is true).
// Use a ternary operator to log "Welcome Back" if the user is logged in and "Please Log In" otherwise.
let isLoggedIn = true;
let sessionActive = true;

let message = (isLoggedIn && sessionActive) ? "Welcome Back" : "Please Log In";
console.log(message);

// ________________________________________
// 4. Grade Evaluation
// Assign a letter grade based on a student’s score:
// - Scores 90 and above: "A".
// - Scores between 80 and 89: "B".
// - Scores between 70 and 79: "C".
// - Scores below 70: "Fail".
// Use nested ternary operators to determine the grade.
let score = 85;

let Grade = score >= 90 ? "A" : (score >= 80 && score < 90) ? "B" : (score >= 70 && score < 80) ? "C" : "Fail";
console.log(Grade);

// ________________________________________
// 5. Product Discount Validation
// Determine the discount for a product based on the following criteria:
// - If the product price is greater than $100, the discount is 20%.
// - Otherwise, the discount is 10%.
// Use a ternary operator to set the discount percentage.

let price = 120;

let discount = price > 100 ? 20 : 10;
console.log(discount);

