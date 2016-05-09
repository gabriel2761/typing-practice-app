var value = 'public static void main string args this function hello word cout hello this private String list Arraylist'.split('').reverse();

var Letters = function() {
    this.element = $('#letter');
    this.values = value;
    this.letters = [];
    this.typed = [];
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

Letters.prototype.input = function(letter) {
    var last = this.getLast();
    if (this.letters.length !== 0 && last.matches(letter)) {
        last.markCorrect();
    } else {
        last.change(letter);
        last.markIncorrect();
    }
    last.removeUnderline();
    this.typed.push(this.letters.pop());
    this.underlineLast();
};

Letters.prototype.getLast = function() {
    return this.letters[this.letters.length - 1];
};

Letters.prototype.underlineLast = function() {
    this.getLast().underline();
};

Letters.prototype.initialize = function() {
    var self = this;
    this.values.forEach(function(value) {
        self.letters.push(new Letter(value));
    });
    this.underlineLast();
};

Letters.prototype.render = function() {
    this.letters.forEach(function(letter) {
        letter.render();
    });
};