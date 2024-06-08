// function sumnumber(a:number,b:number):number {
//     return a+b;
    
// }

// passing a function as paramter.
function runAfter1s(fn: () => void){
    setTimeout(fn,1000);
}

runAfter1s(function(){
    console.log("hi there");
    
});

interface User {
    name:"sailesh",
    lastName:"Ghimire",
    age:21
}

function islegal(user:User){
    if (user.age>18){
        return true;

    }
    else return false
}

