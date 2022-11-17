//Closure in JavaScript

//Question 3 - Time Optimization with Closures.

// With closures - Check for the logged time output.
// function find() {
//   const arr = [];
//   for (let i = 0; i < 1000000; i++) {
//     arr[i] = i * i;
//   }
//   return function (index) {
//     console.log(arr[index]);
//   };
// }

// const closure = find();
// console.time("6");
// closure(6); //36
// console.timeEnd("6"); // 6: 0.175048828125 ms
// closure(12); //144
// console.timeEnd("12"); // 12: 0.100830078125 ms

// Without closures - Check for the logged time output.
// function find(index) {
//   const arr = [];
//   for (let i = 0; i < 1000000; i++) {
//     arr[i] = i * i;
//   }
//   console.log(arr[index]);
// }

// console.time("6");
// find(6); //36
// console.timeEnd("6"); //6: 31.614990234375 ms
// console.time("12");
// find(12); //144
// console.timeEnd("12"); //12: 25.547119140625 ms

/* Correct Output
These time stamp values could change in every run.
 */

// //Question 2 - Write a function that would allow you to do this.

// function createBase(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// var addsix = createBase(6);
// console.log(addsix(10)); // returns 16
// console.log(addsix(21)); // returns 27

// /* Correct Output
// 16
// 27
//  */

// //Question 1 - What will be logged to console?

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1; //Shadowing
//     console.log(count);
//   } // block scope of let ends here.
//   console.log(count);
// })();

// /* Correct Output
// 1
// 0
//  */

//// setTimeout(
//   () => (document.getElementById("text").innerHTML = "This is new testing..."),
//   3000
// );
