
// Aufgabe 1
  export function aufgabe01(args) {
    const input = args
    const result = []
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
   // Wenn aktuelles Zeichen ein 'e' ist, hänge nichts an
  if (currentElement === 'e') {
    result.push("")
    // Wenn aktuelles Zeichen 'E' ist, hänge nichts an
  }else if ( currentElement === 'E'){
   
  }else {
    result.push(currentElement)
  }
   
    }
    return result.join("")
  }

// Aufgabe 2

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const capitalizedElement = currentElement.toUpperCase ()
    result.push (capitalizedElement)

  }
  return result.join("")
}

// Aufgabe 3
export function aufgabe03(args) {
  const input = args
  const result = []
let count = 0


  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //alle e sollen gelöscht werden
    
    if (currentElement === 'e'){
      count = count + 1
      // zählt alle kleinen e
    }
    else if (currentElement === 'E')
    count = count +1
  // zählt alle grossen E
  }
  return count
}

// Aufgabe 4
export function aufgabe04(args) {
  const input = args
  const result = []
let count = 0


  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === 'e'){
      count = count + 1
     
    }
    else if (currentElement.number)
    count = count +1
 
  }
  return count
}

// Aufgabe 5

export function aufgabe05(args) {
  const input = args
  const result = []
  let capitalLetters = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input [i]
    if (currentElement === ".") {

    } else if (currentElement === " ") {

    }
    else if (currentElement === currentElement.toUpperCase()) {

    }
  }

  if (capitalLetters> 0) {
    return true
  }else {
    return false
  }
  
}