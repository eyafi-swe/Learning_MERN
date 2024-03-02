console.log("First");
console.log("Second");
setTimeout(()=>{
    console.log("third");
},3000)
let x = 0;
const intervalid = setInterval(()=>{
    console.log(++x);
    if(x === 5){
        clearInterval(intervalid);
    }
},1000);
console.log("Fourth");