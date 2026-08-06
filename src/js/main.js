// import '../css/main.css'

// import request from './request'
// import { createCountries } from './updateUI'
// import './filter'
// import './mode'

// const API = 'https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json'

// request(API).then((data) => {
//     createCountries(data)
// }).catch((err) => {
//     alert(err.message)
// })



import '../css/main.css'

import request from './request'
import { createCountries } from './updateUI'
import './filter'
import './mode'

const API = 'https://api.restcountries.com/countries/v5?limit=100&offset=0'
const API_KEY = 'rc_live_5fb28576f2f241298f16d43115854140'

request(API, {
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
}).then((data) => {
    console.log(data)
    createCountries(data.data.objects)
}).catch((err) => {
    alert(err.message)
})