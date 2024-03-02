const url2 = 'https://eyafi.pythonanywhere.com/account/nidinfo/';
window.onload = showNidInfo;
function showNidInfo() {
    fetch(url2)
        .then(response => response.json())
        .then(data => displayData(data));
}

function displayData(data){
    const list = document.getElementById('nidNameList');
    for(const user of data){
        const lisItem = document.createElement('li');
        lisItem.innerText = user.name_of_national;
        list.appendChild(lisItem);
    }
}

