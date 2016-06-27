var App = function() {
    var $doc = $(document);
    var $mainFocus = $('#main-focus');
    var randomWords = new RandomWords();
    var settings = new Settings();
    var lettersView = new LetterView();
    var typingInfo = new TypingInfo();
    var mistakesView = new MistakesView();

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

    function addMistake(value) {
        var letter = lettersView.getCurrentLetterValue();

        if (value === ' ') value = 'space';
        if (letter === ' ') letter = 'space';

        typingInfo.incrementTypeCount();
        mistakesView.addMistake({
            'mistake': value,
            'letter': letter
        });
    }

    $doc.click(focusOnLetter)
        .keydown(focusOnLetter);


    $mainFocus.keydown(function(event) {
        if (event.keyCode === KEYCODE_BACKSPACE &&
            !lettersView.cursorAtStart()) {
            lettersView.moveCursorPrev();
            typingInfo.decrementTypeCount();
        }
    });

    $mainFocus.on('input', function() {
        var value = this.value;
        lettersView.input(value, function(callback) {
            switch (callback) {
                case 'refresh':
                    refreshWords();
                    break;
                case 'mistake':
                    addMistake(value);
                    break;
                case 'match':
                    typingInfo.incrementTypeCount(refreshWords);
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
