function ClozeCard(text, cloze) {
    //return an error if "text"" string doesn't have "close"" inside
    if (!text.includes(cloze)) {
        console.log('"' + cloze + '" doesn\'t appear in "' + text + '"');
        return;
    }

    //scope-safe constructor
    //create an object in you run this constructor without new keyword 
    if (!(this instanceof ClozeCard)) {
        return new ClozeCard(text, cloze);
    }

    this.fullText = text;
    this.cloze = cloze;

    //replace text in "text" string by "..."
    this.partial = function() {
        return this.fullText.replace(this.cloze, "...");
    };
}

module.exports = ClozeCard;