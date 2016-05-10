var value = 'public static void main string args this function hello word cout hello this private String list Arraylist'.split('').reverse();
var w = "the of and to a in for is on that by this with i you itnot or be are from at as your all have new more an was we will home can us about if page my has search free but our one other do no information time they site he up may what which their news out use any there see only so his when contact here business who web also now help get pm view online c e first am been would how were me s services some these click its like service x than find price date back top people had list name just over state year day into email two health n world re next used go b work last most products music buy data make them should product system post her city t add policy number such please available copyright support message after best software then jan good video well d where info rights public books high school through m each links she review years order very privacy book items company r read group sex need many user said de does set under general research university january mail full map reviews program life know games way days management p part could great united hotel real f item international center ebay must store travel comments made development report off member details line terms before hotels did send right type because local those using results office education national car design take posted internet address community within states area want phone dvd shipping reserved subject between forum family l long based w code show o even black check special prices website index being women much sign file link open today technology south case project same pages uk version section own found sports house related security both g county american photo game members power while care network down computer systems three total place end following download h him without per access think north resources current posts big media law control water history pictures size art personal since including guide shop directory board location change white text small rating rate government children during usa return students v shopping account times sites level digital profile previous form events love old john main call hours image department title description non k y insurance another why shall property class cd still money quality every listing content country private little visit save tools low reply customer december compare movies include college value article york man card jobs provide j food source author different press u learn sale around print course job canada process teen room stock training too credit point join science men categories advanced west sales look english left team estate box conditions select windows photos gay thread week category note live large gallery table register however june october november market library really action start series model features air industry plan human provided tv yes required second hot accessories cost movie forums march la september better say questions july yahoo going medical test friend come dec server pc study application cart staff articles san feedback again play looking issues april never users complete street topic comment financial things working against standard tax person below mobile less got blog party payment equipment login student let programs offers legal above recent park stores side act problem red give memory performance social q august quote language story sell options experience rates create key body young america important field few east paper single ii age activities club example girls additional password z latest something road gift question changes night ca hard texas oct pay four poker status browse issue range building seller court february always result audio light write war nov offer blue groups al easy given files event release analysis request fax china making picture needs possible might professional yet month major star areas future space committee hand sun cards problems london washington meeting rss become interest id child keep enter california porn share similar garden schools million added reference companies listed baby learning energy run delivery net popular term film stories put computers journal reports co try welcome central images president notice god original head radio until cell color self council away includes track australia discussion archive once others entertainment agreement format least society months log safety friends sure faq trade edition cars messages marketing tell further updated association able having provides david fun already green studies close common drive specific several gold feb living sep collection called short arts lot ask display limited powered solutions means director daily beach past natural whether due et electronics five upon period planning database says official weather mar land average done technical window france pro region island record direct microsoft conference environment records st district calendar costs style url front statement update parts aug ever downloads early miles sound resource present applications either ago document word wo".split(' ').reverse();
console.log(w.length);
var randomWords = "";

for (var i = 0; i < 20; i++) {
    randomWords += ' ' + w[Math.floor(Math.random() * w.length)];
}

var randomLetters = randomWords.split('').reverse();

var Letters = function() {
    this.element = $('#letter');
    this.values = randomLetters;
    this.letters = [];
    this.typed = [];
};

Letters.prototype.backspace = function() {
    if (this.typed.length === 0) return;
    var last = this.getLast();
    var letter = this.typed.pop();
    last.removeUnderline();
    this.letters.push(letter);
    letter.changeBack();
    letter.markNormal();
    this.underlineLast();
};

Letters.prototype.resetLetters = function() {

};

Letters.prototype.input = function(letter) {
    if (letters.length === 0) this.resetLetters();
    var last = this.getLast();
    if (this.letters.length !== 0 && last.matches(letter)) {
        last.markCorrect();
    } else {
        last.change(letter);
        last.markIncorrect();
    }
    last.removeUnderline();
    this.typed.push(this.letters.pop());
    this.underlineLast();
};

Letters.prototype.getLast = function() {
    return this.letters[this.letters.length - 1];
};

Letters.prototype.underlineLast = function() {
    this.getLast().underline();
};

Letters.prototype.initialize = function() {
    var self = this;
    this.values.forEach(function(value) {
        self.letters.push(new Letter(value));
    });
    this.underlineLast();
};

Letters.prototype.render = function() {
    this.letters.forEach(function(letter) {
        letter.render();
    });
};