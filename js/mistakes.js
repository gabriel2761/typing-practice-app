var Mistakes = function() {
    this.$mistakeCount = $('#mistake-count');
    this.$mistakeLetters = $('#mistake-letters');
    this.mistakes = [];
};

Mistakes.prototype.addMistake = function(mistake) {
    this.mistakes.push(mistake);
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
    this.count = 0; 
};
