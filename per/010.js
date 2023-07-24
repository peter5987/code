const date = [
    {"date": "1 Jan", "minTemperature": 11, "maxTemperature": 18},
    {"date": "2 Jan", "minTemperature": 10, "maxTemperature": 17},
    {"date": "3 Jan", "minTemperature": 12, "maxTemperature": 17},
    {"date": "4 Jan", "minTemperature": 14, "maxTemperature": 19},
    {"date": "5 Jan", "minTemperature": 16, "maxTemperature": 21},
    {"date": "6 Jan", "minTemperature": 17, "maxTemperature": 21},
    {"date": "7 Jan", "minTemperature": 18, "maxTemperature": 22},
  ]

 const sortingdate = date.slice()

  date.sort(function(tempA, tempB) {
   return tempB.minTemperature - tempA.minTemperature;
 })

 console.log(date)

console.log(date.map(function( temp ){
    return temp.date;
}))

console.log(date.filter(function(temp){
    return temp.maxTemperature  > 20 
}).map(function(temp){
    return temp.date
}))

console.log(date.reduce(function(previous, current){
    if ( previous.minTemperature > current.minTemperature){
        return current;
    }else { 
        return previous;
    }
},{date : 'No Date' , minTemperature : 999 }).date)