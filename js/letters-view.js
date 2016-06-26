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
        if (cursorIndex === 0) return;
        currentLetter().removeUnderline();
        cursorIndex--;
        currentLetter().revertInitalValue();
        currentLetter().removeHighlight();
        currentLetter().underline();
    };

    this.loadValues = function(values) {
        $letters.empty();
        values.forEach(function(value) {
            var letter = new Letter(value);
            letters.push(letter);
            letter.render();
        });
        currentLetter().underline();
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