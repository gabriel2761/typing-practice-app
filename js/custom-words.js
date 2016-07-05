var CustomWords = function() {
    var $customTextArea = $('#custom-text-area');
    var $customTextCheckBox = $('#custom-text-checkbox');

    this.empty = function() {
        return !$customTextArea.val();
    };

    this.getNextWords = function() {
        var letters = $customTextArea.val();

        if (letters.length >= 38) {
            letters = letters.slice(0, 38);
            var value = $customTextArea.val().slice(38);
            $customTextArea.val(value);
        } else {
            $customTextCheckBox.removeClass('highlight');
            $customTextArea.val('');
        }

        letters = letters
            .replace(/\n/g, ' ')
            .replace(/ +(?= )/g, '')
            .split('');

        if (letters[0] == ' ') letters.shift();
        if (letters[letters.length - 1] == ' ') letters.pop();

        return letters;
    };
};