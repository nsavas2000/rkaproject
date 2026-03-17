
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					    [0,  0,100,  1,  1,  1,  1,  1,  0,  0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
		    			[0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					    [0,  0,101,  1,  1,  1,  1,  1,  0,  0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [

						
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					    [0,  0,100,  1,  1,  1,  1,  1,  0,  0],
					    [0,  0, 26,  1,  1,  1,  1,  1,  0,  0],
		    			[0,  0,  1,  27, 1,  1,  1,  1,  0,  0],
					    [0,  0,101,  1,  1,  1,  1,  1,  0,  0],
					    [0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:2, y:6 }; 
	var destinationPosition = { x:2, y:3 }; 
	var targetedBlockNumber = 9;
	startDirection ="right";

	var headerMessage = "<p class='infoTitle1'>Öncelikle 8-4=? sonucuna uprayıp hedefine ilerlemelisin.</p>";
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