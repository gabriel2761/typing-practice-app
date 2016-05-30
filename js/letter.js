var Letter = function(value) {
    this.value = value;
    this.element = $('<span class="letter">'+value+'</span>');
    this.letters = $('#letters');
};

Letter.prototype.change = function(value) {
    this.element.empty();
    this.element.append(value);
};

Letter.prototype.changeBack = function() {
    this.element.empty();
    this.element.append(this.value);
};

Letter.prototype.matches = function(value) {
    return this.value === value;
};

Letter.prototype.markIncorrect = function() {
    if (this.element.text() === ' ') {
        this.element.addClass('underline-red');
    } else {
        this.element.addClass('mark-incorrect');
    }
};

Letter.prototype.markCorrect = function() {
    this.element.addClass('mark-correct');
};

Letter.prototype.markNormal = function() {
    this.element.removeClass('mark-incorrect');
    this.element.removeClass('mark-correct');
    this.element.removeClass('underline-red');
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