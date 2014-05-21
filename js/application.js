function detectmob() {
 if((window.innerWidth <= 800) && (window.innerHeight <= 600)) {
 		console.log("here")
   $(".polemic").prepend('<div class="mobile-tagline"><p>A Fearless Creative</p></div>')
   } else {
   	var s = skrollr.init();
   }
	}

$(document).ready(function(){
	detectmob();	
});