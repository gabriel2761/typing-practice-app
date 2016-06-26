var LetterView = function() {
    var $letters = $('#letters-view');
    var letters = [];

    function getLastLetter() {
        return letters[letters.length - 1];
    }

    function underlineLast() {
        getLastLetter().addClass('underline');
    }

    this.loadValues = function(values) {
        $letters.empty();
        values.forEach(function(value) {
            var letter = new Letter(value);
            letters.push(letter);
            letter.render();
        });
    };

    this.input = function(value, callback) {
        if (getLastLetter().matches(value)) {
            callback('match');
        } else {
            callback('mistake');
        }

        if (letters.length <= 1) {
            callback('refresh');
        }

        letters.pop();
    };

};