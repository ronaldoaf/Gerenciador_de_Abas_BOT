$(document).ready(function(){
    alert("working");
	chrome.runtime.onMessage.addListener(function(msg){
		console.log(msg);
		
	});

});



