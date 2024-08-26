'use strict'



function onGetCountryInfo() {
    const inputElement = document.querySelector('.txt-input')
    const country = inputElement.value
    console.log(country);
    if (country) {
        getCountry(country, renderInfo)
    }
}



function renderInfo(data) {
    console.log(data);

    const preElement = document.querySelector('.countryData')
    preElement.innerHTML =  JSON.stringify(data)
}

function getCountry(country, cb) {
    $.get(`https://restcountries.com/v3.1/name/${country}`, cb)
}
