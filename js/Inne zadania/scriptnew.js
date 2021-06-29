function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }else if(argMoveId == 2){
    return 'papier';
  }else{
    return 'nożyce';
}

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}


function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

printMessage('Twój ruch to: ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let playerMove = getMoveName(randomNumber);
let computerMove = getMoveName(randomNumber);

/*

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2') {
playerMove = 'papier';
} else {
playerMove = 'nożyce'
}

*/

/*

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber ==2){
computerMove = 'papier';
}else{
computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

*/



if( computerMove == 'kamień' && playerMove == 'papier'){
printMessage('Ty wygrywasz!');
} else if( computerMove == 'kamień' &&  playerMove == 'nożyce'){
printMessage('Przegrywasz!');
} else if (computerMove =='kamień' && playerMove =='kamień'){
printMessage('Remis!');
}

if( computerMove == 'papier' && playerMove == 'nożyce'){
printMessage('Ty wygrywasz!');
} else if( computerMove == 'papier' && playerMove == 'kamień'){
printMessage('Przegrywasz!');
} else if (computerMove =='papier' && playerMove =='papier'){
printMessage('Remis!')
}

if( computerMove == 'nożyce' && playerMove == 'kamień'){
printMessage('Ty wygrywasz!');
} else if ( computerMove == 'nożyce' && playerMove == 'papier'){
printMessage('Przegrywasz!');
} else if (computerMove =='nożyce' && playerMove =='nożyce'){
printMessage('Remis!');
}

