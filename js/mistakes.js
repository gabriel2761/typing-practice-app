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
            value.sortMistakes();
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

Mistake.prototype.sortMistakes = function() {
    var self = this;
    var temp = [];
    var letter;
    self.mistakes.sort();
    self.mistakes.forEach(function(mistake) {
        if (letter !== mistake) {
            letter = mistake;
            temp.push({ 
                'letter': letter,
                'count': 1
            });
        } else {
            temp[temp.length - 1].count++;
        }
    })
    temp.sort(function(a, b) {
        return b.count - a.count;
    });
    self.mistakes.sort(function(a, b) {
        var first;
        var second;
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].letter === a) first = i
            if (temp[i].letter === b) second = i;
        }
        return first - second;
    });
    console.log(temp);
};
