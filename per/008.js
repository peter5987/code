const friends = []

friends.push({
    "name": "John",
    "height" : 176,
    "hobbies": ["Football","Basketball"]
})
friends.push({
    "name": "Peter",
    "height": 180,
    "hobbies": ["basketball", "sleeping"]
})
friends.push({
    "name" : "Betty", 
    "height" : 170,
    "hebbies" : ["reading"]
})
friends.push({
    "name": "Mary",
    "height": 160, 
    "hobbies": ["Eating", "Sleeping", "Reading"]
})

console.log(friends)

let x = 0 

while(x < friends.length){
    if (friends[x].height > 170){
        console.log(friends[x].name)
    }
    x = x + 1 

}
