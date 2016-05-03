var Keys = function() {
    this.keymap = new KeyMap();
};

Keys.prototype.listen = function(callback) {
    var self = this;
    $(document).keydown(function(event) {
        var key = self.keymap.value(event.keyCode);
        callback(key);
    });
};