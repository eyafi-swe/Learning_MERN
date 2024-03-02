function makeRed(){
    document.body.style.backgroundColor = "Red";
}

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue; //don't call function like makeBlue() 

function makeBlue(){
    document.body.style.backgroundColor = "Blue";
}

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);
function makePink(){
    document.body.style.backgroundColor = 'Pink';
}

const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor = 'Green';
});

// important method
document.getElementById('make-cyan').addEventListener('click', function (){
    document.body.style.backgroundColor = 'Cyan';
});