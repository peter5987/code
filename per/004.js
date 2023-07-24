const r = Math.floor (Math.random()*70) + 1

console.log('Registration number:' + r) 
console.log('Row:' + Math.ceil(r/7))
console.log('Column:' + (((r - 1 ) & 7 ) +1 ) )