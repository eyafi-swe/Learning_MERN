const url = 'https://eyafi.pythonanywhere.com/account/nidinfo/';

function loadNidInfo() {

    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json));
}

// function displayData(data){
//     console.log(data)
// }