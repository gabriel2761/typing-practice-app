var MistakesView = function() {
    var $mistakesCount = $('#mistakes-count');
    var mistakeCount = 0;
    var mistakes = [];

    function incrementMistakeCount() {
        $mistakesCount.text('Mistakes: ' + (++mistakeCount));
    }

    this.addMistake = function(mistake) {
        incrementMistakeCount();
    }
};