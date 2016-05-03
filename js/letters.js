var Letters = function() {
    this.letters = ['a', 'b', 'c', 'd', 'g', 'e'];
};

Letters.prototype.input = function(key) {
    if (key === this.letters[this.letters.length - 1]) {
        console.log('found');
        this.letters.pop();
    }
};