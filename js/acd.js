

//faqbox
var accordion_head = $('.acd-open');
accordion_head.on('click', function (event) {
	var $a = $(this);
	event.preventDefault();
	
	if ($a.hasClass('active')) {
		$a.removeClass('active').siblings('.acd-box').slideUp();
	}
	else {
		$a.addClass('active').siblings('.acd-box').slideDown();
	}
});

//