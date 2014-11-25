
var scoreList = {
	initialValueInput: document.getElementById('starting-score'),
	playersNumberInput: document.getElementById('players-value'),
	playersList: document.querySelector('.js-players-list'),
	formContainer: document.getElementById('players-number'),
	initialValue:0,
	playersNumber:1,
	init: function(){
		scoreList.initialValueInput.addEventListener('change',function(){
			if(parseInt(this.value) > 999) {
				this.value = 999;
			} else {
				scoreList.initialValue = parseInt(this.value);
			}
		},false);
		
		scoreList.playersNumberInput.addEventListener('change',function(){
			if(parseInt(this.value) > 8) {
				this.value = 8;				
				scoreList.playersNumber = 8;
			} else if(parseInt(this.value) <= 0 ) {
				this.value = 1;				
				scoreList.playersNumber = 1;
			}	else {
				scoreList.playersNumber = parseInt(this.value);			
			}
		},false);
		
		var startBtn = document.querySelector('.js-start');		
		startBtn.addEventListener('click',function(){
			scoreList.addPlayers(scoreList.playersNumber);
			scoreList.playersList.parentNode.classList.remove('fadeOutRight');
			scoreList.playersList.parentNode.classList.add('fadeInRight');	
			scoreList.formContainer.classList.add('fadeOutLeft');

		},false);
		
		scoreList.reset();
		scoreList.resetScores();
	},
	addPlayers: function(){							
		
			for(var i = 0;i<scoreList.playersNumber;i++){
				var listItem = document.createElement('li');				
				listItem.innerHTML = '<button class="col mobile-col-1-3 js-add-point">+</button><div class="col mobile-col-1-3 text-center js-score"> ' + scoreList.initialValue + ' </div><button class="col mobile-col-1-3 right js-subtract-point">-</button><div class="row text-center no-padding"></div>';
				listItem.classList.add('row', 'no-padding');		
				scoreList.playersList.insertBefore(listItem, scoreList.playersList.firstChild);	
			}
	
		scoreList.changeScore();
			
	},
	changeScore: function(){
			var addPointBtn = document.querySelectorAll('.js-add-point');
			var removePointBtn = document.querySelectorAll('.js-subtract-point');
			
			for(var i=0;i<addPointBtn.length;i++){
				addPointBtn[i].addEventListener('click',function(){
					
					score = parseInt(this.nextElementSibling.textContent);
					this.nextElementSibling.textContent = score+1;
				},false);
			}

			
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
					scoreList.formContainer.classList.remove('fadeOutLeft');
					scoreList.formContainer.classList.add('fadeInLeft');
					scoreList.initialValue = 0;	
					scoreList.initialValueInput.value = 0;
					scoreList.playersNumber = 1;
					scoreList.playersNumberInput.value = 1;
					
					var hideTimeout = setTimeout(function(){
						while(scoreList.playersList.firstChild) {
							scoreList.playersList.removeChild(scoreList.playersList.firstChild);
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
	
}

scoreList.init();
