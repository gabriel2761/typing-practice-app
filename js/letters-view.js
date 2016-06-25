var LetterView = function() {
    var $letters = $('#letters-view');
    var letters = [];

    function getLastLetter() {
        return letters[letters.length - 1];
    }

    this.loadValues = function(values) {
        $letters.empty();
        values.forEach(function(value) {
            var letter = new Letter(value);
            letters.push(letter);
            letter.render();
        });
    };

    this.input = function(value) {
        if (getLastLetter().matches(value)) {
        } else {
            console.log('miss: ' + value);
        }
        letters.pop();
    };

};