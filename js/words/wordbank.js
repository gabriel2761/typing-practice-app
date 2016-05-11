var WordBank = function() {
    this.words = app.words.split(' ');
};

WordBank.prototype.getRandomWords = function() {
    var words = '';
    for (var i = 0; i <= 8; i++) {
        words += this.words[Math.floor(Math.random() * this.words.length)];
        if (i !== 8) words += ' ';
    }
    return words.split('').reverse();
};