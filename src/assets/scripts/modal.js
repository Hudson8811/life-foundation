'use strict';
$(document).ready(function() {
	$('a[data-modal]').on('click',function (){
		$($(this).data('modal')).modal({
			showClose: true,
			fadeDuration: 100
		});
		return false;
	});
});
