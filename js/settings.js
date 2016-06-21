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
    $('#min-range-decrement').click(function() {
        var $min = $('#min-letters');
        var value = $min.val();
        $min.val(--value);
    });
    $('#min-range-increment').click(function() {
        var $min = $('#min-letters');
        var value = $min.val();
        $min.val(++value);
    });
    $('#max-range-decrement').click(function() {
        var $min = $('#max-letters');
        var value = $min.val();
        $min.val(--value);
    });
    $('#max-range-increment').click(function() {
        var $min = $('#max-letters');
        var value = $min.val();
        $min.val(++value);
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
    var minletters = $('#min-letters');
    var maxletters = $('#max-letters');
    self.$settingsExitButton.click(sendRange);
    self.$settingsButton.click(sendRange);
    function sendRange() {
        if (!self.$settingsView.hasClass('hidden')) {
            range({
                'min': minletters.val(),
                'max': maxletters.val()
            });
        }
    }
    $('.two-numbers').keyup(function() {
        this.value = this.value.replace(/[^0-9\.]/g,'');
        if (this.value >= 13) {
            this.value = 13;
        }
    }).keydown(function() {
        if (this.value.length >= 2) {
            this.value = Math.floor(this.value/10);
        }
    });
    $('#min-letters').keyup(function() {
        console.log('min');
    });
    $('#max-letters').keyup(function() {
        console.log('max');
    });
};

Settings.prototype.isVisible = function() {
    return this.visible;
};
