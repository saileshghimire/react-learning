"use strict";
// function sumnumber(a:number,b:number):number {
//     return a+b;
// }
// passing a function as paramter.
function runAfter1s(fn) {
    setTimeout(fn, 1000);
}
runAfter1s(function () {
    console.log("hi there");
});
