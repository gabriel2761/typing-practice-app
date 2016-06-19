var Letters = function() {
    this.element = $('#letters');
    this.wordbank = new WordBank();
    this.letters = [];
    this.typed = [];
    this.settings;
};

Letters.prototype.initialize = function() {
    this.refreshWords();
};

Letters.prototype.attachSettings = function(settings) {
    var self = this;
    self.settings = settings;
    self.settings.setCustomTextListener(function(customText) {
        self.letters = [];
        self.wordbank.setWords(customText);
        self.refreshWords();
        self.render();
    });
    self.settings.setLetterRange(function(range) {
        console.log(range);
    });
};

Letters.prototype.refreshWords = function() {
    var self = this;
    var words;
    if (self.settings.isUsingCustomText()) {
        // TODO: Remove magic number
        if (self.wordbank.hasWords()) {
            words = self.wordbank.getNextLetters(50);
        } else {
            self.settings.turnOffCustomText();
            self.wordbank.setWordsRandom();
            words = self.wordbank.getRandomWords();
        }
    } else {
        words = self.wordbank.getRandomWords();
    }
    words.forEach(function(value) {
        self.letters.push(new Letter(value));
    });
    self.underlineLast();
    self.typed = [];
    self.render();
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
        this.refreshWords();    
    }
    this.underlineLast();
};

Letters.prototype.getLast = function() {
    return this.letters[this.letters.length - 1];
};

Letters.prototype.underlineLast = function() {
    this.getLast().underline();
};

Letters.prototype.render = function() {
    this.element.empty();
    this.letters.forEach(function(letter) {
        letter.render();
    });
};
