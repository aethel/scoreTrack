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
   console.log(playersNumber);
   //playersNumber = document.getElementById('itemText').value;
  //console.log(newItem);
  //listItem.push(newItem);
  //console.log(listItem);
};

/*
function populateList(){
	var li = document.createElement('li');
}
*/