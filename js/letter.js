var Letter = function(letter) {
    this.letter = letter;
    this.element = $('<span class="letter">'+letter+'</span>');
    this.letters = $('#letters');
};

Letter.prototype.change = function(letter) {
    this.element.empty();
    this.element.append(letter);
};

Letter.prototype.changeBack = function() {
    this.element.empty();
    this.element.append(this.letter);
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

Letter.prototype.markNormal = function() {
    this.element.removeClass('mark-incorrect');
    this.element.removeClass('mark-correct');
    this.element.addClass('mark-normal');
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