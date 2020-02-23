$(document).ready(function() {
	var video = $('.video-wrapper').find('video')[0];
	$('.video-wrapper').hover(hovericon, hideicon);
	$('.icon-wrapper-pause').hide();
	$('.icon-wrapper , .icon-wrapper-pause').click(function() {
		video.paused ? video.play() && $(this).fadeOut(1000) : video.pause();
	});

	function hovericon(e) {
		if (!video.paused) {
			$('.icon-wrapper-pause').fadeIn(1000);
        }
        else{
            $('.icon-wrapper').fadeIn(1000);
        } 
	}

	function hideicon(e) {
		$('.icon-wrapper-pause').fadeOut(1000);
	}
});
