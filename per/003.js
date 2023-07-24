const a1 = 63
const s1 = 63 % 60
const m1 = (a1-s1) / 60

console.log(m1 +'m' + s1 + 's')

const time = 27369
const s2 = time % 60    
const m2 = (time - s2) /60
const h2 = (m2 - m2 % 60 )/60
console.log (s2)
console.log(h2 + 'h' + m2 % 60 + 'm' + s2 +'s')