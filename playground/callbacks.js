setTimeout(() => { //This is asynchronous
    console.log('Two seconds are up') 
}, 2000)

const names = ['Efren', 'Felix', 'Cham']
const shortNames = names.filter((name) => {
    return name.length <= 4 //return names 4 or less characters
})

const geocode = (address, callback) => {
    setTimeout (() => {
        const data = {
            latitude: 0, 
            longitude: 0
        }

        callback(data)

    }, 2000) //TIMEOUT TIME = 2s
}

geocode('Philadelphia', (data) => {
    console.log(data)
})


//challenge
const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})


// original logging
// const data = geocode('Philadelphia')
// console.log(data)