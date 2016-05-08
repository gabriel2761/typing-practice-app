var Letter = function(letter) {
    this.letter = letter;
    this.element = $('<span class="letter">'+letter+'</span>');
    this.letters = $('#letters');
};

Letter.prototype.change = function(letter) {
    this.element.empty();
    this.element.append(letter);
};

Letter.prototype.matches = function(letter) {
    return this.letter === letter;
};

Letter.prototype.markIncorrect = function() {
    this.element.addClass('mark-incorrect');
};

Letter.prototype.markCorrect = function() {
    this.element.addClass('mark-correct');
};

Letter.prototype.render = function() {
   this.letters.prepend(this.element);
};

Letter.prototype.underline = function() {
    this.element.addClass('underline');
};

Letter.prototype.removeUnderline = function() {
    this.element.removeClass('underline');
};