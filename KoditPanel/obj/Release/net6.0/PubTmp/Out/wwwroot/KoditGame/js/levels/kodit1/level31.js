
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
		    			[0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,101,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,127,128,129,130,131,132,  0,  0],
					    [0,133, 47,  5, 47,  5,  1,  5,  0,  0],
					    [0,134,  5,100, 45,  1,104,  1,  0,  0],
					    [0,135, 47,  5, 45,  5,117,  5,  0,  0],
		    			[0,136,104,  1,  5,117,  5,  1,  0,  0],
					    [0,137,  1,  5,101,  5,  1,  5,  0,  0],
					    [0,138,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:4, y:6 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="up";

	var headerMessage = "<p class='infoTitle1'>Zodi'nin ailesi akıllı bir araba almı . Eve gitmek için bir algoritma yazmak istiyorlar. A aǧıdaki yönergelere göre Eğer ve …e kadar tekrarla komutlarını kullanarak arabanın E2 koordinatındaki eve gitmesini saǧlayabilir misin?</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>Zodi’s family bought a smart car. They want to write an algorithm to go home. Using the “if” and “repeat until” commands, can you make the car reach their house at coordinate E2 according to the directions below?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/zodi/zodi_redcar2/";