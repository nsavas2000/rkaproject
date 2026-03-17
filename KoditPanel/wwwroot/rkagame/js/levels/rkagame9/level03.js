
	var world = [
					   [0,  0,   0,   0,   0,   0,   0,   0,   0,  0],
					    [0,  0,   0,   0,   0,   0,   0,   0,   0,  0],
					    [0,  0,   1,   1,   1,   1,   24, 100,  0,  0],
					    [0,  0,   1,   1,   1,   26,  25,  1,   0,  0],
					    [0,  0,   1,   1,   28,  27,  1,   1,   0,  0],
		    			[0,  0, 101,   30,  29,  1,   1,   1,   0,  0],
					    [0,  0,   1,   1,   1,   1,   1,   1,   0,  0],
					    [0,  0,   1,   1,   1,   1,   1,   1,   0,  0],
					    [0,  0,   0,   0,   0,   0,   0,   0,   0,  0],
					    [0,  0,   0,   0,   0,   0,   0,   0,   0,  0]
				];

	var worldTemp  = [

						[0,  0,   0,   0,   0,   0,   0,   0,   0,  0],
					    [0,  0,   0,   0,   0,   0,   0,   0,   0,  0],
					    [0,  0,   1,   1,   1,   1,   24, 100,  0,  0],
					    [0,  0,   1,   1,   1,   26,  25,  1,   0,  0],
					    [0,  0,   1,   1,   28,  27,  1,   1,   0,  0],
		    			[0,  0, 101,   30,  29,  1,   1,   1,   0,  0],
					    [0,  0,   1,   1,   1,   1,   1,   1,   0,  0],
					    [0,  0,   1,   1,   1,   1,   1,   1,   0,  0],
					    [0,  0,   0,   0,   0,   0,   0,   0,   0,  0],
					    [0,  0,   0,   0,   0,   0,   0,   0,   0,  0]
				];


	var playerPosition = { x:2, y:5 }; 
	var destinationPosition = { x:7, y:2 }; 
	var targetedBlockNumber = 6;
	startDirection ="right";

	var headerMessage = "<p class='infoTitle1'>7'den geriye 1'er sayarak ilerleyelim. Hedefimize ulaşalım.</p>";
						
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