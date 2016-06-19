var WordBank = function() {
    this.app = app || {};
    var start = '';
    for (var i = 1; i <= 3; i++) {
        start += app[i];
    }
    this.words = start
        .replace(/\n/g, ' ')
        .replace(/ +(?= )/g, '')
        .split(' ');
};

WordBank.prototype.hasWords = function() {
    return this.words.length != 0;
};

WordBank.prototype.setWords = function(words) {
    this.words = words
		.replace(/\n/g, ' ')
		.replace(/ +(?= )/g, '')
		.split('')
		.reverse();
};

WordBank.prototype.setWordsRandom = function() {
    this.words = this.app.four.split(' ');
};

WordBank.prototype.getNextLetters = function(amount) {
    var letters = [];
    if (this.words.length < amount) {
         amount = this.words.length;
    }
    for (var i = 0; i < amount; i++) {
        letters.push(this.words.pop());
    }
	if (letters[0] == ' ') letters.shift;
	if (letters[amount - 1] == ' ') letters.pop();
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
