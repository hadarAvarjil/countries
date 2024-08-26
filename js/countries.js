'use strict'

function onGetCountryInfo() {
    const inputElement = document.querySelector('.txt-input')
    const country = inputElement.value
    console.log(country);
    if (country) {
        getCountryByName(country, renderInfo)
    }
}

function renderInfo(data) {
    const preElement = document.querySelector('.countryData')
    preElement.innerHTML = JSON.stringify(data)
}

