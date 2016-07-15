var Letter = function(v) {
    var value = v;
    var $element = $('<div class="letter">'+value+'</div>');
    var $letters = $('#letters-view');

    function changeValue(value) {
        $element.empty().append(value);
    }

    function highlightCorrect() {
        $element.addClass('highlightCorrect');
    }

    function highlightIncorrect() {
        $element.addClass('highlightIncorrect');
    }

    this.underline = function() {
        $element.addClass('underline');
    };

    this.removeUnderline = function() {
        $element.removeClass('underline');
    };

    this.removeHighlight = function() {
        $element.removeClass('highlightIncorrect');
        $element.removeClass('highlightCorrect');
    };

    this.render = function() {
        $letters.append($element);
    };

    this.revertInitalValue = function() {
        $element.empty().append(value);
    };

    this.getValue = function() {
        return value;
    };

    this.matches = function(v) {
        if (value === v) {
            highlightCorrect();
            return true;
        } else {
            changeValue(v);
            highlightIncorrect();
            return false;
        }
    };
};