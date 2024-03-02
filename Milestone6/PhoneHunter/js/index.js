console.log('Connectin 200');

const delay = ms => new Promise(res => setTimeout(res, ms));


const loadPhones = async (searchText) => {
    toggleSpinner(true);
    await delay(5000); 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const response = await fetch(url);
    const data = await response.json();
    displayPhones(data.data);
}


const displayPhones = data => {
    //console.log(data);
    const phoneContainer = document.getElementById('phone-container');
    if (data.length === 0) {
        console.log('Mobile nai');
        const mobileNai = document.getElementById('mobile-nai');
        mobileNai.classList.remove('d-none');
    }
    else {
        console.log('Mobile ache');
        const mobileNai = document.getElementById('mobile-nai');
        mobileNai.classList.add('d-none');
    }
    phoneContainer.innerHTML = ``;
    data = data.slice(0,9);
    data.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList.add('col');
        phoneCard.innerHTML = `
            <div class="card mb-3" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h6 class="card-title">${phone.phone_name}</h6>
                        <p class="fw-bold">Brand: ${phone.brand}</p>
        
                    </div>
                </div>
            </div>
        </div>
    `
        phoneContainer.appendChild(phoneCard);
    });

    toggleSpinner(false);
}

document.getElementById('search-btn').addEventListener('click',()=>{
    // toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if(searchText === ''){
        alert("Search koren vai")
        return;
    }
    loadPhones(searchText);

})


const toggleSpinner = isLoading =>{
    const spinner = document.getElementById('spinner');
    if(isLoading){
        spinner.classList.remove('d-none');
    }
    else{
        spinner.classList.add('d-none');
    }
}



loadPhones('iPhone');