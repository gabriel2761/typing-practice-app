var TypingInfo = function() {
    var $lettersTypedView = $('#letters-typed-view');
    var $wpmView = $('#wpm-view');
    var lettersTyped = 0;
    var tempLettersTyped = 0;
    var secondsElapsed = 0;
    var afkTimeout = null;
    var wpsIntervalUpdate = null;
    var self = this;

    function setAfkTimeout(refreshWords) {
        afkTimeout = setTimeout(function() {
            secondsElapsed = 0;
            tempLettersTyped = 0;
            stopWpsIntervalUpdate();
            $wpmView.text('WPM: ' + 0);
            refreshWords();
        }, 7000);
    }

    function setWpsIntervalUpdate() {
        if (wpsIntervalUpdate !== null) return;
        wpsIntervalUpdate = setInterval(function() {
            var words = tempLettersTyped / 5;
            var wps = words / (++secondsElapsed);
            $wpmView.text('WPM: ' + Math.round(wps * 60));
        }, 1000);
    }

    function stopWpsIntervalUpdate() {
        clearInterval(wpsIntervalUpdate);
        wpsIntervalUpdate = null;
    }

    function stopAfkTimeout() {
        clearTimeout(afkTimeout);
    }

    this.incrementTypeCount = function(refreshWords) {
        $lettersTypedView.text('Letters Typed ' + (++lettersTyped));
        tempLettersTyped++;
        stopAfkTimeout();
        setAfkTimeout(refreshWords);
        setWpsIntervalUpdate();
    };

    this.decrementTypeCount = function() {
        $lettersTypedView.text('Letters Typed ' + (--lettersTyped));
    };
};