{ 
	const playGame = function(playerInput) {
	
	clearMessages();
	
	const getMoveName = function(argMoveId) {
	  if (argMoveId == 1) {
		return "kamień";
	  } else if (argMoveId == 2) {
		return "papier";
	  } else {
		return "nożyce";
	  }
	}
	  const displayResult = function(argPlayerMove, argComputerMove) {
		if ((argPlayerMove == "papier" && argComputerMove == "kamień") 
		|| (argPlayerMove == "nożyce" && argComputerMove == "papier") 
		|| (argPlayerMove == "kamień" && argComputerMove == "nożyce")) {
		    printMessage("Wygrywasz!");
		} else if (
		  argPlayerMove === argComputerMove
		) {
		  printMessage("Remis");
		} else {
		  printMessage("Przegrywasz :(");
		}
	  }

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log("Wylosowana liczba to: " + randomNumber);
	const computerMove = getMoveName(randomNumber),
	playerMove = getMoveName(playerInput);
  
	displayResult(playerMove, computerMove);
  
	}

  document.getElementById("play-rock").addEventListener("click", function () {
	playGame(1);
  });
  
  document.getElementById("play-paper").addEventListener("click", function () {
	playGame(2);
  });
  document.getElementById("play-scissors").addEventListener("click", function () {
	playGame(3);
  });
}
