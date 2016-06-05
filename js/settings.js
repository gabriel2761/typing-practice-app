var Settings = function() {
    this.$settingsView = $('#settings-view');
    this.$settingsButton = $('#settings-button');
    this.visible = false;
};

Settings.prototype.renderListener = function() {
    var self = this;
    this.$settingsButton.click(function() {
        if (self.$settingsView.hasClass('hidden')) {
            self.$settingsView.removeClass('hidden');
            self.visible = true;
        } else {
            self.$settingsView.addClass('hidden');
            self.visible = false;
        }
    });
};

Settings.prototype.isVisible = function() {
    return this.visible;
};
