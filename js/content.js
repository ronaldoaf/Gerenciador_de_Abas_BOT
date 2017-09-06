

setInterval(function(){

	chrome.runtime.sendMessage({command:'GET', parm1:'http://aposte.me/live/n.php?i1=25&f1=40&i2=70&f2=89&intervalo=25' },function(res){
				
	});





},5000);

chrome.runtime.onMessage.addListener(function(msg) {
	if( msg.command=='GET_RESPONSE'){
		console.log(msg);		
	}
});