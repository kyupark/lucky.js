$('a').each(function() {
	var $a = $(this)
	var $href = $a.attr('href')
	if ($href == "http://youtube.com") {
		var $text = String($a.text()).split(' ').join('+');
		$(this).attr('href', "http://www.google.com/search?btnI&q=" + $text + "+site:" + $href);
	}
});
