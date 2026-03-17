
	var world = [
				      [0,  0,  0,   0,   0,   0,   0,   0,   0,   0],
					    [0,  0,  0,   0,   0,   0,   0,   0,   0,   0],
					    [0,  0,  1,   1,   1,   1,   1,   1,   0,   0],
					    [0,  0,  29,  1,  27,   1,  25,   101, 0,   0],
					    [0,  0,  1,   1,   1,   1,   1,   1,   0,   0],
		    			[0,  0,  31,  1,   1,   1,   1,   1,   0,   0],
					    [0,  0,  1,   1,   1,   1,   1,   1,   0,   0],
					    [0,  0,  100, 1,   1,   1,   1,   1,   0,   0],
					    [0,  0,  0,   0,   0,   0,   0,   0,   0,   0],
					    [0,  0,  0,   0,   0,   0,   0,   0,   0,   0]
				];

	var worldTemp  = [

						[0,  0,  0,   0,   0,   0,   0,   0,   0,   0],
					    [0,  0,  0,   0,   0,   0,   0,   0,   0,   0],
					    [0,  0,  1,   1,   1,   1,   1,   1,   0,   0],
					    [0,  0,  29,  1,  27,   1,  25,   101, 0,   0],
					    [0,  0,  1,   1,   1,   1,   1,   1,   0,   0],
		    			[0,  0,  31,  1,   1,   1,   1,   1,   0,   0],
					    [0,  0,  1,   1,   1,   1,   1,   1,   0,   0],
					    [0,  0,  100, 1,   1,   1,   1,   1,   0,   0],
					    [0,  0,  0,   0,   0,   0,   0,   0,   0,   0],
					    [0,  0,  0,   0,   0,   0,   0,   0,   0,   0]
				];


	var playerPosition = { x:7, y:3 }; 
	var destinationPosition = { x:2, y:7 }; 
	var targetedBlockNumber = 3;
	startDirection ="left";

	var headerMessage = "<p class='infoTitle1'>İkişerli sayarak hedefe ulaşmalısın.</p>";
						
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>Could you help me step over the stones and reach my destination?</p>" +
	    				"<p class='infoTitle1'>You must use loops.</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}