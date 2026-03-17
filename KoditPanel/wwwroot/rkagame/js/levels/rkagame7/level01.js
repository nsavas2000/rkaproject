
	var world = [
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					[0,  0,  101,1,  1, 100, 1,  1,  0, 0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					[0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					[0,  0,  101,1,  1, 100, 1,  1,  0,  0],
					[0,  0,  1,  1,  3,  1,  1,  1,  0,  0],
					[0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					[0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					[0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					[0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:2, y:3 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 4;
	startDirection ="right";

	var headerMessage = "<p class='infoTitle1'>Haydi yıldızları⭐ toplayalım. </br>Dikkat⚠️ Dubalara çarpma sakın.";
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