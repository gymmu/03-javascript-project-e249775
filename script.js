
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
    const capitalizedElement = currentElement.toUpperCase () // schreibt Buchstaben gross
    result.push (capitalizedElement) // schreibt die grossbuschstaben in den Output

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
  const input = args;
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    
    if (currentElement === ' ') { // wenn das element ein Leerezeichen ist, wird der Zähler um eins erhöht.
      count = count + 1;
    }
  }
  count = count + 1; // am Ende wird der Zähler noch um eins erhöht, damit das letze Wort auch gezählt wird
  
  return count;
}

// Aufgabe 5

export function aufgabe05(args) {
  const input = args
  const result = []
  let capitalLetters = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input [i]
    if (currentElement === ".") { // erkennt Punkte

    } else if (currentElement === " ") { // erkennt Leerzeichen

    }
    else if (currentElement !== currentElement.toLowerCase()) { // erkennt gross und kleinbuchstaben
      capitalLetters++
    }
  }

  if (capitalLetters> 0) { // setzt nur die Grossbuschtaben in den Output
    return true
  }else {
    return false
  }
  
}

// Aufgabe 6

export function aufgabe06(args) {
  const input = args; //Diese Aufgabe soll testen, ob in der Eingabe ein Sonderzeichen vorkommt.

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i] ;
  const ascii = currentElement.charCodeAt(0)

  if (65 <= ascii && ascii <= 90) {
    //Prüft, ob es sich hier um einen Grossbuchstaben handelt.
  } else if (97 <= ascii && ascii <=122) {
    //Prüft, ob es sich hier um einen Kleinbuchstaben handelt.
  } else if (currentElement === ' ') {
  }else {
    return true
  }
}
return false
}




 // Aufgabe 09

export function aufgabe09 (args) {
  const input = args
  let len = 0 // setzt den Zähler auf Null
  for (let i = 0; i < input.length; i++) {
    len++ // erhöht den Zähler jeweils
  }
  if (len === 6) { // falls die Länge 6 beträgt, soll er true antworten
  return true
  } else{ // wenn die Länge nicht 6 beträgt, antwortet er false
    return false
  }

 
}



// Aufgabe 11
export function aufgabe11(args) {
  const input = args
  const result = []
  let ascii = null

  if ( input.length > 1) { // Funktionswächter
    return null
  }

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    ascii = currentElement.charCodeAt(0)
    return ascii
  }
  return null
}




 // Aufgabe 12

 export function aufgabe12 (args) {
  const input = args

   for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') { // erkennt e
      return i // bricht die Funktion ab, wenn er e enkennt
    }
  }

  return -1 // gibt null zurück, wenn er keine e im Input findet
 } 



  // Aufgabe 13
  export function aufgabe13 (args) {
    const input = args
    const result = []
    let pos = -1 // zählt die Positionen
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
     if (currentElement === 'e') {
      pos = i
     }
    }
    return pos // gibt die Position zurück, wenn kein e vorkommt
  }



 // Aufgabe 14
 export function aufgabe14 (args) {
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {// erkennt e
      count = count + 1 // wenn es ein e ist, wird er zähler um eins erhöht
      if (count === 3){
        return i
      }
    }
  }
return -1
} 
  

// Aufgabe 7

export function aufgabe07(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement == 'u') { // erkennt u
      if (input[i+1] === 'n') { // erkennet ein n wenn es auf das u folgt
        if (input[i+2] === 'd') { // erkennt das d wenn es auf das u und n folgt
          return true // wenn das alles zutrifft, ist es true
        }
      }
    }
    if (currentElement === 'U') { // erkennt u
      if (input[i+1] === 'n') { // erkennet ein n wenn es auf das u folgt
        if (input[i+2] === 'd') { // erkennt das d wenn es auf das u und n folgt
          return true// wenn das alles zutrifft, ist es true
        }
      }
    }
    if (currentElement === 'U') { // erkennt u
      if (input[i+1] === 'n') { // erkennet ein n wenn es auf das u folgt
        if (input[i+2] === 'd') { // erkennt das d wenn es auf das u und n folgt
          return false // wenn das alles zutrifft, ist es true
        }
      }
    } 
  }
  return false // wennn nicht ist es false
}
  
// Aufgabe 20

export function aufgabe20 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === '.') { // erkennt punkt
      if (input[i+1] === ' ') { // erkennt einen leerschlag wenn er auf den punkt folgt
          return true // wenn das zutrifft, gibt er true zurück
        }
      }
    } 
  return false // wenn nicht sagt er false
  }
  
   // Aufgabe 15

  export function aufgabe15 (args) {
    const input = args
    const result = []
  for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
  if (currentElement === " ") { // erkennt einen leerschlag
    return result.join("")
  }
  result.push(currentElement)
    }
  return result.join("")
   
  }

  // Aufgabe 19

  export function aufgabe19 (args) {
    const input = args
    const result = []
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      //zu dem Element wird das gleiche Element nochmals angesetzt.
      result.push(currentElement + currentElement )
    }
   
    return result.join("")
  }

  //Aufgabe 22

  export function aufgabe22 (args) {
    const input = args
    const result = []
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
    }
    if (i === 'k') {
    return true
    }
  }

  //Aufgabe 26

export function aufgabe26 (args) {
const list = args.split("")  // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i+1]
  if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
    const tmp = list[i+1]
    list[i+1] = list[i]
    list[i] = tmp
    i = 0 // starte von vorne wenn etwas vertauscht wurde.
  }
}
const result = list.join("")
return result
}

// Aufgabe 27

export function aufgabe27 (args) {
  const input = args
  const result = []
  //falls es keine Eingabe hat, wird es direkt zurückgegeben.
  if (input.length===0){return false}
  for (let i = 0; i < input.length; i++) {
   
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (48 <= ascii && ascii <= 57){
 
  }
else  return false
}
return true
}
 
// Aufgabe 8

export function aufgabe08 (args) {
  const input = args
  const result = []
 
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
     if (currentElement === 'e') {
  result.push('3')
  }else{
    result.push(currentElement)
  }
  }
  return result.join("")
}

  // Aufgabe 10
  
  export function aufgabe10(args) {
    const input = args;
   
    if (input.length !== 7) {
    return false;
    }
   
    if (input[0] !== "#") {
    return false;
    }
   
    for (let i = 1; i < input.length; i++) {
    const currentElement = input[i];
    const ascii = currentElement.charCodeAt(0);
   
    if (48 <= ascii && ascii <= 57) {
    // mache nichts: ist eine Zahl
    } else if (65 <= ascii && ascii <= 70) {
    // mache nichts: ist A-F
    } else {
    return false;
    }
    }
   
    return true;
    }
  
    // BubbleSort

    export function bubbleSort (args) {
      {
          const list = args.split("")  // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
          for (let i = 0; i < list.length - 1; i++) {
            const currentElement = list[i]
            const nextElement = list[i+1]
            if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
              // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
              const tmp = list[i + 1];
              list[i + 1] = list[i];
              list[i] = tmp;
              i = -1 // starte von vorne wenn etwas vertauscht wurde.
            }
          }
          const result = list.join("")
          return result
          }
        }
      