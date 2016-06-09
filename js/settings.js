var Settings = function() {
    this.$settingsView = $('#settings-view');
    this.$settingsButton = $('#settings-button');
    this.$customTextArea = $('#custom-text-area');
    this.$inputCustomTextButton = $('#input-custom-text-button');
    this.usingCustomText = true;
    this.visible = false;
};

Settings.prototype.isUsingCustomText = function() {
    return this.usingCustomText;
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

Settings.prototype.setCustomTextListener = function(customText) {
    var self = this;
    self.$inputCustomTextButton.click(function() {
        customText(self.$customTextArea.val());
    });
};

Settings.prototype.isVisible = function() {
    return this.visible;
};
