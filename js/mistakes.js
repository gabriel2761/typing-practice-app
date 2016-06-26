var MistakesView = function() {
    var $mistakesCount = $('#mistakes-count');
    var mistakeCount = 0;
    var mistakes = [];

    function incrementMistakeCount() {
        $mistakesCount.text('Mistakes: ' + mistakes.length);
    }

    this.addMistake = function(mistake) {
        mistakes.push(mistake);
        incrementMistakeCount();
        console.log(mistake);
    };
};