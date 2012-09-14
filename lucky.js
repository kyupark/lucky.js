 $(document).ready(function() {
 	$('em').each(function() {
		var text = String($(this).text()).split(' ').split('-').join('+');
		var url = 'http://www.google.com/search?btnI&q=site:youtube.com+' + text;
		$(this).html('<a href="' + url + '">' + $(this).text() + '</a>');
	});
	$('strong').each(function() {
		var text = String($(this).text()).split(' ').split('-').join('+');
		var url = 'http://www.google.com/search?btnI&q=' + text;
		$(this).html('<a href="' + url + '">' + $(this).text() + '</a>');
	});
});
