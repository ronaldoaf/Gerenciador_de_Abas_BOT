function includes_list(lista, padrao){
	var contem=false;
	$(lista).each(function(){
		if(this.includes(padrao) ) contem=true;		
	});
	return contem;
	
}

var bot_ligado;

$(document).ready(function(){
	chrome.runtime.onMessage.addListener(function(msg){
		console.log(msg);
		
	});
	
    tab_urls=[];
	setInterval(function(){
		
		chrome.storage.sync.get('bot_ligado', function(obj) { 
			bot_ligado=obj.bot_ligado;
		});
		
		if (bot_ligado){
			tab_urls=[];
			chrome.tabs.query({},function(tabs){			
				$(tabs).each(function(){
					tab_urls.push(this.url);		
				});	
				if (!includes_list(tab_urls, '151014714C1_1_3') ) chrome.tabs.create({url:'https://mobile.365sport365.com/#type=Coupon;key=151014714C1_1_3;'});
				if (!includes_list(tab_urls, '151017012C1_1_3') ) chrome.tabs.create({url:'https://mobile.365sport365.com/#type=Coupon;key=151017012C1_1_3;'});
				if (!includes_list(tab_urls, 'MyBets') ) chrome.tabs.create({url:'https://mobile.365sport365.com/#type=MyBets;key=;ip=0;lng=1'});
				
			});		
		}
		
	},1000)
	
	
});





