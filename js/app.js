var App = function() {
    this.keys = new Keys();
    this.letters = new Letters();
};

App.prototype.initialize = function() {
    var self = this;
    this.keys.listen(function(key) {
        console.log(key);
        self.letters.input(key);
    });
};