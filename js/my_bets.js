$(document).ready(function(){


//Se não estiver numa tela do MyBets, não faz nada
if (!location.hash.includes('MyBets')) return;



console.log('MyBets');


//Loope principal
setInterval(function(){
	login();
	
	//Se não estiver no Live Now, coloca 
	if ( $('.myb-OpenBetFallbackHeader_DropDownSelector').text()!='Live Now' ) $('.myb-OpenBetFallbackHeader_Button:contains(Live Now)').click();
	
	
	var myBetsList=[];
	
	$('.myb-OpenBetItem').each(function(){  
		myBetsList.push({
			mercado: $(this).find('.myb-OpenBetParticipant_MarketDescription').text(),
            match: $(this).find('.myb-OpenBetParticipant_FixtureDescription').clone().children().remove().end().text(),	
			cash_out_return: Number($(this).find('.myb-CloseBetButton_Return').text().split(' ')[0])
		});

	});
	localStorage['myBetsList']=JSON.stringify(myBetsList);
	localStorage['myBetsLastUpdate']=(+new Date());
	
	
	
	
},1000);


	
});