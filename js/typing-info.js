var TypingInfo = function() {
    var $lettersTypedView = $('#letters-typed-view');
    var $wpmView = $('#wpm-view');

    var lettersTyped = 0;
    var wpm = 0;

    var tempLettersTyped = 0;
    var timeElapsed = 0;

    setInterval(updateWpsView, 1000);

    function updateWpsView() {
        var words = tempLettersTyped / 5;
        var wps = words / (++timeElapsed);
        var wpm = Math.round(wps * 60);
        $wpmView.text('WPM: ' + wpm);
    }

    this.incrementTypeCount = function() {
        $lettersTypedView.text('Letters Typed ' + (++lettersTyped));
        tempLettersTyped++;
    };

    this.decrementTypeCount = function() {
        $lettersTypedView.text('Letters Typed ' + (--lettersTyped));
    };
};