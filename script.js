

  export function aufgabe01(args) {
    const input = args
    const result = []
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
   // Wenn das aktuelle Zeichen ein 'e' ist, hänge nichts an die
  if (currentElement === 'e') {
    result.push("")
    // Wenn das aktuelle Zeichen 'E' ist, hänge nichts an die
  }else if ( currentElement === 'E'){
   
  }else {
    result.push(currentElement)
  }
   
    }
    return result.join("")
  }


























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


