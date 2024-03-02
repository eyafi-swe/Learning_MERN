let me = {
    name:'Neo',
    age:23,
    height:5.11,
    hobby:'Programing',
};

for(let key in me){
    let value = me[key];
    console.log(key,value);
}

//alternate way

// let keys = Object.keys(me);
// for(let i=0;i<keys.length;i++){
//     let property = keys[i];
//     let value = me[property];
//     console.log(property,value);
    
// }