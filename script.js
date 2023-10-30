

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


export function aufgabe03(args) {
  const input = args
  const result = []



  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //alle e sollen gelöscht werden
    if (currentElement === 'e'){
      result.push (currentElement)
    }

  }
  return result.join("")
}