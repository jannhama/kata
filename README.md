# Dictionary Kata

Problem is defined here:
http://codingdojo.org/cgi-bin/index.pl?KataDictionaryReplacer

Idea is to replace certain strings in the input string with those found in the dictionary.

My approach was to do this using AngularJS since it is easy to have
 user input and show the result in visual way.
 
Dictionary itself is stored in the JSON file and naturally it could be possible to add items to it duriong the run time.
However in this case we use only those two keywords defined in the tests.

Input string must have "double quotes" around it otherwise find button stays disabled.

#Requires
 npm (tested with 3.8.6) and nodejs (v5.11.0)
 
#Installation 

 `npm install`
 
#Running
  `npm run start`
  
  Open browser and navigate to `http://localhost:8080`
#Running tests  
 `npm run test`
 
 Tests are written using Mocha framework
 
 
(c) 2016 Janne Hämäläinen
