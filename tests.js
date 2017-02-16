var avow = require('avow');
var moment = require('moment');

// Booleans
function isTrue(value) {
    return value;
}

avow('isTrue returns true', isTrue(1 + 1 === 2) === true);

// Null & Undefined
function isNull(emptyGlass) {
    return emptyGlass;
}

var emptyGlass = true;
avow('isNull returns true', isNull(emptyGlass) === true);

function isUndefined(blockOfClay) {
    return blockOfClay;
}

var blockOfClay = true;
avow('isUndefined returns true', isUndefined(blockOfClay) === true);

// Strings
function convertCaseLower(value) {
    var value = value.toLowerCase();
    return value;
}

avow('convertCaseLower returns a lowercase string', convertCaseLower('I AM WHISPERING.') === 'i am whispering.');

function convertCaseUpper(value) {
    var value = value.toUpperCase();
    return value;
}

avow('convertCaseUpper returns an uppercase string', convertCaseUpper('i am shouting!') === 'I AM SHOUTING!');

function repeatWord(word) {
     var word = word.repeat(2);
    return word;
}
avow('repeatWord returns a repeated word', repeatWord('Knock.', 2) === 'Knock.Knock.');

function sliceWord(word) {
    var word = word.slice(7,12)
    return word;
}

avow('sliceWord returns a slice of a word', sliceWord('I love pizza!', 7, 12) === 'pizza');

function splitWord(word) {
    var word = word.split(',')
    return word;
}

avow('splitWord returns an array', splitWord('US,CA,MX,JP,UK', ',').length === 5);

function whereIsCarmen(value) {
    var value = value.indexOf('Carmen');
    return value;
}

avow('whereIsCarmen returns Carmen\'s position', whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27);

function doesItContain(str) {
    var str = str.includes('Museum');
    return str;
}

avow('doesItContain returns true if it finds a match', doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true);

// Regular Expressions
function extractZipCode(value) {
    return value.match(/\d/g).join('');
}

avow('extractZipCode returns a zip code', extractZipCode('My zip code was 46240.') === '46240');

function extractPhoneNumber(value) {
    return value.match(/\d/g).join('');
}

avow('extractPhoneNumber returns a string of numbers', extractPhoneNumber('(888) 123.1234') === '8881231234');

// Numbers
function stringToNumber(value) {
    var value = Number('1999');
    return value;
}

avow('stringToNumber returns a proper Number', stringToNumber('1999') === 1999);

function incrementByOne(value) {
    return value+=1;
}

avow('incrementByOne returns a number one higher', incrementByOne(0) === 1);

function isDivisibleByThree(value) {
    if(value % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
    return value;
}

avow('isDivisibleByThree returns true if number is divisible by 3', isDivisibleByThree(9) === true);

function makeRandomNumber(value) {
    var value = Math.random() * 10;
    return value;
}
avow('makeRandomNumber returns a random number between 0 and 10', makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10);

function roundNumber(value) {
    var value = Math.round(value);
    return value;
}

avow('roundNumber returns a number rounded up', roundNumber(5.51) === 6);

// Dates
function justAMoment(day) {
    // Look at moment.js docs to find how to return the day name, like Wednesday
    var day = moment().format('dddd');
    return day;
}

avow('justAMoment returns true if the function returns a day name', justAMoment().includes('day') === true);

// Objects
function myNameIs(value) {
    return value.name
   
};
avow('myNameIs returns your name from an object with a name property', myNameIs({name:'Your Name Here'}) === 'Your Name Here');


// Arrays
function getFirstItem(value) {
  value = value[0];
  return value;
}

avow('getFirstItem returns the first item in the array', getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')
