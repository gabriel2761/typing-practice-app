var App = function() {
    this.keys = new Keys();
};

App.prototype.initialize = function() {
    this.keys.listen();
};