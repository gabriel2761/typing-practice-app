$('.two-numbers').keyup(function() {
    this.value = this.value.replace(/[^0-9\.]/g,'');
}).keydown(function() {
	if (this.value.length >= 2) {
		this.value = Math.floor(this.value/10);
	}
});



var app = new App();

app.initialize();
app.render();
