/* ==========================================================
  Base Default JavaScript
  -- Table of Contents --
*/


// JS functions and initiations go here...

var playerNumberBtn = document.querySelectorAll('.js-player-number');

for(var i = 0; i<playerNumberBtn.length; i++){
	playerNumberBtn[i].addEventListener('click',checkPlayers,false);
		
}


function checkPlayers(){
  console.log('newItem');
   var playersNumber = parseInt(this.textContent);
   //console.log(playersNumber);
   addPlayers(playersNumber);
   
   for(var i = 0; i<playerNumberBtn.length; i++){
  		playerNumberBtn[i].setAttribute('disabled','true');		
	}   
 
};

function addPlayers(playersNumber){ 
	//playersNumber = parseInt(playersNumber);
	console.log(playersNumber);
	var playersList = document.querySelectorAll('.js-players-list')[0];
	var listItem = document.createElement('li');
		
	// add this many players
	for(var i = 0;i<playersNumber;i++){
		console.log(i);
		var listItem = document.createElement('li');
		listItem.innerHTML = '<button class="col mobile-col-1-3">+</button><div class="col mobile-col-1-3 text-center"> 999 </div><button class="col mobile-col-1-3 right">-</button><div class="row text-center no-padding">colour</div>';
		listItem.classList.add('row');
		listItem.classList.add('no-padding');
		playersList.insertBefore(listItem, playersList.firstChild);	
	}
	
	//make player number buttons disabled
	
	
}
function disablebuttons(){
	
}


/*
function populateList(){
	var li = document.createElement('li');
}
*/