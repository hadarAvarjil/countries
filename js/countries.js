'use strict'



function onGetCountryInfo() {
    const inputElement = document.querySelector('.txt-input')
    const country = inputElement.value
    if (country) {
        getCountry(country, renderInfo)
    }
}



function renderInfo(data) {
    console.log(data[0].name.common);
    
    console.log(data);
    const titileElement = document.querySelector('.country-name')
    titileElement.innerHTML =  data[0].name.common

    const imgElement = document.querySelector('.country-flag')
    imgElement.src =   data[0].flags.png
    
    const populaionField = document.querySelector('p.populaion')
    populaionField.innerHTML = `The Country's population is `+ data[0].population + ' pepole.'

    const areaField = document.querySelector('p.area')
    areaField.innerHTML =  `The Country's area is `+ data[0].area+ ' km.'


    // <h2 class="country-name"></h2>
    // <img>
    // <p class="populaion"></p>
    // <p class="area"></p>



}

function getCountry(country, cb) {
    $.get(`https://restcountries.com/v3.1/name/${country}`, cb)
}
