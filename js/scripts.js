function inputGreaterThanZero(input) {
  if (input > 0 ) {
    return true
  }
  return false
}

function arrayZeroToInput(inputtedNumber) {
  let zeroToInputArray = [];
  for (let i = 0; i <= inputtedNumber; i++) {
    zeroToInputArray.push(i);
  }
  return zeroToInputArray
}

function ElementIncludesNumber(CurrentElement, number) {
  const numberArray = CurrentElement.split("")
  for (const currentElement of numberArray) {
    if (currentElement === number) {
      return true
    }
  }
  return false
}






