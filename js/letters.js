var Letters = function() {
    this.element = $('#letters');
    this.wordbank = new WordBank();
    this.values = [];
    this.letters = [];
    this.typed = [];
};

Letters.prototype.refreshWords = function() {
    var self = this;
    self.values = this.wordbank.getRandomWords();
    self.values.forEach(function(value) {
        self.letters.push(new Letter(value));
    });
    this.underlineLast();
    this.typed = [];
    this.render();
};

Letters.prototype.backspace = function() {
    var last = this.getLast();
    var letter = this.typed.pop();
    last.removeUnderline();
    this.letters.push(letter);
    letter.changeBack();
    letter.markNormal();
    this.underlineLast();
};

Letters.prototype.input = function(value) {
    if (letters.length === 0) this.resetLetters();
    var last = this.getLast();
    if (this.letters.length !== 0 && last.matches(value)) {
        last.markCorrect();
    } else {
        last.change(value);
        last.markIncorrect();
    }
    last.removeUnderline();
    this.typed.push(this.letters.pop());
    if (this.letters.length === 0) this.refreshWords();
    this.underlineLast();
};

Letters.prototype.getLast = function() {
    return this.letters[this.letters.length - 1];
};

Letters.prototype.underlineLast = function() {
    this.getLast().underline();
};

Letters.prototype.initialize = function() {
    this.refreshWords();
};

Letters.prototype.render = function() {
    this.element.empty();
    this.letters.forEach(function(letter) {
        letter.render();
    });
};