//conditional statements
//if, if-else, else if ladder, switch

// let age = 12;
// if (age >= 18) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not eligible to vote");
// }

// let num1 = 15;
// let num2 = 10;
// if (num1 > num2) {
//   console.log("num1 is greater");
// } else {
//   console.log("num2 is greater");
// }

//logical operators
// && --> logical and
// || --> logical or
// !  --> logical not

//logical and

// let age = 15;
// let isVoterIDAvailable = true;
// if (age >= 18 && isVoterIDAvailable) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not eligible to vote");
// }

//logical or operator

// let isAadharAvailable = false;
// let isVoterIDAvailable = false;
// if (isAadharAvailable || isVoterIDAvailable) {
//   console.log("Eligible to get passport");
// } else {
//   console.log("Not eligible to get passport");
// }

// let num1 = 10;
// let num2 = 15;
// let num3 = 20;
//greatest of 3 numbers
// if (num1 > num2) {
//   if (num1 > num3) {
//     console.log("num1 is greater");
//   } else {
//     console.log("num3 is greater");
//   }
// } else {
//   if (num2 > num3) {
//     console.log("num2 is greater");
//   } else {
//     console.log("num3 is greater");
//   }
// }

// if (num1 > num2 && num1 > num3) {
//   console.log("num1 is greater");
// } else if (num2 > num1 && num2 > num3) {
//   console.log("num2 is greater");
// } else {
//   console.log("num3 is greater");
// }

//practice
// if (10) {
//   console.log("pavithra");
// }
// if (-10) {
//   console.log("pavithra");
// }
// if (0) {
//   console.log("pavithra");
// }
// if ("pavithra") {
//   console.log("pavithra");
// }
// if ("") {
//   console.log("pavithra");
// }
// if (null) {
//   console.log("pavithra");
// }
// if (undefined) {
//   console.log("pavithra");
// }
// if (NaN) {
//   console.log("pavithra");
// }

//###########################################################
//falsy values --> 0, false,' ', undefined, null,NaN.
//###########################################################

// console.log(1 > 2 > 3); //false--> 1>2 is false, then false value is 0, so it returs false
// console.log(3 > 2 > 1); //false--> 3>2 is True, then true value is 1, 1>1 is false so it returns false

//short circuiting
// let age = 20;
// if (age > 18 && console.log("pavithra")) {
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// }

// let age = 20;
// if (age > 18 || console.log("pavithra")) {
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// }

//logical Not !
//true-->false
//false-->true

// if (!10 > 5) {
//   console.log(10);
// } else {
//   console.log(5);
// }

// //practice
// console.log(!10, !"pavi"); //false
// console.log(!null, !0, !""); //true
