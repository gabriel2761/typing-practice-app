var Letter = function(v) {
    var value = v;
    var $element = $('<span class="letter">'+value+'</span>');
    var $letters = $('#letters-view');

    function changeValue(value) {
        $element.empty().append(value);
    }

    function highlightCorrect() {

    }

    this.render = function() {
        $letters.prepend($element);
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
            return false;
        }
    };
};