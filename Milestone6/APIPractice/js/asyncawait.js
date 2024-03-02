// // console.log('Fetching ..')

const loadCountries = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    try {
        const res = await fetch(url);
        console.log('Fethcing Data');
        const response = await res.json();
        console.log('Parsing json');
        displayCounties(response);
        console.log('after fetching');
        
    } catch (error) {
        console.log(error);
    }

}


const displayCounties = countries => {
    countries.forEach(country => {
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

console.log('Before calling')
loadCountries();
console.log('After Calling');