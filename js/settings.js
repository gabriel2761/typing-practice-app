var Settings = function() {
    var $settingsView = $('#settings-view');
    var $settingsTab = $('#settings-navbar-tab');
    var $applySettingsButton = $('#apply-settings-button');
    var $minLetterRangeInput = $('#minletter-range-input');
    var $maxLetterRangeInput = $('#maxletter-range-input');

    var minLetterRange = 3;
    var maxLetterRange = 5;

    $settingsTab.click(toggleVisiblity);

    function toggleVisiblity() {
        $settingsView.toggleClass('hidden');
    }

    function updateLetterRanges() {
        var min = parseInt($minLetterRangeInput.val());
        var max = parseInt($maxLetterRangeInput.val());
        if (isNaN(min)) minLetterRange = 3;
        if (isNaN(max)) maxLetterRange = 5;
    }

    this.getRange = function() {
        return { 'min': minLetterRange, 'max': maxLetterRange };
    };

    this.isVisible = function() {
        return !$settingsView.hasClass('hidden');
    };

    this.adjustRangeListener = function(range) {
        $applySettingsButton.click(function() {
            updateLetterRanges();
            toggleVisiblity();
        });
    };

};