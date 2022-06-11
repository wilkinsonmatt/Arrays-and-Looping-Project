# Portfolio

#### By Matt Wilkinson

#### Programming Language Suggester
---
## Github links
* https://wilkinsonmatt.github.io/Programming_Language_Suggester/
* https://wilkinsonmatt.github.io/Programming_Language_Suggester/
* https://github.com/wilkinsonmatt/Programming_Language_Suggester.git
---
## Technologies Used :

* CSS
* HTML
* Bootstrap
* JS
* Jquery
---
## Description :

 A program that takes a number from the user and displays the numbers 0 to users number. The numbers that have 1, 2, or 3 it their digits with be replaced with words instead. First numbers with any 3s will be replaced with "Won't you be my neighbor?". Leftover numbers with any 2s will be replaced with "Boop!". Finally numbers with 1s will be replaced will "Beep!". 

---
## Tests :

* ### Describe: inputGreaterThanZero()
  >Test: "It should check if user entered a number greater than zero"
  >
  >Code: 
  > 
  >`const input = 1123;`
  >
  >`inputGreaterThanZero(input);`
  >
  >Expected Output: true

* ### Describe: arrayZeroToInput()
  >Test: "It should return an array of numbers(characters) from 0 to the user's inputted number"
  >
  >Code:` arrayZeroToInput(5);`
  >
  >Expected Output: ["0", "1", "2", "3", "4", "5"]

* ### Describe: ChecksIfElementIncludesNumber**(currentElement, number)
  >Test: "It should tell if the current element(string) has a given number(character) within it's digits.
  >
  >Code:` ChecksIfElementIncludesNumber("1832349", "4")`
  >
  >Expected Output: true

* ### Describe: replacesElements()
  > Test: "It should return an array that replaced any element of an array with one of the following strings based on a hierarchy:
  >- 1st - Elements with 3 in it's digits are replaced "Won't you be my neighbor?"
  >- 2nd - Elements with 2 in it's digits are replaced "Boop!"
  >- 3rd - Elements with 1 in it's digits are replaced "Beep!""
  >
  >Code: `replacesElements(["0", "1", "12", "31", "8", "123"]);`
  >
  >Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "8", "Won't you be my neighbor?"]

* ### Describe: mainfunction(input)
  >Test: "It should use the other functions to return an array based on the users input, or tell them to try again. The numbers, represented as characters, from 0 to inputted number will be the elements of the array. Elements will be replaced words if their they have 3, 2, or 1 in their digits.
  >
  >code: `mainfunction("13")`
  >
  >Expected Output: ["0","Beep!","Boop!","Won't you be my neighbor?","4","5","6","7","8","9","Beep!","Beep!","Boop!","Won't you be my neighbor?"]

---
## Setup/Installation Requirements

* Download entire github file
* launch index.HTML file in Google Chrome
---
## Known Bugs

* N/A
---
## License

Copyright (c) 2022 Matt Wilkinson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR I