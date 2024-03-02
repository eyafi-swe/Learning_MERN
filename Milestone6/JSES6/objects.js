const bottle = {
    clor:'Blue',
    price:100,
    isCleaned: true,
    capacity: 1,
}

const keys = Object.keys(bottle); // returns all keys
const values = Object.values(bottle); // returns all values
const pair = Object.entries(bottle); // returns array of pairs as array

// console.log(bottle);
delete bottle.isCleaned; //delete a property
Object.seal(bottle) // prevents deleting and adding any property but allows modifying values of any property

Object.freeze(bottle);// prevents deleting and adding any property also prevents modifying values of any property
delete bottle.capacity
// console.log(bottle);

// for of loop doesn't work in objects, only works in arrays
// so here comes for in loop for objects

for(const key in bottle){
    // console.log(key, bottle[key]);
}

//advance way

for(const [key,value] of Object.entries(bottle)){ //Object.entries returns an array of key and values paired in an array
    console.log(key,value);
}