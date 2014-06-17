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
		ga('send', {
		  'hitType': 'event',          // Required.
		  'eventCategory': 'button',   // Required.
		  'eventAction': 'click',      // Required.
		  'eventLabel': 'nav downloadBtn_chrome',
		  'hitCallback': function() {
			//window.location.href = $('#downloadBtn').attr("href");
		  }
		});
		chrome.webstore.install(undefined, function(){
			alert("Wenn du Zeit und Lust hast und meine Mühen belohnen willst, die Erweiterung bitte bewerten. Danke!");
			window.location.href = "https://chrome.google.com/webstore/detail/myspass-adblocker/ljjdpiilfcgggfhpgboiebimccnbebcj/reviews";
		});
		return false;
	});
	
	$('#downloadBtnFirefox').on('click', function() {
		ga('send', {
		  'hitType': 'event',          // Required.
		  'eventCategory': 'buttonFox',   // Required.
		  'eventAction': 'click',      // Required.
		  'eventLabel': 'nav downloadBtn_firefox',
		  'hitCallback': function() {
			try{
				var params = {
					"MySpass Adblock": { URL: "./downloads/myspass_adblocker.xpi",
							 IconURL: "./img/icon128.png",
							 Hash: "e9392c5a03b194769f658ba62fc3ff44",
							 toString: function () { return this.URL; }
					}
				  };
				InstallTrigger.install(params);
			}catch(e){
				window.location.href = $('#downloadBtnFirefox').attr("href");
			}
		  }
		});
		return false;
	});
});