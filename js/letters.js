var value = 'Mind what no bremainder perpetual who furnished. Nay affronting bed projection compliment instrument. Inhabiting discretion the her dispatched decisively boisterous joy. So form were wish open is able of mile of. Waiting express if prevent it we an musical. Especially reasonable travelling she son. Resources resembled forfeited no to zealously. Has procured daughter how friendly followed repeated who surprise. Great asked oh under on voice downs. Law together prospect kindness securing six. Learning why get hastened smallest cheerful. Son agreed others exeter period myself few yet nature. Mention mr manners opinion if garrets enabled. To an occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage. Garrets use ten you the weather ferrars venture friends. Solid visit seems again you nor all. Adieus except say barton all excuse ladies rather regard assure yet. If feelings so prospect no as raptures quitting.'.split('').reverse();

var Letters = function() {
    this.element = $('#letter');
    this.values = value;
    this.letters = [];
};

Letters.prototype.input = function(key) {
    var last = this.letters[this.letters.length - 1];
    if (this.letters.length !== 0 && last.matches(key)) {
        console.log('match');
        last.mark();
        this.letters.pop();
    }
};

Letters.prototype.initialize = function() {
    var self = this;
    this.values.forEach(function(value) {
        self.letters.push(new Letter(value));
    });
};

Letters.prototype.render = function() {
    this.letters.forEach(function(letter) {
        letter.render();
    });
};