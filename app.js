// MASALALAR
// 1-masala
// const word = "34567"
//   .split("")
//   .reverse()
//   .map((number) => {
//     return Number(number);
//   });
// console.log(word);

// // output [7,6,5,4,3]

// 2-masala

// == va === shart operatorlari va bular tenglikni ikkalar tomonini teng yoki teng emasligini tekshiradi. Lekin "==" 2 taligi faqatgina tenglikni tekshiradi, "===" 3 taligi type iga ham qarab tekshiradi.

// misol un.
// let a = 3;
// let b = "3";

// if (a === b) {
//   console.log(true);
// } else {
//   console.log(false); // Javob false
// }

// let a = 3;
// let b = "3";

// if (a == b) {
//   console.log(true);  // Javob true
// } else {
//   console.log(false);
// }

// 3-masala

// let son = 10;
// let arr = [];

// function recursiveFunction(son) {
//   arr.unshift(son);
//   son--;
//   if (1 <= son) {
//     recursiveFunction(son);
//   }

//   return arr;
// }

// console.log(recursiveFunction(son));

// 4-masala

// let umumiy = [];

// let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//   .filter((a) => a % 2 == 0)
//   .reduce((acc, curVal) => (acc += curVal), 0);
// umumiy.push(num1);
// let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//   .filter((a) => a % 2 == 1)
//   .reduce((acc, curVal) => (acc += curVal), 0);
// umumiy.push(num2);
// console.log(umumiy);

// 5-masala

// let word = `!Far!hod!!!!!!!`.split("!").join("");

// console.log(word);

// 6-masala

// function conCatting(arr1, arr2) {
//   return [].concat(arr1, arr2).reduce((acc, curVal) => {
//     return (acc += curVal);
//   });
// }
// console.log(conCatting([1, 2, 3], [4, 5, 6]));

// 7-masala

// function makeString(str) {
//   let cutLetter = str.split("");
//   cutLetter.shift();
//   cutLetter.pop();

//   return cutLetter.join("");
// }
// console.log(makeString("nnima buuuuu, nimasan sann"));

// 8-masala

// let arr = [5, 75, 2, 6, 6, 98, 2, 0];

// let newArr = [];
// arr.forEach((item) => newArr.unshift(item));

// console.log(newArr);

// 9-masala

// let stringNumber = "123045000";
// let counter = 0;

// let answer = stringNumber.split("").map((number) => Number(number));

// for (let i = answer.length - 1; i > 0; i--) {
//   if (answer[i] != 0) {
//     break;
//   }
//   counter++;
// }

// answer.pop(counter);

// console.log(answer);

// 10-masala

// let numbers = [2, 3, 4, 5, 6, 7, 8];

// let result = Math.min(...numbers);
// console.log(result ** 4);
