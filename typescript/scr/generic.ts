function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement<string>(["sailesh","ghimire"]);
console.log(el.toLowerCase())

const el2 = getFirstElement<number>([1, 2]);
