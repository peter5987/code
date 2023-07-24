//const readlineSync = require('readline-sync')

//const name = readlineSync.question('What is your name?')
//console.log(name)

//const colors =['blue' , 'yellow', 'black', 'white']
//const facouriteColor = readlineSync.keyInSelect(colors, 'What is your favourite color?')
//console.log('Oops, your favourite color is ' + colors[facouriteColor])

//const weight = readlineSync.question('What is your weight?' )
//const height = readlineSync.question('How tall are you? ')

//console.log( parseInt(weight) / Math.pow(parseFloa
const readlineSync = require('readline-sync')
const add = require('date-fns/add')
 
console.log(add(new Date(), { days: 100}))