
	var world = [
						
						[0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0, 0],
					    [0,  0,  1,  1,  1,  3,  1, 101, 0, 0],
					    [0,  0,  1,  1,  1,  3,  1,  1,  0, 0],
		    			[0,  0,  1, 100, 1,  1,  5,  1,  0, 0],
					    [0,  0,  1,  1,  1,  1,  3,  1,  0, 0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0, 0]
				];

	var worldTemp  = [

						[0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0, 0],
					    [0,  0,  1,  1,  1,  3,  1, 101, 0, 0],
					    [0,  0,  1,  1,  1,  3,  1,  1,  0, 0],
		    			[0,  0,  1, 100, 1,  1,  5,  1,  0, 0],
					    [0,  0,  1,  1,  1,  1,  3,  1,  0, 0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0, 0]
				];


	var playerPosition = { x:7, y:3 }; 
	var destinationPosition = { x:3, y:5 }; 
	var targetedBlockNumber = 9;
	startDirection ="left";

	var headerMessage = "<p class='infoTitle1'>Mavi taş üzerinde editörde kırmızı led blogunu kullanarak led rengini mavi yap.</p>";
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