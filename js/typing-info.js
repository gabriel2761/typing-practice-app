var TypingInfo = function() {
    var $lettersTypedView = $('#letters-typed-view');
    var $wpmView = $('#wpm-view');
    var lettersTyped = 0;
    var wpm = 0;
    var tempLettersTyped = 0;
    var timeElapsed = 0;
    var afkTimeout = null;

    setInterval(updateWpsView, 1000);

    function setAfkTimeout() {
        afkTimeout = setTimeout(function() {
            timeElapsed = 0;
            tempLettersTyped = 0;
            console.log('timer out cleared');
        }, 7000);
    }

    function clearAfkTimeout() {
        clearTimeout(afkTimeout);
    }

    function updateWpsView() {
        var words = tempLettersTyped / 5;
        var wps = words / (++timeElapsed);
        $wpmView.text('WPM: ' + Math.round(wps * 60));
    }

    this.incrementTypeCount = function() {
        $lettersTypedView.text('Letters Typed ' + (++lettersTyped));
        tempLettersTyped++;
        clearAfkTimeout();
        setAfkTimeout();
    };

    this.decrementTypeCount = function() {
        $lettersTypedView.text('Letters Typed ' + (--lettersTyped));
    };
};