var TypingInfo = function() {
    var $lettersTypedView = $('#letters-typed-view');
    var $wpmView = $('#wpm-view');
    var lettersTyped = 0;
    var tempLettersTyped = 0;
    var timeElapsed = 0;
    var afkTimeout = null;
    var wpsIntervalUpdate = null;

    function setAfkTimeout() {
        afkTimeout = setTimeout(function() {
            timeElapsed = 0;
            tempLettersTyped = 0;
            stopWpsIntervalUpdate();
            console.log('timer out cleared');
        }, 7000);
    }

    function setWpsIntervalUpdate() {
        if (wpsIntervalUpdate !== null) return;
        wpsIntervalUpdate = setInterval(function() {
            var words = tempLettersTyped / 5;
            var wps = words / (++timeElapsed);
            $wpmView.text('WPM: ' + Math.round(wps * 60));
            console.log(tempLettersTyped + ' ' + timeElapsed);
        }, 1000);
    }

    function stopWpsIntervalUpdate() {
        clearInterval(wpsIntervalUpdate);
        wpsIntervalUpdate = null;
    }

    function clearAfkTimeout() {
        clearTimeout(afkTimeout);
    }

    this.incrementTypeCount = function() {
        $lettersTypedView.text('Letters Typed ' + (++lettersTyped));
        tempLettersTyped++;
        clearAfkTimeout();
        setAfkTimeout();
        setWpsIntervalUpdate();
    };

    this.decrementTypeCount = function() {
        $lettersTypedView.text('Letters Typed ' + (--lettersTyped));
    };
};