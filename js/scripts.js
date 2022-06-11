function inputGreaterThanZero(input) {
  const inputAsInt = Number(input);
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
    zeroToInputArray.push(iAsString);
  }
  return zeroToInputArray
}

//See if a number(string) contains another number(character) in it's digits 
function ChecksIfElementIncludesNumber(currentElement, number) {
  const numberArray = currentElement.split("");
  for (const Element of numberArray) {
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
//checks if user input was a number greater than 0 and returns array from 0 to input with elements replaced based on elements digits.  
function mainfunction(input) {
  if (inputGreaterThanZero(input)) {
    return replacesElements(arrayZeroToInput(input));
  } else {
    return "Not a whole number greater than zero. Please try again"
  }
}





$(document).ready(function() {
  $("form#side").submit(function(event) {
    event.preventDefault();
    const input = $("#side1").val();
    let result = mainfunction(input);
    $("#output").text(result);    
  });
});



