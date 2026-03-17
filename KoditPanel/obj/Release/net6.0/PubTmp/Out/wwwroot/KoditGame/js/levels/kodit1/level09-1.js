
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1,  5,  1,  5,101,  5,  0,  0],
					    [0,  0,  5,  1,  2,  3,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
		    			[0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,127,128,129,130,131,132,  0,  0],
					    [0,  133,  1,  5, 29,  5,101,  5,  0,  0],
					    [0,  134,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  135,  1, 34,  1,  5, 30,  5,  0,  0],
		    			[0,  136, 36,  1,  5,  1, 35,  1,  0,  0],
					    [0,  137, 37,  5,  1,  5,  1, 31,  0,  0],
					    [0,  138,  5, 32,  5, 33,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:6, y:2 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="right";

	var headerMessage = "<p class='infoTitle1'>Lodi rakamlarla bir eşleştirme oyunu düşünmüş, sana meydan okuyor! Öncelikle rakamlarla meyve sayılarını eşleştirmelisin. Sonra da rakamları meyvelere götüren algoritmaları ondan önce yazabilir misin? 🍎Elmaya Git.</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>Lodi has come up with a number-matching fruit game and challenges you! First, match the numbers with the number of fruits. Then, can you write the algorithms that take the numbers to the fruits faster than him? 🍎 go to apple.</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/lodi/lodi_redarrow2/";