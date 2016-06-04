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

Mistakes.prototype.sortMistakes = function() {
    var self = this;
    self.mistakes.sort(function(a, b) {
        return b.mistakes.length - a.mistakes.length;
    });
};

Mistakes.prototype.updateMistakeCount = function() {
    var count = 0;
    this.mistakes.forEach(function(mistake) {
        count += mistake.mistakes.length;
    });
    this.$mistakeCount.text('Mistakes: ' + count);
};

Mistakes.prototype.updateLetterMistakes = function() {
    var self = this;
    self.$mistakeLetters.empty();
    self.mistakes.forEach(function(mistake) {
        self.$mistakeLetters.append('<p>' + mistake.letter + ' -> ' + mistake.mistakes +'</p>');
    });
};

var Mistake = function(mistake) {
    this.letter = mistake.letter;
    this.mistakes = [];
    this.mistakes.push(mistake.mistake);
};

Mistake.prototype.addMistake = function(mistake) {
    this.mistakes.push(mistake);
};
