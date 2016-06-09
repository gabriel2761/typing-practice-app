var Letters = function() {
    this.element = $('#letters');
    this.wordbank = new WordBank();
    this.letters = [];
    this.typed = [];
    this.settings;
};

Letters.prototype.attachSettings = function(settings) {
    var self = this;
    self.settings = settings;
    self.settings.setCustomTextListener(function(customText) {
        self.letters = [];
        customText.split('').reverse().forEach(function(letter) {
            self.letters.push(new Letter(letter));
        });
        self.render();
    });
};

Letters.prototype.refreshWords = function() {
    var self = this;
    self.wordbank.getRandomWords().forEach(function(value) {
        self.letters.push(new Letter(value));
    });
    self.underlineLast();
    self.typed = [];
    self.render();
};

Letters.prototype.getNextLetters = function() {
    for (var i = amount; i >= 0; i++) {
        this.letters.push(this.letters.pop());
    }
};

Letters.prototype.backspace = function() {
    if (this.typed.length === 0) return;
    var last = this.getLast();
    var letter = this.typed.pop();
    last.removeUnderline();
    this.letters.push(letter);
    letter.changeBack();
    letter.markNormal();
    this.underlineLast();
};

Letters.prototype.input = function(value, mistake) {
    if (letters.length === 0) this.resetLetters();
    var last = this.getLast();
    if (this.letters.length !== 0 && last.matches(value)) {
        last.markCorrect();
    } else {
        last.change(value);
        last.markIncorrect();
        mistake({
            'letter': last.value,
            'mistake': value
        });
    }
    last.removeUnderline();
    this.typed.push(this.letters.pop());
    if (this.letters.length === 0) {
        this.getNextLetters();
       // this.refreshWords();    
    }
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
