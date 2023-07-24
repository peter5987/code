function range(num) {
    let x = 0
    let arr = []
    while (x < num){
        arr.push(x)
        x = x + 1
    } 
    return arr
}

console.log(range(10))
console.log(range(5))

function bonusCalculator(year, performace, salary){
    if( year >= 5 && performace){
        return salary * 2;
    }
    if(year >= 1){
        return salary * 1; 
    }
    return 0;
}

console.log(bonusCalculator(6,false, 10000))
console.log(bonusCalculator(5,true, 40000))
console.log(bonusCalculator(3,true, 80000))
console.log(bonusCalculator(7,true, 70000))
console.log(bonusCalculator(0.5,true, 20000))
