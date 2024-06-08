"use strict";
function identity(arg) {
    return arg;
}
let output1 = identity("myString");
let output2 = identity(100);
function getFirstElement(arr) {
    return arr[0];
}
const el = getFirstElement(["sailesh", "ghimire"]);
console.log(el.toLowerCase());
const el2 = getFirstElement([1, 2]);
