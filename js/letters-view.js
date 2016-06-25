var LetterView = function() {
    var $letters = $('#letters-view');
    var letters = [];

    this.loadValues = function(values) {
        values.forEach(function(value) {
            var letter = new Letter(value);
            letters.push(letter);
            letter.render();
        });
    };

    this.input = function(value) {
        console.log(value);
    };

};