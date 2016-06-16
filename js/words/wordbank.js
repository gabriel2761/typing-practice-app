var WordBank = function() {
    this.two = app.four.split(' ');
    this.words = this.two;
};

WordBank.prototype.setWords = function(words) {
    this.words = words.replace(/\n/g, ' ').split('').reverse();
};

WordBank.prototype.getNextLetters = function(amount) {
    var letters = [];
    for (var i = 0; i < amount; i++) {
        letters.push(this.words.pop());
    }
    return letters.reverse();
};

WordBank.prototype.getRandomWords = function() {
    var words = '';
    for (var i = 0; i <= 8; i++) {
        words += this.words[Math.floor(Math.random() * this.words.length)];
        if (i !== 8) words += ' ';
    }
    return words.split('').reverse();
};
