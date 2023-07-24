let x = 10
while(x >= 0){
    console.log(x)
    x = x - 1
}

let a = 0
while (a < 5) {
    let star = ' '
    let c = 0
while(c < a){
    star = star + ' '
    c = c + 1
}
    let b = 5 - a
    while (b > 0) {
        star = star + '*'
    b = b - 1
    }
    console.log(star)
    a= a + 1
}

