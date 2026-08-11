import '../css/main.css'
import './mode'
import request from './request'
import {createCountrieInfo} from './updateUI'

const querySting = window.location.search 
const urlParams = new URLSearchParams(querySting)
const country = urlParams.get('country')
console.log(country)

const regEx = /^[A-Z]{3}$/.test(country)

const countryApi = regEx
    ? `https://api.restcountries.com/countries/v5/codes.alpha_3/${country}`
    : `https://api.restcountries.com/countries/v5?q=${country}`
    
const countryKey = `rc_live_5fb28576f2f241298f16d43115854140`

request(countryApi, {
    headers: {
        'Authorization': `Bearer ${countryKey}`
    }
}).then((data) => {
    const foundCountry = data.data.objects[0]
    createCountrieInfo(foundCountry)
}).catch((err) => {
    alert(err.message)
})
