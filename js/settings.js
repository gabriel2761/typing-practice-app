var Settings = function() {
    this.$settingsView = $('#settings-view');
    this.$settingsButton = $('#settings-button');
};

Settings.prototype.renderListener = function() {
    var self = this;
    this.$settingsButton.click(function() {
        self.$settingsView.toggleClass('hidden');
    });
};
