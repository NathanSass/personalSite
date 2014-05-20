function detectmob() {
 if((window.innerWidth <= 800) && (window.innerHeight <= 600)) {
   return true;
   } else {
   	var s = skrollr.init();
   }
	}

$(document).ready(function(){
	detectmob();	
});