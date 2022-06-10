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
  //console.log(numberArray);
  for (const Element of numberArray) {
    //console.log(Element);
    if (Element === number) {
      return true
    }
  }
  return false
}


function Neighborhood(zeroToInputArray) {
  const finalArray = zeroToInputArray.map(function(Element) {
    if (ElementIncludesNumber(Element, "3")) {
      console.log(Element);
      return "Won't you be my neighbor?"
    } else if (ElementIncludesNumber(Element, "2")) {
      return "Boop!";
    } else if (ElementIncludesNumber(Element, "1")) {
      return "Beep!";
    } else {
      return Element;
    }
  });
  return finalArray;
}






let test = Neighborhood(["1jkl", "23", "3", "4"]);

console.log(test);




