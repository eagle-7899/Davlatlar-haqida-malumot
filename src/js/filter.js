const searchFormEl = document.querySelector(`.search`)

searchFormEl.search.addEventListener('input', () => {
    const searchValue = searchFormEl.search.value.toLowerCase()
    const cardsIteam = document.querySelectorAll('.cards__item')
    const  cardsTitle = document.querySelectorAll('.cards__title')

    cardsTitle.forEach((title, i) => {
        if(title.textContent.toLowerCase().includes(searchValue)) {
            cardsIteam[i].style.display = 'block'
        }else{
            cardsIteam[i].style.display = 'none'
        }
    })
})


// filtrlash

// const searchSelect = document.querySelectorAll('.search__select-list li')
// const searchSelectSpan = document.querySelector('.search__select span')

// import {createCountries} from './updateUI'
// import request from './request'

// searchSelect.forEach((li) => {
//     li.addEventListener('click', (e) => {
//         searchSelectSpan.textContent = li.textContent
//         let filterApi

//         if(li.textContent == 'All'){
//             filterApi = ''
//         }else {
//             filterapi = `.............${li.textContent}`
//         }


//         request(filterApi).then((data) => {
//             createCountries(data)
//         }).catch((err) => {
//             alert(err.message)
//         })
//     })
// })