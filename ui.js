$(document).ready(function() {

	var $form = $('#setup');
	var $prose = $('#prose');
	var $output = $('#output');

	var doIt = function() {
		var result = highlight($prose.val());
		$output.html(result);
	};

	$form.on('submit', function(event) {
		event.preventDefault();
		doIt();
	});

	$prose.val(HOLMES_TEXT);

	doIt();

});
