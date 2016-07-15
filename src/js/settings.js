var Settings = function() {
    var $settingsView = $('#settings-view');
    var $settingsTab = $('#settings-navbar-tab');
    var $applySettingsButton = $('#apply-settings-button');
    var $minLetterRangeInput = $('#minletter-range-input');
    var $maxLetterRangeInput = $('#maxletter-range-input');
    var $customTextCheckbox = $('#custom-text-checkbox');
    var $settingExitButton = $('#settings-exit-button');

    var minLetterRange = 3;
    var maxLetterRange = 5;

    function toggleVisiblity() {
        $settingsView.toggleClass('hidden');
    }

    function updateLetterRanges() {
        minLetterRange = parseInt($minLetterRangeInput.val());
        maxLetterRange = parseInt($maxLetterRangeInput.val());
        if (isNaN(minLetterRange)) minLetterRange = 3;
        if (isNaN(maxLetterRange)) maxLetterRange = 5;
    }

    $settingExitButton.click(toggleVisiblity);
    $settingsTab.click(toggleVisiblity);

    $customTextCheckbox.click(function() {
        $customTextCheckbox.toggleClass('highlight');
    });

    $minLetterRangeInput.focusout(function() {
        var min = parseInt($minLetterRangeInput.val());
        var max = parseInt($maxLetterRangeInput.val());
        if (min < 2) {
            this.value = 2;
        } else if (min > 12) {
            this.value = 12;
            $maxLetterRangeInput.val(12);
        } else if (min > max || isNaN(max) && min > 5) {
            $maxLetterRangeInput.val(this.value);
        }
    });

    $maxLetterRangeInput.focusout(function() {
        var min = parseInt($minLetterRangeInput.val());
        var max = parseInt($maxLetterRangeInput.val());
        if (max > 12) {
            this.value = 12;
        } else if(max < 2) {
            this.value = 2;
            $minLetterRangeInput.val(2);
        } else if (max < min || isNaN(min) && max < 3) {
            $minLetterRangeInput.val(this.value);
        }
    });

    this.getRange = function() {
        return { 'min': minLetterRange, 'max': maxLetterRange };
    };

    this.isVisible = function() {
        return !$settingsView.hasClass('hidden');
    };

    this.isUsingCustomText = function() {
        return $customTextCheckbox.hasClass('highlight');
    };

    this.applySettingsListener = function(callback) {
        $applySettingsButton.click(function() {
            updateLetterRanges();
            toggleVisiblity();
            callback();
        });
    };

};