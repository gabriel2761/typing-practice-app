var Letters = function() {
    this.element = $('#letter');
    this.values = ['a', 'b', 'c', 'd', 'g', 'e'];
    this.letters = [];
};

Letters.prototype.input = function(key) {
    var last = this.letters[this.letters.length - 1];
    if (this.letters.length !== 0 && last.matches(key)) {
        console.log('match');
        last.mark();
        this.letters.pop();
    }
};

Letters.prototype.initialize = function() {
    var self = this;
    this.values.forEach(function(value) {
        self.letters.push(new Letter(value));
    });
};

Letters.prototype.render = function() {
    this.letters.forEach(function(letter) {
        letter.render();
    });
};