# Portfolio

#### By Matt Wilkinson

#### Programming Language Suggester

## Github links
* https://wilkinsonmatt.github.io/Programming_Language_Suggester/
* https://wilkinsonmatt.github.io/Programming_Language_Suggester/
* https://github.com/wilkinsonmatt/Programming_Language_Suggester.git

## Technologies Used

* CSS
* HTML
* Bootstrap
* JS
* Jquery

## Description

 A Programming Language Suggester webpage that asks future students a series of questions about themselves and provides a language suggestion based on their answers. 
 
 (Unfortunately the results aren't based in science)

## Tests

Describe: inputGreaterThanZero()

  Test: "It should check if user entered a whole number greater than zero"
  Code: const input = 1123; 
        inputGreaterThanZero(input);
  Expected Output: true 

Describe: arrayZeroToInput()

  Test: "It should return an array of numbers from 0 to the user's inputted number"
  Code: arrayZeroToInput(5);
  Expected Output: [0, 1, 2, 3, 4, 5]

Describe: Beep!()

  Test: "It should return an array that replaced any element of the input array that contains a 1 within it's digits with "Beep!""
  Code: Beep!([0, 1, 12, 31, 8, 123]);
  Expected Output: [0, Beep!, Beep!, Beep!, 8, Beep!]

Describe: Boop!()

  Test: "It should return an array that replaced any element of an array that contains a 2 within it's digits with "Boop!""
  Code: Beep!([0, 1, 12, 31, 8, 123]);
  Expected Output: [0, Boop!, 31, 8, Boop!]

Describe: neighbor()

  Test: "It should return an array that replaced any element of an array that contains a 3 within it's digits with "Won't you be my neighbor?""
  Code: Beep!([0, 1, 12, 31, 8, 123]);
  Expected Output: [0, 1, "Won't you be my neighbor?", 8, "Won't you be my neighbor?"]

Describe: Mr._Roboger's_Neighborhood()

  Test: It should return an array that replaced any element of an array with one of the following strings based on a hierarchy: 
          1st - Elements with 3 it's digits are replaced "Won't you be my neighbor?"
          2nd - Elements with 2 it's digits are replaced "Boop!"
          3rd - Elements with 1 it's digits are replaced "Beep!"
  Code: Mr._Roboger's_Neighborhood([0, 1, 12, 31, 8, 123]);
  Expected Output: [0, Beep!, Boop!, Won't you be my neighbor, 8, Won't you be my neighbor]

## Setup/Installation Requirements

* Download entire github file
* launch index.HTML file in Google Chrome

## Known Bugs

* N/A

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