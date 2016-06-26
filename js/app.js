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
        lettersView.input(this.value, function(callback) {
            switch (callback) {
                case 'refresh':
                    console.log('refreshed');
                    refreshWords();
                    break;
                case 'mistake':
                    console.log('mistake');
                    break;
                case 'match':
                    console.log('match');
                    break;
                default:
                    break;
            }
        });
        this.value = '';
    });

    settings.adjustRangeListener(refreshWords);
    refreshWords();
};
