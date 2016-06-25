var Settings = function() {
    var $settingsView = $('#settings-view');
    var $settingsTab = $('#settings-navbar-tab');
    var $applySettingsButton = $('#apply-settings-button');

    var minLetterRange = 3;
    var maxLetterRange = 5;

    function toggleVisiblity() {
        $settingsView.toggleClass('hidden');
    }

    $settingsTab.click(toggleVisiblity);

    this.getRange = function() {
        return { 'min': minLetterRange, 'max': maxLetterRange };
    };

    this.isVisible = function() {
        return !$settingsView.hasClass('hidden');
    };

    this.adjustRangeListener = function(range) {
        $applySettingsButton.click(function() {
            range({ 'min': minLetterRange, 'max': maxLetterRange });
            toggleVisiblity();
        });
    };

};