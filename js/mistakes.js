var Mistakes = function() {
    this.$element = $('#mistakes');
    this.mistakes = [];
};

Mistakes.prototype.addMistake = function(letter, error) {
    this.mistakes.push(new Mistake(letter, error));
};

Mistakes.prototype.updateMistakeCount = function() {
    this.$element.text('Mistakes: ' + this.mistakes.length);
};

var Mistake = function(mistake) {
    this.letter = mistake.letter;
    this.mistake = mistake.mistake;
};
