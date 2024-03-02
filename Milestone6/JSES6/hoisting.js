
console.log(sum(5,6)); // declaring function like this can be accessed before initialization
function sum(a,b){
    return a+b;
}

// hello(); // this can't be accessed before initialization
const hello = function(){
    console.log('function using variable');
}
hello();