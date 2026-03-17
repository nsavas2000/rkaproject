
	var world = [
						[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1, 24, 101,24,  1,  24, 0,  0],
		    			[0,  0,  0,  0,  0,  0,  0,  1,  0,  0],
					    [0, 0,   0,  0,  0,  0,  0,  100,0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [

						[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					    [0,  0,  1,  1, 101, 1,  1,  3,  0,  0],
		    			[0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					    [0, 0,   1,  1,  3,  1,  1,  100,0,  0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:4, y:4 }; 
	var destinationPosition = { x:7, y:6 }; 
	var targetedBlockNumber = 5;
	startDirection ="right";

	var headerMessage = "<p class='infoTitle1'>Harika gidiyorsun. Kodlama ustası olmalısın.</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>Could you help me step over the stones and reach my destination?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}