
	var world = [
					[0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
					[0,  24, 28, 24, 1,  24, 100,24, 1, 0],
					[0,  1,  24, 28, 24, 24, 1,  28, 24,0],
					[0,  27, 1,  24, 1,  1,  1,  24, 1, 0],
		    		[0,  1,  27, 29, 1,  28, 24, 1,  24,0],
					[0,  30, 1,  27, 101,24, 28, 24, 29,0],
					[0,  1,  24, 1,  27, 26, 24, 28, 24,0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0, 0]
				];

	var worldTemp  = [
					
						[0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
					    [0,  0,  33,  1,  1,  1, 100, 1,  0, 0],
					    [0,  0,  1,  1,  1,  3,  1,  1,  0, 0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0, 0],
		    			[0,  0,  1,  1,  1,  3,  1,  1,  0, 0],
					    [0,  0,  1,  1,  101,1,  1,  1,  0, 0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0, 0]
				];


	var playerPosition = { x:4, y:6 }; 
	var destinationPosition = { x:6, y:2 }; 
	var targetedBlockNumber = 9;
	startDirection ="up";

	var headerMessage = "<p class='infoTitle1'>Yıldıza ulaşmak biraz zor olabilir. </br>Ama pes etmek yok.</p>";
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