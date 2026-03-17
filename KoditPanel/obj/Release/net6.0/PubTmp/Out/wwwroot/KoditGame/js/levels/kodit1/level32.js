
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
		    			[0,  0,  5,101,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,127,128,129,130,131,132,  0,  0],
					    [0,133,  1,  5,  1,102,  1,  5,  0,  0],
					    [0,134,  5,  1, 48,118,119,  1,  0,  0],
					    [0,135,  1,102, 49, 48,118,  5,  0,  0],
		    			[0,136,  5,101, 48,118,119,106,  0,  0],
					    [0,137,  1,119,  1,102,  1,  5,  0,  0],
					    [0,138,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:3, y:5 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="right";

	var headerMessage = "<p class='infoTitle1'>Lodi aşaǧıdaki algoritmayı izleyerek ormanda yürüyü yapıyor. Algoritmaya göre hangi kareye varacak? Bu karedeki çiçeǧin rengi nedir?</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>Lodi is walking in the forest following the algorithm below. According to the algorithm, which square will he reach, and what is the color of the flower there?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/lodi/lodi_yellowarrow3/";