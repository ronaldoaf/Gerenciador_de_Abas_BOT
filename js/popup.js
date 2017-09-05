
$(document).ready(function() {
	chrome.storage.sync.get('bot_ligado', function(obj) { 
		if (obj.bot_ligado==true) $('#cmn-toggle-1').prop('checked', true);
	});
	

	$("#cmn-toggle-1").change(function() {
		if(!this.checked) {
			chrome.storage.sync.get({bot_ligado: true});
		}
		else{
			chrome.storage.sync.get({bot_ligado: false});
		}
	});
	
	
	setInterval(function(){

		
		
	},1000);
	
	
	
	/*
	$('button').click(function(){
		chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
			
		});		
	});
	*/
	
});
