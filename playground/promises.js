const doworkPromises = new Promise((resolve, reject) => {
    // resolve([1,2,3])
    reject('Things went Wrong')
}, 2000)

doworkPromises.then((result) => {
    console.log('Seccess! ' , result)
}).catch((error) => {
    console.log( "Error! " ,error)
})