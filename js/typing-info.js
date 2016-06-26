var TypingInfo = function() {
    var $lettersTypedView = $('#letters-typed-view');
    var $wpmView = $('#wpm-view');

    var lettersTyped = 0;
    var wpm = 0;

    this.incrementTypeCount = function() {
        $lettersTypedView.text('Letters Typed ' + (++lettersTyped));
    };

    this.decrementTypeCount = function() {
        $lettersTypedView.val('Letters Typed ' + (--lettersTyped));
    };
};