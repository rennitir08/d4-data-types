// Truly empty data type
var emptyGlass = null;
// // Truly undefined data type
var outspace;
// // Truly boolean data type
var truth = true;
var news = false;

// Numbers NaN = not a number
// 2
// 10.228928392
// 0.1989823
// -2389283
// '2' not a number, it's a string
console.log('2' + '2'); //concatenates the strings
console.log(2 * '2'); //multiplies the numbers
console.log(Number('2')+ Number('2')); //converts to actual numbers
// //every input field on a form is actually a string value, so you might need to convert those to Numbers().

// //Math
// // random number
var cosmos = Math.random() * 100;
console.log(cosmos);
// round  nearest nondecimal
var round = Math.round(cosmos);
console.log(round);
// round up
var ceil = Math.ceil(cosmos);
console.log(ceil);
// round down
var floor = Math.floor(cosmos);
console.log(floor);

// Strings
var doubleQuotedString = "Hello";
var singleQuotedString = 'World';
var multilineString = `Hey
// Everyone`;
doubleQuotedString + singleQuotedString + multilineString;

var iAmWispering = 'I AM WISPERING';
iAmWispering = iAmWispering.toLowerCase();
console.log(iAmWispering)

var iAmShouting = 'i am shouting';
iAmShouting = iAmShouting.toUpperCase();
console.log(iAmShouting)

var word = 'Hat';
console.log(word.length);

var word = word.slice(1,2);
console.log(word);

console.log(word.length);

var place = "The Iron Yard"

console.log(place.slice(1,2));

var headline = 'the day was cold';
var firstLetter = headline.slice(0,1).toUpperCase();
headline = firstLetter + headline.slice(1);
console.log(headline);

// Capitalize first letter and make it into a reusable function
function iCap(headline) {
    var firstLetter = headline.slice(0,1).toUpperCase();
    headline = firstLetter + headline.slice(1);
    return headline;
}
console.log(iCap('spring is coming soon e hope'));

//  trim off extra space
var userInput = '    Jennifer   ';
console.log(userInput);
userInput = userInput.trim();
console.log(userInput);

//repeat in the same string
var sayItAgain = 'Hacked.';
sayItAgain = sayItAgain.repeat(5);
console.log(sayItAgain);

var address = '3874374 Main Street';

var hasStreet = address.includes('Street');
console.log(hasStreet);

// regular expressions: detect if the phone number is in correct format or not
var phoneNumber = '(888) 123-1234';
var isCorrectPhoneNumber = phoneNumber.match(/\d/g).length===10; 
console.log(isCorrectPhoneNumber);
//start and end with forward slash

// if you make "hey" into a regular expression /hey/g it will replace all "hey"s
console.log('hey world'.replace(/hey/g, 'hello'));

//Dates
Date.now()
console.log(Date.now());

//Currency
// accountingjs

// Array
var listOfThings = ['Cheese', 'Pepperoni', 'Crust', 'Sauce'];
console.log(listOfThings[0]);

console.log(listOfThings.length);

console.log(listOfThings.reverse());
// split a sentence and join it back togethr
console.log('A sentence of characters.'.split('').reverse().join(''));

// Object
var anObject = {
    name: 'Jennifer'
};
console.log(anObject.name);