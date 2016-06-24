var Settings = function() {
    this.$settingsView = $('#settings-view');
    this.$settingsButton = $('#settings-button');
    this.$customTextArea = $('#custom-text-area');
    this.$inputCustomTextButton = $('#input-custom-text-button');
    this.$settingsExitButton = $('#settings-exit-button');
    this.$highestRangeInput = $('#highest');
    this.$lowestRangeInput = $('#lowest');
    this.usingCustomText = false;
    this.visible = false;
};

Settings.prototype.turnOffCustomText = function() {
    this.usingCustomText = false;
};

Settings.prototype.isUsingCustomText = function() {
    return this.usingCustomText;
};

Settings.prototype.renderListener = function() {
    var self = this;
    self.$settingsButton.click(function() {
        if (self.$settingsView.hasClass('hidden')) {
            self.$settingsView.removeClass('hidden');
            self.visible = true;
        } else {
            self.$settingsView.addClass('hidden');
            self.visible = false;
        }
    });
	self.$settingsExitButton.click(function() {
		self.$settingsView.addClass('hidden');
	});

    var $minletters = $('#min-letters');
    var $maxletters = $('#max-letters');

    $minletters.focusout(function() {
        if (this.value < 2) {
            this.value = 2;
        } else if (this.value > parseInt($maxletters.val())) {
            this.value = parseInt($maxletters.val());
        }
    });

    $maxletters.focusout(function() {
        if (this.value > 12) {
            this.value = 12;
        } else if (this.value > parseInt($minletters.val())) {
            this.value = parseInt($minletters.val());
        } else if (this.value === '') {
            this.value = parseInt($minletters.val());
        }
    });

    $('#min-range-decrement').click(function() {
        var value = parseInt($minletters.val());
        if (value <= 2) return;
        $minletters.val(--value);
    });
    $('#min-range-increment').click(function() {
        var value = parseInt($minletters.val());
        if (value >= parseInt($maxletters.val())) return;
        $minletters.val(++value);
    });
    $('#max-range-decrement').click(function() {
        var value = parseInt($maxletters.val());
        if (value <= parseInt($minletters.val())) return;
        $maxletters.val(--value);
    });
    $('#max-range-increment').click(function() {
        var value = parseInt($maxletters.val());
        if (value >= 12) return;
        $maxletters.val(++value);
    });
};

Settings.prototype.setCustomTextListener = function(customText) {
    var self = this;
    self.$inputCustomTextButton.click(function() {
        self.$settingsView.addClass('hidden');
        self.visible = false;
        self.usingCustomText = true;
        $(document).click();
        customText(self.$customTextArea.val());
    });
};

Settings.prototype.setLetterRange = function(range) {
    var self = this;
    var $minletters = $('#min-letters');
    var $maxletters = $('#max-letters');
    self.$settingsExitButton.click(sendRange);
    self.$settingsButton.click(sendRange);
    function sendRange() {
        if (!self.$settingsView.hasClass('hidden')) {
            range({
                'min': $minletters.val(),
                'max': $maxletters.val()
            });
        }
    }
};

Settings.prototype.isVisible = function() {
    return this.visible;
};
