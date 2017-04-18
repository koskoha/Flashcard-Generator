// import constructors
var Basic = require('./basicCard.js');
var Cloze = require('./clozeCard.js');

// creating an objects from imported constructors
var basicCard = new Basic('Who was the first president of the United States?', 'George Washington');
var clozeOne = new Cloze("George Washington was the first president of the United States.", "George Washington");

// creating an object with no new keyword
var clozeTwo = Cloze("George Washington was the first president of the United States.", "George Washington");


// TESTING
//basic card constructor test
console.log(basicCard.front);
console.log(basicCard.back);
console.log('*******************************************');
console.log('CLOZE CARDS');
console.log('*******************************************');
// cloze card constructor test
console.log(clozeOne.partial());
console.log('Without "new" keyword');
console.log(clozeTwo.partial());
console.log('*******************************************');

//Should throw an error
console.log('****Should print an error******');
var clozeThree = new Cloze("George Washington was the first president of the United States.", "George Bush");