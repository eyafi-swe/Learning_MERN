const obj1 = {

    name:"Neo",
    age:15,
    saySomething: function(money){
        console.log(`hi I am ${this.name}, I am ${this.age} years old. Take ${money} taka.`);
    }
}

obj1.saySomething(100);

const obj2 = {
    name:"OKay Baby",
    age:16,
}

obj1.saySomething.call(obj2,10000); // .call method allows to use methods of other object in another object
obj1.saySomething.apply(obj2,[500]);

const okayBaby = obj1.saySomething.bind(obj2); // same thing different way
okayBaby(400);