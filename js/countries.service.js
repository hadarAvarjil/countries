'use strict'

let gCountries = loadFromStorage('countries') || {}

function getCountryByName(name, cb) {
    if (gCountries[name]) {
        cb(gCountries[name])
        return
    }
    const url = `https://restcountries.com/v3.1/name/${name}`
    $.get(url, rawData => {
        if (rawData.length === 0) return cb(null)

        const data = rawData
        gCountries[name] = rawData
        saveToStorage('countries', gCountries)
        cb(data)

    })


}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}