// import loaderToggle from "./loader"

// const request = async (resurse) => {
//     loaderToggle(true)
//     const req = await fetch(resurse)

//     if(!req.ok){
//         throw new Error (`Something went wrong :(`)
//     }

//     const data = await req.json()
//     loaderToggle(false)
//     return data    
// }

// export default request


import loaderToggle from "./loader"

const request = async (resurse, options = {}) => {
    loaderToggle(true)
    const req = await fetch(resurse, options)

    if(!req.ok){
        throw new Error (`Something went wrong :(`)
    }

    const data = await req.json()
    loaderToggle(false)
    return data    
}

export default request