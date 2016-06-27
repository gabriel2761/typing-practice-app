var MistakesView = function() {
    var $mistakesCount = $('#mistakes-count');
    var $mistakesLetterView = $('#mistakes-letter-view');
    var totalMistakeCount = 0;
    var mistakes = [];

    var Mistake = function(mistakeInfo) {
        this.mistake = mistakeInfo.mistake;
        this.letter = mistakeInfo.letter;
        this.count = 1;

        this.matches = function(mistakeInfo) {
            return this.mistake === mistakeInfo.mistake &&
                this.letter === mistakeInfo.letter;
        };
    };

    function sortMistakes(a, b) {
        return b.count - a.count;
    }

    function updateMistakes(mistakeInfo) {
        for (var i = 0; i < mistakes.length; i++) {
            if (mistakes[i].matches(mistakeInfo)) {
                mistakes[i].count++;
                return;
            }
        }
        mistakes.push(new Mistake(mistakeInfo));
    }

    function updateMistakeView() {
        $mistakesLetterView.empty();
        mistakes.forEach(function(mistake) {
            var view = $('<div>'+mistake.letter+
                ' -> '+ mistake.mistake +'  count: '+mistake.count +'</div>');
            $mistakesLetterView.append(view);
        });
    }

    function incrementMistakeCount() {
        $mistakesCount.text('Mistakes: ' + (++totalMistakeCount));
    }

    this.addMistake = function(mistakeInfo) {
        updateMistakes(mistakeInfo);
        incrementMistakeCount();
        mistakes.sort(sortMistakes);
        updateMistakeView();
    };
};