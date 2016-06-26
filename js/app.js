var App = function() {
    var $doc = $(document);
    var $mainFocus = $('#main-focus');
    var randomWords = new RandomWords();
    var settings = new Settings();
    var lettersView = new LetterView();

    var KEYCODE_BACKSPACE = 8;

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


    $mainFocus.keydown(function(event) {
        if (event.keyCode === KEYCODE_BACKSPACE) {
            lettersView.moveCursorPrev();
        }
    });

    $mainFocus.on('input', function() {
        lettersView.input(this.value, function(callback) {
            switch (callback) {
                case 'refresh':
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
