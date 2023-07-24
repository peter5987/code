//Using a while loop, generate an array containing 10 random numbers.
//Using a while loop, generate an array containing 10 random numbers of which all of odd numbers are in the front and all of the even numbers are at the end.

const ramdomnumber = []

let x = 0
while(x < 10){
    ramdomnumber.push( Math.floor(Math.random() *10 + 1))
    x = x + 1 
}
console.log (ramdomnumber)

const randomlist = []

let y = 0
while(y < 10){
    const num = Math.floor (Math.random()*10 ) + 1
    if ( num  % 2 == 0) {
    randomlist.push(num)
    }else{
            randomlist.unshift(num)
        }
        y = y + 1
}

console.log(randomlist)