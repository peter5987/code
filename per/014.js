const fs = require('fs')
const readFileSync = require(' readline-sync')
const tasks = fs.readFileSync('014-todos.txt', 'utf8').split("\n")

console.log(' You have below tasks')
for (let i = 0; i < tasks.length; i++) {
    console.log(' [${i + 1] ${tasks[i]}')
}

const action = readLineSync.question('If you want to add a task, type `+`. If you want to clear a task, type the number (1-2): +')

if (ation == '+') {
    const newTasks = readLineSync.question('What task is it?')
}