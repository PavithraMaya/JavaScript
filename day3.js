//comparison operators
// let a = 10;
// let b = 15;
// console.log(a == b);

// let a = 10;
// let b = "10";
// console.log(a == b); // ==checks only value but not datatype
// console.log(a === b); // ===checks values and datatype

// let a = 10;
// let b = 10;
// console.log(a != b);
// console.log(a !== b);

// console.log(10<5)
// console.log(10>5)
// console.log(10<=5)
// console.log(10>=5)

//ternary operator -> condition ? true statement : false statement

// 1 > 5 ? console.log("greater") : console.log("smaller");

//string

// let firstName = "Pavithra";
// let lastName = "sakthivel";
// console.log(firstName + " " + lastName);

// 'Pavithra' is a good girl
// console.log("'" + firstName + "'" + " is a good girl");

//"Pavitha" is a good girl
// console.log('"' + firstName + '"' + " is a good girl");

//string template literals ---> it is used for multiple lines and easy concatenation
// console.log(`${firstName} is a "good" 'girl'`);
// console.log(
//   `${firstName} is a "good" 'girl'. ${firstName}'s lastname is ${lastName}`
// );

//weird javaScript things
console.log(5 + 5); //10
console.log(5 + "5"); //55
console.log(5 + 5 + "5"); //105
console.log("5" + 5); //55
console.log("5" + 5 + 5); //555
console.log("5" + "5"); //55
console.log("ab" + 5); //ab5
console.log("ab" + "5"); //NaN

console.log(10 - 5); //5
console.log("10" - 5); //5
console.log(10 - "5"); //5
console.log("10" - "5"); //5
console.log("ab" - "5"); //NAN
console.log(2 + 4 - "10" + 10);
