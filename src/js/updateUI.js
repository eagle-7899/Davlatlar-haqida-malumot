// const cardsEl = document.querySelector('.cards')

// export const createCountries = (countries) => {
//     cardsEl.innerHTML = ''
//     countries.forEach((country) => {
//         const commonName = country.names.common
//         const region = country.region
//         const capital = country.capital[0].name ? country.capital[0].name : "No capital"


//         //li
//         const li = document.createElement('li')
//         li.classList.add('cards__item')

//         li.innerHTML = `<a href="./about.html?country=${commonName}">
//                         <img src="./images/jpg/algeria-flag.jpg" alt="algeria-flag" width="267" height="160">
//                         <div class="cards__item-inner">
//                             <h3 class="cards__title">${commonName}</h3>
//                             <p class="population">Population: <span>40,400,000</span></p>
//                             <p class="region">Region: <span>${region}</span></p>
//                             <p class="capital">Capital: <span>${capital}</span></p>
//                         </div>
//                        </a>`

//         //ul
        
//         cardsEl.appendChild(li)
//     })  
// }


// //About ui

// export const createCountrieInfo = (country) => {
//     console.log(country)
// }


const cardsEl = document.querySelector('.cards')

export const createCountries = (countries) => {
    cardsEl.innerHTML = ''
    countries.forEach((country) => {
        const commonName = country.names.common
        const region = country.continents ? country.continents[0] : "No region"
        const capital = country.capitals && country.capitals[0] ? country.capitals[0].name : "No capital"
        const population = country.population
        const flags = country.flag.url_svg



        //li
        const li = document.createElement('li')
        li.classList.add('cards__item')

        li.innerHTML = `<a href="./about.html?country=${commonName}">
                        <img src="${flags}" alt="algeria-flag" width="267" height="160">
                        <div class="cards__item-inner">
                            <h3 class="cards__title">${commonName}</h3>
                            <p class="population">Population: <span>${population}</span></p>
                            <p class="region">Region: <span>${region}</span></p>
                            <p class="capital">Capital: <span>${capital}</span></p>
                        </div>
                       </a>`

        //ul
        
        cardsEl.appendChild(li)
    })  
}


//About ui

export const createCountrieInfo = (country) => {
    console.log(country)
}