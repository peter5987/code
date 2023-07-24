const numbers = `3 5 30 31 43 48
2 11 13 45 46 49
11 14 21 28 37 44
18 29 32 33 36 40
2 20 24 30 32 46
5 17 35 37 42 49
1 24 25 27 31 37
15 17 29 30 34 37
5 10 18 20 28 33
1 22 25 27 31 36`.split(`\n`).join(" ").split(" ")

const checkOfcurrent = {}
for (const number of numbers){
    if ( checkOfcurrent[number] == null){
        checkOfcurrent[number] = 0
    }
    checkOfcurrent[number] +=1
}

console.log('on9', checkOfcurrent)

let maxNumber;
let maxOccurence = 0;
for (const number in checkOfcurrent){
    if(checkOfcurrent[number] > maxOccurence){
        maxNumber = number;
        maxOccurence = checkOfcurrent[number];
    }
}

console.log( `${maxNumber} has shown the most. Its occurence is ${maxOccurence}` )
console.log(`checkOf`)
