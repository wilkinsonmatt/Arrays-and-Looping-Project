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

function ElementIncludesNumber(currentElement, number) {
  const numberArray = currentElement.split("");
  console.log(numberArray);
  for (const Element of numberArray) {
    console.log(Element);
    if (Element === number) {
      return true
    }
  }
  return false
}

let test = ElementIncludesNumber("1jkl   23", "3");

console.log(test);




