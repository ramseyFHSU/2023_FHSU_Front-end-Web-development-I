/* 
0 - jan 
1 - feb
2 - mar
3 - april
4 - may
*/

const months = ["jan", "mar", "april", "may", "jan"];

console.log(months);

months.splice(1, 0, "feb");

console.log(months);

months.splice(4, 1, "may");

console.log(months.slice(2));
console.log(months.slice(1, 4));

months.reverse();

console.log(months.indexOf("mar"));
console.log(months.indexOf("jan"));
console.log(months.lastIndexOf("jan"));

const numbers = [12, 44, 3, 9, 19, 234, 1];
console.log(months.sort());

console.log(
  numbers.sort((a, b) => {
    a - b;
  })
);

console.log(months.join());
console.log(months.join(" "));
console.log(months.join(":"));

// const newArray = [months, numbers];
// console.log(newArray);

// let newArray2 = [...months, ...numbers];

const newMonths = months;
console.log(months);
console.log(newMonths);

newMonths[4] = "june";
console.log(months);
console.log(newMonths);

const newMonths2 = [...months];

const string = "helloWorld!";
const stringArr = [...string];
console.log(stringArr);

// Looping
for (i = 0; i < months.length; i++) {
  console.log(months[i]);
}

// foreach
months.forEach((item, index) => {
  console.log(`index of ${item} is ${index}`);
});

let x = numbers.forEach((item) => item * 3);
console.log(x); // This will log 'undefined' because forEach does not return a value.

// map
let y = numbers.map((item) => item * 3).sort();
console.log(y); // This will log the new array created by map.
