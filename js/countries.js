'use strict'

function onGetCountryInfo() {
    adjustDisplay('loader')
    const inputElement = document.querySelector('.txt-input')
    const country = inputElement.value
    if (country) {
        getCountryByName(country, renderInfo)

    }
}

function renderInfo(data) {
    adjustDisplay('results')
    const titileElement = document.querySelector('.country-name')
    titileElement.innerHTML = data[0].name.common

    const imgElement = document.querySelector('.country-flag')
    imgElement.src = data[0].flags.png

    const populaionField = document.querySelector('p.populaion')
    populaionField.innerHTML = `The Country's population is ` + data[0].population + ' pepole.'

    const areaField = document.querySelector('p.area')
    areaField.innerHTML = `The Country's area is ` + data[0].area + ' km.'

}

function onClearCache() {
    clearCache()
}

function adjustDisplay(status) {
    const elData = document.querySelector('.country-details-container')
    const elLoader = document.querySelector('.loader')

    elData.classList.add('hidden')
    elLoader.classList.add('hidden')

    switch (status) {
        case 'loader':
            elLoader.classList.remove('hidden')
            break

        case 'results':
            elData.classList.remove('hidden')
            break
    }
}

function handleSubmit(event) {
    event.preventDefault()
    const inputElement = document.querySelector('.txt-input')
    const country = inputElement.value
    if (country) {
        getCountryByName(country, renderInfo)

    }
}