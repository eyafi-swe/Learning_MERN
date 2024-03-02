const testArrowFunction = (a,b) =>{
    const sum = a+b;
    return sum;
}
//console.log(testArrowFunction(5,6));


// default parameter value for not provided value
const sum = (a,b=0)=>{
    const sum = a+b;
    return sum;
}

//console.log(sum(10)); 



const arr = [1,2,3,4,5];

//copy that array not to modify for future
const arr2 = [...arr]; //... use na korle arr change er sathe sathe duitai change hoye jabe;
//console.log(arr2);
//using ... for array copy or fuinding max/min is called array spreading

const max = Math.max(...arr); // kono array er max/min ber korte ... use korte hbe. cause Math.max() function kono number ney arguement e.
//console.log(max)



const student = {
    name:'Neo',
    age:18,
    class:'xi',
    address:{city:'dhaka',road:7,building:'skyscaper'},
}
const address = student.address.city?.apartment; // use ? mark if you the property doesn't exist to escape error
console.log(address);

const age = student.age; //traditional way
// console.log(`Age of student object ${age}`);
const {name} = student; //kono object er ekta ba duita value kono variable e nite hole variable declare korte hbe object er moto then = object er name diye dilei hbe
// this is called object destructuring
//console.log(name);

const numbers = [1,2,3,4]
const [a,b] = numbers; // this is array destructuring.
//console.log(a,b);

