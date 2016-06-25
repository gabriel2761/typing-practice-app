var Settings = function() {
    var $settingsView = $('#settings-view');
    var $settingsTab = $('#settings-navbar-tab');

    var minLetterRange = 3;
    var maxLetterRange = 5;

    $settingsTab.click(function() {
        $settingsView.toggleClass('hidden');
    });

    this.getRange = function() {
        return { 'min': minLetterRange, 'max': maxLetterRange };
    }

    this.isVisible = function() {
        return !$settingsView.hasClass('hidden');
    };
};