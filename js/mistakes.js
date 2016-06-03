var Mistakes = function() {
    this.$mistakeCount = $('#mistake-count');
    this.$mistakeLetters = $('#mistake-letters');
    this.mistakes = [];
};

Mistakes.prototype.addMistake = function(letter, error) {
    this.mistakes.push(new Mistake(letter, error));
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
}

var Mistake = function(mistake) {
    this.letter = mistake.letter;
    this.mistake = mistake.mistake;
};
