var App = function() {
    var $doc = $(document);
    var $mainFocus = $('#main-focus');
    var randomWords = new RandomWords();
    var settings = new Settings();
    var lettersView = new LetterView();

    function refreshWords() {
        var range = settings.getRange();
        var words = randomWords.getLetters(range);
        lettersView.loadValues(words);
    }

    function focusOnLetter() {
        if (settings.isVisible()) return;
        $mainFocus.focus();
    }

    $doc.click(focusOnLetter)
        .keydown(focusOnLetter);


    $mainFocus.on('input', function() {
        lettersView.input(this.value);
        this.value = '';
    });

    settings.adjustRangeListener(refreshWords);

    refreshWords();
};
