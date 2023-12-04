# Mr. Nur's Neighborhood

#### By _**Mohamed Nur**_

## Description

_The program takes a number and returns range of numbers staring from 0 to whatever number the user inputs. For example if you enters 1 the program returns "Hello", if you  enter 2 it will return "Friend" and if you enter 3 it will return "Can you be my neighbor"_

## Tests

```
//Business Logic:
Describe: myLovely();

Test: "This application retuns an array of numbers starting from 0 to the user the number they input.";  
Code: myLovely(6);  
Expected: ["0", "1", "2", "3", "4", "5", "6"]

Test: "And if you input a number that ranges from 0 and you include 1, the application will replace the 1 with 'Hello'.";  
Code: myLovely(1);  
Expected: ["0", "Hello"]

Test: "And if you input a number that ranges from 0 and you include 2, the application will replace the 1 with 'Friend'."; 
Code: myLovely(2);
Expected: ["0", "Hello", "Friend"]  

Test: "And if you input a number that ranges from 0 and you include 3, the application will replace the 3 with 'Can you be my neighbor?'";  
Code: myLovely(3);  
Expected: ["0", "Hello", "Friend", "Can you be my neighbor?"]  

Test: "And if you input a number that ranges from 0 to 5, numbers that are not 1, 2, or 3 won't be replaced."
Code: myLovely(5);  
Expected: ["0", "Hello", "Friend", "Can you be my neighbor?", "4", "5"]
```

## Technologies Used
* _HTML_
* _CSS_
* _JavaScript_
* _TDD_

## Setup/Installation Requirements
* _Open Terminal_
* _Clone this repository in your desktop_
* _Open in VS Code_
* _Open Index.html in your browser_
* _You'll be able to use any browser by clicking the link below_

## Link

https://moenur24.github.io/Mr-Robogers-Neighborhood/

## Known Bugs

* _None so far._

## License

This is licensed under the MIT license 

Copyright (c) _2023_ _Mohamed Nur_