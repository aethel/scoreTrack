var scoreList = {
	playerNumberBtn: document.querySelectorAll('.js-player-number'),
	buttonsContainer: document.getElementById('players-number'),
	playersList: document.querySelector('.js-players-list'),
	playersNumber: 0,	
	score: 0,
	init: function(){
		for(var i = 0; i<scoreList.playerNumberBtn.length; i++){
			scoreList.playerNumberBtn[i].addEventListener('click',function(){
				playersNumber = parseInt(this.textContent);
				console.log(playersNumber +' playerNo');
				scoreList.addPlayers(playersNumber);
		
				//make player number buttons disabled
				for (var i = 0; i < scoreList.playerNumberBtn.length; i++) {
					scoreList.playerNumberBtn[i].setAttribute('disabled', 'true');
				}
		
				window.onunload = function() {
					for (var i = 0; i < scoreList.playerNumberBtn.length; i++) {
						scoreList.playerNumberBtn[i].removeAttribute('disabled');
					}
				}; 
			},false);	
		}
		
		scoreList.reset();
		scoreList.resetScores();
	},
	addPlayers: function(playersNumber){
			console.log(playersNumber + '2 player no');
						
			var listItem = document.createElement('li');
			
			// add this many players
			for(var i = 0;i<playersNumber;i++){
				console.log(i);
				var listItem = document.createElement('li');
				listItem.innerHTML = '<button class="col mobile-col-1-3 js-add-point">+</button><div class="col mobile-col-1-3 text-center js-score"> 0 </div><button class="col mobile-col-1-3 right js-subtract-point">-</button><div class="row text-center no-padding"></div>';
				listItem.classList.add('row', 'no-padding');		
				scoreList.playersList.insertBefore(listItem, scoreList.playersList.firstChild);	
			}

			scoreList.playersList.parentNode.classList.remove('fadeOutRight');
			scoreList.playersList.parentNode.classList.add('fadeInRight');	
			scoreList.buttonsContainer.classList.add('fadeOutLeft');

			scoreList.changeScore();	
	},
	changeScore: function(){
			var addPointBtn = document.querySelectorAll('.js-add-point');
			var removePointBtn = document.querySelectorAll('.js-subtract-point');
			console.log(removePointBtn[0]);
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
	},
	reset: function(){
			var resetBtn = document.querySelector('.js-reset');
			resetBtn.addEventListener('click', function(){

				var yesReset = confirm('Really restart?');
				if(yesReset){
					scoreList.playersList.parentNode.classList.add('fadeOutRight');
					scoreList.playersList.parentNode.classList.remove('fadeInRight');
					scoreList.buttonsContainer.classList.remove('fadeOutLeft');
					scoreList.buttonsContainer.classList.add('fadeInLeft');

					var hideTimeout = setTimeout(function(){
						while(scoreList.playersList.firstChild) {
							scoreList.playersList.removeChild(scoreList.playersList.firstChild);
						}
						for(var i = 0; i<scoreList.playerNumberBtn.length; i++){
								scoreList.playerNumberBtn[i].removeAttribute('disabled');		
						}	
					}, 500);	
				}

			},false);		
	},
	resetScores: function(){		
		var resetScoresBtn = document.querySelector('.js-reset--all');		
		console.log(resetScoresBtn);
		resetScoresBtn.addEventListener('click', function(){	
		var scoreContainer = document.querySelectorAll('.js-score');
		var yesResetScores = confirm('Really reset all scores?');	
		if(yesResetScores){
			for(var i=0;i<scoreContainer.length;i++){
				scoreContainer[i].textContent = "0";
			}
		}
	},false);	}
	
};

scoreList.init();
