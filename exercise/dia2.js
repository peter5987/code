function letterToNumber(letter) {
  return letter.charCodeAt(0) - 64
}

function numberToLetter(number) {
  return String.fromCharCode(number + 64)
}

function sizeToWidth(size) {
  return size * 2 - 1
}

function reverse(string) {
  let result = ''
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i]
  }
  return result
}

function printPattern(letter) {
  console.log('letter:', letter)

  let size = letterToNumber(letter)
  console.log('size:', size)

  let width = sizeToWidth(size)
  console.log('width:', width)

  if (letter == 'A') {
    console.log('A')
    return
  }

  let spaceChar = '·'

  let spaceA = size - 1
  let lineA = spaceChar.repeat(spaceA) + 'A' + spaceChar.repeat(spaceA)
  console.log(lineA)

  // increasing
  for (let i = 2; i <= size; i++) {
    let line = ''
    line += spaceChar.repeat(size - i)
    line += numberToLetter(i)
    line += spaceChar.repeat(size - line.length - 1)
    line = line + spaceChar + reverse(line)
  }

  // decreasing
  for (let i = size - 1; i > 1; i--) {
    let line = ''
    line += spaceChar.repeat(size - i)
    line += numberToLetter(i)
    line += spaceChar.repeat(size - line.length - 1)
    line = line + spaceChar + reverse(line)
    console.log(line)
  }

  console.log(lineA)
}

/* 1x1 
A
*/
printPattern('A')

/* 3x3
 A 
B B
 A 
*/
printPattern('B')

/* 5x5
  A  
 B B 
C   C
 B B 
  A  
*/
printPattern('C')
printPattern('E')

printPattern('Z')