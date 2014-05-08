if($.cookie("css")) {
    $("#style").attr("href",$.cookie("css"));
}
$(document).ready(function() { 
    $("a.color-box").click(function() { 
         $("#style").attr("href",$(this).attr('rel'));		 
         $.cookie("css",$(this).attr('rel'), {expires: 365, path: '/'});
         return false;
    });	 
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
	
	$('#downloadBtn').on('click', function() {
		ga('send', 'event', 'button', 'click', 'downloadBtn_chrome');
	});
});