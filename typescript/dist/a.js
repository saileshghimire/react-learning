"use strict";
function runAfter1s(fn) {
    setTimeout(fn, 1000);
}
runAfter1s(function () {
    console.log("hi there");
});
function islegal(user) {
    if (user.age > 18) {
        return true;
    }
    else
        return false;
}
