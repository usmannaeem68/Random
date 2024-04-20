"use strict";
// function getname(user_name :string){
//     console.log(user_name);
// }
// getname("Usman");
// let num1 =4;
// let num2 =6;
// let result = num1 +num2;
// console.log(result)
function add(num1, num2) {
    let result = num1 + num2;
    return result;
    // console.log(result)
}
let result = add(4, 5);
console.log(6 + add(4, 5));
// console.log(add(4,5))
// console.log(add(6,5))
// console.log(add(2,5))
// console.log(add(7,5))
// console.log(add(1,5))
// console.log(add(9,5))
function print() {
    return "Usman";
}
let myname = print();
console.log(myname);
function print2() {
    console.log("Usman");
}
print2();
function getTIme(hours, minutes) {
    if (!hours) {
        return `00:${minutes}`;
    }
    if (!minutes) {
        return `${hours}:00`;
    }
    return `${hours}:${minutes}`;
}
console.log(getTIme(5));
console.log(getTIme(0, 30));
console.log(getTIme(5, 30));
let arrowfunction_getTIme = (hours, minutes) => {
    if (!hours) {
        return `00:${minutes}`;
    }
    if (!minutes) {
        return `${hours}:00`;
    }
    return `${hours}:${minutes}`;
};
//Arrow Functions
let func = () => 30; //expression
let add_func = (num1, num2) => {
    return num1 + num2;
};
let add_func2 = (num1, num2) => num1 + num2;
//Array
let fruits = ["apple", "orange", "mango"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
let y = 0;
while (y < fruits.length) {
    console.log(fruits[y]);
    y++;
}
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
fruits.pop(); //remove last index
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
fruits.push("mango"); //add to last index
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
fruits.shift(); //remove first index
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
fruits.splice(2, 1, "Hello", "Usman"); //replace value of 2nd index ,remove 1st value and add "Usman" at last
console.log(fruits);
console.log(fruits.slice(0, 3)); //break array from 0 to 2 index
