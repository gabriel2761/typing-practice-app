var LetterView = function() {
    var $letters = $('#letters-view');
    var letters = [];
    var cursorIndex = 0;

    function currentLetter() {
        return letters[cursorIndex];
    }

    function moveCursorNext() {
        currentLetter().removeUnderline();
        cursorIndex++;
        currentLetter().underline();
    }

    this.moveCursorPrev = function() {
        currentLetter().removeUnderline();
        cursorIndex--;
        currentLetter().revertInitalValue();
        currentLetter().removeHighlight();
        currentLetter().underline();
    };

    this.cursorAtStart = function() {
        return cursorIndex === 0;
    };

    this.loadValues = function(values) {
        letters = [];
        $letters.empty();
        values.forEach(function(value) {
            var letter = new Letter(value);
            letters.push(letter);
            letter.render();
        });
        cursorIndex = 0;
        currentLetter().underline();
    };

    this.getCurrentLetterValue = function() {
        return currentLetter().getValue();
    };

    this.input = function(value, callback) {
        if (currentLetter().matches(value)) {
            callback('match');
        } else {
            callback('mistake');
        }

        if (cursorIndex === letters.length - 1) {
            callback('refresh');
        } else {
            moveCursorNext();
        }
    };


};