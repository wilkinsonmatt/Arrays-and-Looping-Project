function inputGreaterThanZero(input) {
  const inputAsInt = Number(input);
  //console.log(inputAsInt);
  if (inputAsInt > 0 ) {
    return true
  }
  return false
}

//returns an array containing the numbers from 0 to the number input 
function arrayZeroToInput(input) {
  const inputAsInt = Number(input);
  let zeroToInputArray = [];
  for (let i = 0; i <= inputAsInt; i++) {
    let iAsString = i.toString();
    //console.log(iAsString);
    zeroToInputArray.push(iAsString);
  }
  //console.log(zeroToInputArray);
  return zeroToInputArray
}

//See if a number(string) contains another number(character) in it's digits 
function ChecksIfElementIncludesNumber(currentElement, number) {
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

//Takes an array and returns a copy with certain elements replaced based what digits are in that element
function replacesElements(zeroToInputArray) {
  const finalArray = zeroToInputArray.map(function(element) {
    if (ChecksIfElementIncludesNumber(element, "3")) {
      //console.log(element);
      return "Won't you be my neighbor?"
    } else if (ChecksIfElementIncludesNumber(element, "2")) {
      return "Boop!";
    } else if (ChecksIfElementIncludesNumber(element, "1")) {
      return "Beep!";
    } else {
      return element;
    }
  });
  return finalArray;
}


//console.log(inputGreaterThanZero(10));
//console.log(arrayZeroToInput(10));
//console.log(ChecksIfElementIncludesNumber("0", "0"));
//console.log(replacesElements(["1", "2", "3", "4", "5", "6"]));

// let numAsString = 14;
// num = numAsString.toString();
// console.log(num);
// console.log(numAsString);



function mainfunction(input) {
  if (inputGreaterThanZero(input)) {
    return replacesElements(arrayZeroToInput(input));
  } else {
    return "Not a whole number greater than zero. Please try again"
  }
}








let test = mainfunction("k");

console.log(test);




