var Mistakes = function() {
    this.$mistakeCount = $('#mistake-count');
    this.$mistakeLetters = $('#mistake-letters');
    this.mistakes = [];
};

Mistakes.prototype.addMistake = function(mistake) {
    var foundMistake = false;
    this.mistakes.forEach(function(value) {
        if (mistake.letter === value.letter) {
            value.addMistake(mistake.mistake);
            foundMistake = true;
        }
    });

    if (!foundMistake) {
        this.mistakes.push(new Mistake(mistake));
    }
};

Mistakes.prototype.updateMistakeCount = function() {
    this.$mistakeCount.text('Mistakes: ' + this.mistakes.length);
};

Mistakes.prototype.updateLetterMistakes = function() {
    var self = this;
    self.$mistakeLetters.empty();
    self.mistakes.forEach(function(mistake) {
        self.$mistakeLetters.append('<p>' + mistake.letter + ' -> ' + mistake.mistake +'</p>');
    });
};

var Mistake = function(mistake) {
    this.letter = mistake.letter;
    this.mistake = [];
    this.mistake.push(mistake.mistake);
};

Mistake.prototype.addMistake = function(mistake) {
    this.mistake.push(mistake);
};
