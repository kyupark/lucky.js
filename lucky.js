function lucky(it,site) {
	var url = 'http://www.google.com/search?btnI&q=';
	if (site ==! undefined) {
		url = url + "+site:" + site + "+";

	}
	var text = String(it.text()).split('-').join('').split(' ').join('+');
	url = url + text;
	it.html('<a target="_blank" href="' + url + '">' + it.text() + '</a>');
}

$(document).ready(function() {
 	$('.cont > li').each(function() {
 		lucky($(this), "youtube.com");
	});
	$('em').each(function() {
 		lucky($(this), "youtube.com");
	});
	$('strong').each(function() {
 		lucky($(this));
	});
});