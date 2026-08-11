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

    const  cuntryInfoEl = document.querySelector('.country-info')
    export const createCountrieInfo = (country) => {
        const {population, borders, capitals, flag, names, region, tld, currencies, languages} = country
        const nativeName = names.native ?  Object.values(names.native)[0].official: "N/A"
        const currency = currencies[0].code
        const language = languages[0].name 
        const flags = flag.url_svg
        console.log(country)
        console.log(nativeName) 
        console.log(currency)
        console.log(language)
        console.log(flags)


        cuntryInfoEl.innerHTML = `
        
          <img
            class="country-info__img"
            src="${flags}"
            alt="germany-flag"
            width="560"
            height="400"
          />
          <div class="country-info__content">
            <h2>${names.common}</h2>
            <ul class="country-info__list">
              <li class="country-info__item">
                <p class="name">
                  Native Name:
                  <span>${nativeName}</span>
                </p>
                <p class="population">
                  Population:
                  <span>${population}</span>
                </p>
                <p class="region">
                  Region:
                  <span>${region}</span>
                </p>
                <p class="sub-region">
                  Sub Region:
                  <span>Western Europe</span>
                </p>
                <p class="capital">
                  Capital:
                  <span>${capitals[0].name}</span>
                </p>
              </li>
              <li class="country-info__item">
                <p class="name">
                  Top Level Domain:
                  <span>${tld}</span>
                </p>
                <p class="population">
                  Currencies:
                  <span>${currency}</span>
                </p>
                <p class="region">
                  Languages:
                  <span>${language}</span>
                </p>
              </li>
            </ul>

            <div class="country-info__borders">
            <h3>Border Countries:</h3>
            ${borders && borders.length > 0 
            ? borders.map((border) => `<a href="./about.html?country=${border}">${border}</a>`).join('') 
            : `<a href="./index.html">No borders</a>`}
            </div>
             
        
        `
        console.log(borders)
    }
