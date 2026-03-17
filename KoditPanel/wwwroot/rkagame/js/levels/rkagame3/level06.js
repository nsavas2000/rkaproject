
	var world = [
					    [0,  0,  0,   0,   0,   0,   0,   0,  0,  0],
					    [0,  0,  0,   0,   0,   0,   0,   0,  0,  0],
					    [0,  0,  1,   1,   1,   1,   1,   1,  0,  0],
					    [0,  0,  1,   1,  101,  1,   1,   1,  0,  0],
					    [0,  0,  1,   1,   26,  1,   25,  1,  0,  0],
		    			[0,  0,  1,   1,   1,   1,   29,  1,  0,  0],
					    [0,  0,  1,   1,   27,  31,  100, 1,  0,  0],
					    [0,  0,  1,   1,   1,   1,   1,   1,  0,  0],
					    [0,  0,  0,   0,   0,   0,   0,   0,  0,  0],
					    [0,  0,  0,   0,   0,   0,   0,   0,  0,  0]
				];

	var worldTemp  = [

						[0,  0,  0,   0,   0,   0,   0,   0,  0,  0],
					    [0,  0,  0,   0,   0,   0,   0,   0,  0,  0],
					    [0,  0,  1,   1,   1,   1,   1,   1,  0,  0],
					    [0,  0,  1,   1,  101,  1,   1,   1,  0,  0],
					    [0,  0,  1,   1,   26,  1,   25,  1,  0,  0],
		    			[0,  0,  1,   1,   1,   1,   29,  1,  0,  0],
					    [0,  0,  1,   1,   27,  31,  100, 1,  0,  0],
					    [0,  0,  1,   1,   1,   1,   1,   1,  0,  0],
					    [0,  0,  0,   0,   0,   0,   0,   0,  0,  0],
					    [0,  0,  0,   0,   0,   0,   0,   0,  0,  0]
				];


	var playerPosition = { x:4, y:3 }; 
	var destinationPosition = { x:6, y:6 }; 
	var targetedBlockNumber = 4;
	startDirection ="down";

	var headerMessage = "<p class='infoTitle1'>3'den başlayıp küçükten büyüğe sayıları takip ederek hedefe ulşamalısın.</p>";
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