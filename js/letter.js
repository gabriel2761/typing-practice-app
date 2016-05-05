var Letter = function(letter) {
    this.key = letter;
    this.element = $('<span class="letter">'+letter+'</span>');
    this.letters = $('#letters');
};

Letter.prototype.matches = function(key) {
    return this.key === key;
};

Letter.prototype.mark = function() {
    this.element.addClass('mark');
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