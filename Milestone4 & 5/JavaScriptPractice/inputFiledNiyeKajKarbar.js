console.log("Hello");

document.getElementById('deleteConfirm').addEventListener('keyup',function(){
    const text = document.getElementById('deleteConfirm').value;
    if(text === "delete"){
        document.getElementById('deleteBtn').removeAttribute('disabled');
    }
    else{
        document.getElementById('deleteBtn').setAttribute('disabled',true);
    }
});

document.getElementById('deleteBtn').addEventListener('click',function(){
    document.getElementById('textToDelete').style.display = 'none';
    document.getElementById('deleteConfirm').value = ' ';
});