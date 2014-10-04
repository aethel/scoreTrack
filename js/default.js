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
   
   	//make player number buttons disabled
   for(var i = 0; i<playerNumberBtn.length; i++){
  		playerNumberBtn[i].setAttribute('disabled','true');		
	}   
 	
 	window.onunload = function(){
 		for(var i = 0; i<playerNumberBtn.length; i++){
  			playerNumberBtn[i].removeAttribute('disabled');		
		} 
 	};
};

function addPlayers(playersNumber){ 

	var playersList = document.querySelectorAll('.js-players-list')[0];
	var listItem = document.createElement('li');
		
	// add this many players
	for(var i = 0;i<playersNumber;i++){
		console.log(i);
		var listItem = document.createElement('li');
		listItem.innerHTML = '<button class="col mobile-col-1-3 js-add-point">+</button><div class="col mobile-col-1-3 text-center js-score"> 0 </div><button class="col mobile-col-1-3 right js-subtract-point">-</button><div class="row text-center no-padding">colour</div>';
		listItem.classList.add('row');
		listItem.classList.add('no-padding');
		playersList.insertBefore(listItem, playersList.firstChild);	
	}
	
	changeScore();
	
	
}


var score;

function changeScore(){
	var addPointBtn = document.querySelectorAll('.js-add-point');
	var removePointBtn = document.querySelectorAll('.js-subtract-point');
	
	for(var i=0;i<addPointBtn.length;i++){
		addPointBtn[i].addEventListener('click',function(){
			score = parseInt(this.nextElementSibling.textContent);
			this.nextElementSibling.textContent = score+1;
		},false);
	}
	
	console.log(removePointBtn[0]);
	for(var i=0;i<removePointBtn.length;i++){
		removePointBtn[i].addEventListener('click',function(){			
			score = parseInt(this.previousElementSibling.textContent);
			this.previousElementSibling.textContent = score-1;
		},false);
	}
	
}



/*
function populateList(){
	var li = document.createElement('li');
}
*/