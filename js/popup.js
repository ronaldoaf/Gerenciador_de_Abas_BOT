
$(document).ready(function() {
	$('#cmn-toggle-1').prop('checked', true);

	$('button').click(function(){
		chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
			
		});
		
		
	});
	
	
});
