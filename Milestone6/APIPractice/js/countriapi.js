// console.log('Fetching countries..')

const loadCountries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    console.log('Fetching data');
    fetch(url)
        .then(response => response.json())
        .then(data => displayCounties(data));
    console.log('After Fetching..');
}


const displayCounties = countries =>{
    countries.forEach(country =>{
        const countryList = document.getElementById('countries');
        const newItem = document.createElement('div');
        newItem.innerHTML = `
            <h3>Name: ${country.name.common} </h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'} </p>
        `;
        countryList.appendChild(newItem);
    })
    console.log('Done..')
}

console.log('Before calling..')
loadCountries();

console.log('After Calling..');