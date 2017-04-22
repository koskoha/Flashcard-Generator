/*
***********INSTRUCTIONS************
to run type in the terminal:
    node file.js [card type] [front of the card] [back of the card] 
    ex:
        node .\run.js cloze "George Washington was the first president of the United States?" 'George Washington'
        node .\run.js basic "Who was the first president of the United States?" 'George Washington'

*/

// import constructors and libraries
var Basic = require('./basicCard.js');
var Cloze = require('./clozeCard.js');
var fs = require('fs');

// saving user inputs
//type of the card "basic" or "cloze"
var type = process.argv[2];
// front of the card
var front = process.argv[3];
// back of the card
var back = process.argv[4];

//checking if front and back isn't undefined
//if not checking which type of card we need to create
if (front === undefined || back === undefined) {
    console.log("Missing front or back of the card!");
} else if (type === "basic") {
    createBasicCart(front, back);
} else if (type === "cloze") {
    createClozeCard(front, back);
} else {
    console.log('Wrong command!!!');
}

//creating new basic card and saving it to the basic.json file
function createBasicCart(front, back) {
    var basicCard = new Basic(front, back);
    saveCard(basicCard, "basic");
}

//creating new cloze card and saving it to the cloze.json file
function createClozeCard(front, back) {
    var clozeOne = new Cloze(front, back);
    saveCard(clozeOne, "cloze");
}

// saving card to file
// function accepting cart as the first argument and type as the second argument
function saveCard(card, type) {
    //if card not undefined ond type of object save to the file
    if (card !== undefined && typeof card === 'object') {
        fs.appendFile(type + ".json", JSON.stringify(card) + ',\n', function(err) {
            if (err) {
                console.log(err);
            }
        });
    } else {
        console.log('Can\'t save your card. Something wrong with you card object');
    }
}