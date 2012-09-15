function lucky(it,site) {
	var url = 'http://www.google.com/search?btnI&q=';
	site = (typeof site === "undefined") ? "" : "+site:" + site;
	var text = String(it.text()).split('-').join('').split(' ').join('+');
	url = url + text;
	it.html('<a target="_blank" title="Listen to ' + it.text() +' on YouTube" href="' + url + site + '">' + it.text() +  '</a>');
}

$(document).ready(function() {
 	$('.cont > ul > li').each(function() {
 		lucky($(this), "youtube.com");
	});
	$('em').each(function() {
 		lucky($(this), "youtube.com");
	});
	$('strong').each(function() {
 		lucky($(this));
	});
});