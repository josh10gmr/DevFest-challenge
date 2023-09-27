function decodeString(encodedString) {
    const encodedCharacters = encodedString.split('');
    const decodedCharacters = [];
  
    for (let i = encodedCharacters.length - 1; i >= 0; i--) {
      const asciiCode = encodedCharacters[i].charCodeAt(0);
      const decodedAsciiCode = asciiCode - 5;
      const decodedCharacter = String.fromCharCode(decodedAsciiCode);
      decodedCharacters.push(decodedCharacter);
    }
  
    const decodedString = decodedCharacters.join('');
    return decodedString;
  }
  
  const decodedString = decodeString('8757%TLSNRTI%TYSFX%YXJK[JI%YF%^YWFU%JPFP%JMY%SNTO');
  console.log(decodedString);