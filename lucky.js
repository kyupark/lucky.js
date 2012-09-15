function lucky(it) {
	var text = String(it.text()).split('-').join('').split(' ').join('+');
	var url = 'http://www.google.com/search?btnI&q=' + text;
	it.html('<a target="_blank" href="' + url + '">' + it.text() + '</a>');
}

$(document).ready(function() {
 	$('.cont > li').each(lucky($(this)));
 	$('.cont > em').each(lucky($(this)));
 	$('.cont > strong').each(lucky($(this)));
});