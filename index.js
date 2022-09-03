// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<div class='title'> <h1>JS Learning</h1> </div>`;

let problems = [];

//01
// problems.push({
//   problem: '01-diagonal-difference.js',
// });

// import {
//   diagonalDifference,
//   runFunction,
// } from './hacker-rank-prepare/01-diagonal-difference.js';

// //runFunction();

// const arr = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12]
// ]

// const result = diagonalDifference(arr)
// console.log(result)

//02
// problems.push({
//   problem: '02-plus-minus.js',
// });

// import { plusMinus } from './hacker-rank-prepare/02-plus-minus.js';

// const arr = [-4, 3, -9, 0, 4, 1];
// // Sample output:
// //       0.500000
// //       0.333333
// //       0.166667

// plusMinus(arr);

//03
// problems.push({
//   problem: '03-stair-case.js',
// });

// import { staircase } from './hacker-rank-prepare/03-stair-case.js';

// staircase(4);

// staircase(6);

// let options = problems.map((value, index) => {
//   return `<option>${value.problem}</option>`;
// });

// const body = `     <div class='content'>
//                       <div class='information'>
//                         <label>Select problem: </label>
//                         <select id='problems-select'>
//                           ${options}
//                         </select>
//                       </div>
//                       <div class='result'>
//                         <section id='problems-section'>

//                         </section>
//                         <button>Watch</button>
//                       </div>
//                   </div>
// `;

// appDiv.innerHTML += body;

// fetch('./hacker-rank-prepare/03-stair-case.js')
//   .then(res => res.text())
//   .then(content => {
//     let lines = content.split(/\n/)
//     lines.forEach(lines => console.log(lines))
//   })

//04

import { miniMaxSum } from './hacker-rank-prepare/04-mini-max-sum.js';

// const arr = [1,3,5,7,9]
// miniMaxSum(arr)

// const arr1 = [1,2,3,4,5]
// miniMaxSum(arr1)

const arr2 = [7, 69, 2, 221, 8974];
miniMaxSum(arr2);
