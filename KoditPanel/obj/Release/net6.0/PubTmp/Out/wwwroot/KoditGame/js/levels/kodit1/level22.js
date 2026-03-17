
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,101,  5,  1,  5,  1,  5,  0,  0],
		    			[0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,127,128,129,130,131,132,  0,  0],
					    [0,  133,  1, 88,  1, 90,  1,  5,  0,  0],
					    [0,  134,  5,  1,  5,  1,  5, 89,  0,  0],
					    [0,  135,101,  5, 47, 45,  1,  5,  0,  0],
		    			[0,  136, 88,  1,  5,  1, 88,  1,  0,  0],
					    [0,  137,  1, 88,  1,  5,  1,  5,  0,  0],
					    [0,  138,  5,  1, 91,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:2, y:4 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="right";

	var headerMessage = "<p class='infoTitle1'>Zodi'nin elindeki algoritmaya bakarak hangi kareye gideceǧini bulabilir misin?</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>By looking at the algorithm Zodi has, can you find out which square he will reach?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/zodi/zodi_darkbluearrow/";