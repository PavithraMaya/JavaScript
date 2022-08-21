//string continuation

// let news = "Indians";
// console.log(news.slice(2, 5)); //starting number to ending number(-1)
// console.log(news.slice(1, 6));
// console.log(news.slice(6));
// console.log(news.slice(3));
// console.log(news.slice(9));
// console.log(news.slice(-5));
// console.log(news.slice(-6, -2));
// console.log(news.slice(-2, -6));
// console.log(news.slice(1, -2));
// console.log(news.slice(0, -1));

//substring
// let fname = "pavithra";
// console.log(fname.substring(0, 4));
// console.log(fname.substring(2, 6));
// console.log(fname.substring(2));

//substr
// let fname = "pavithra";
// console.log(fname.substr(0, 2));
// console.log(fname.substring(0, 2));
// console.log(fname.substr(1, 2));
// console.log(fname.substring(1, 2));

//split
// let news = "India is a good country";
// console.log(news.split(" "));
// console.log(news.split(""));
// console.log(news.split("i"));

// loops
// while loop
//for loop
// for of loop
// for in loop

// let num = 10;
// while (num > 0) {
//   console.log(num);
//   num -= 1;
// }

//descrement and increment
//pre and post
// let num = 10;
// console.log(num++, num);
// console.log(++num, num, num);
// console.log(num++ + ++num);
// console.log(num++ - ++num + num++ + ++num); // 10-12+12+14

// let num = 10;
// console.log(num--, num);
// console.log(--num, num);
// console.log(num++ - num-- + --num - ++num + --num + num-- - num++);

// for loop
// let num = 10;
// for (let i = 0; i <= num; i++) {
//   console.log(i);
// }

// while (false);
// {
//   console.log("pavi");
// }

//problems
//123 -> 1+2+3=6
//6472-> 6+4+7+2 =19

//questions
//fibonacci sequence
//prime nos
//reverse of a string
//leap year
//sum of digit
//palindrome MADAM->MADAM, RACECAR->RACECAR

// 1.fibonacci sequence

// 0 1 1 2 3 5 8 13 21 34 ...

// let nums = 10;
// let n1 = 0;
// let n2 = 1;

// console.log(n1);
// console.log(n2);

// for (let i = 0; i < nums; i++) {
//   let result = n1 + n2;
//   n1 = n2;
//   n2 = result;
//   console.log(result);
// }

// 2.prime nos
// let num = 20;

// function isPrimeOrNot(testNum) {
//   let isPrime = true;
//   for (let i = 2; i < testNum; i++) {
//     if (testNum % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   return isPrime;
// }
// console.log(isPrimeOrNot(4));

// let int_number = 254;
// let int_length = ("" + int_number).length;
// console.log(int_length);

let num = 6;
sum = 0;
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    sum += i;
  }
  return sum;
}
