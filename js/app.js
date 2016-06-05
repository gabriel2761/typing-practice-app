var App = function() {
    this.keys = new Keys();
    this.letters = new Letters();
    this.mistakes = new Mistakes();
    this.settings = new Settings();
    this.typecount = 0;
    this.$focus = $('#focus');
    this.$typecount = $("#type-count");
};

App.prototype.initialize = function() {
    var self = this;
    this.keys.listen(function(key) {

        switch(key) {
            case 'backspace':
                self.letters.backspace();
                break;
            case undefined:
                break;
            default:
                self.input(key);
                break;
        }

        console.log(key);
        self.incrementTypeCount(key);
        self.$focus.focus();
        self.$focus.val('');
    });

    self.letters.initialize();
};

App.prototype.incrementTypeCount = function(key) {
    if (key === 'backspace') {
        this.typecount--;
    } else {
        this.typecount++;
    }
    this.$typecount.text('Letters typed: ' + this.typecount);
};

App.prototype.input = function(key) {
    var self = this;
    self.letters.input(key, function(mistake) {
        self.mistakes.addMistake(mistake);
        self.mistakes.sortMistakes();
        self.mistakes.updateLetterMistakes();
        self.mistakes.updateMistakeCount();
    });
};

App.prototype.render = function() {
    this.letters.render();
    this.settings.renderListener();
};
