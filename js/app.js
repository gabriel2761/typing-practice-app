var App = function() {
    this.keys = new Keys();
    this.letters = new Letters();
};

App.prototype.initialize = function() {
    var self = this;
    this.keys.listen(function(key) {

        switch(key) {
            case 'backspace':
                self.letters.backspace();
                break;
            default:
                self.letters.input(key);
                break;
        }

        console.log(key);
    });

    self.letters.initialize();
};

App.prototype.render = function() {
    this.letters.render();
};
