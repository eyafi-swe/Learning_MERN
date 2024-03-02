function okay(){
    const x = 1;
    function insideOkay(){
        let y = x + 1;
        return y;
    }
    return insideOkay()
}

console.log(okay());

function init(){
    const name = 'Neo';
    let x = 1;
    return function(){
        return `${name} is cool ${x++}`;
    }
}
const init1 = init();
console.log(init1())
console.log(init1())
console.log(init1())
console.log(init1())

const init2 = init();

console.log(init2())