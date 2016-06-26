var Letter = function(v) {
    var value = v;
    var $element = $('<span class="letter">'+value+'</span>');
    var $letters = $('#letters-view');

    function changeValue(value) {
        $element.empty().append(value);
    }

    function highlightCorrect() {
        $element.addClass('highlight');
    }

    function markIncorrect() {
        $element.addClass('incorrect');
    }

    this.underline = function() {
        $element.addClass('underline');
    };

    this.removeUnderline = function() {
        $element.removeClass('underline');
    };

    this.render = function() {
        $letters.append($element);
    };

    this.revertInitalValue = function() {
        $element.empty().append(value);
    };

    this.matches = function(v) {
        if (value === v) {
            highlightCorrect();
            return true;
        } else {
            changeValue(v);
            markIncorrect();
            return false;
        }
    };
};