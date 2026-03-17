
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1,  5,  1, 45,  1,101,  0,  0],
					    [0,  0,  5,  1, 45,  1,  5, 45,  0,  0],
					    [0,  0,  1, 45,  1,  5, 45,  5,  0,  0],
		    			[0,  0, 45,  1,  5, 45,  5,  1,  0,  0],
					    [0,  0,  1,  5, 45,  5,  1,  5,  0,  0],
					    [0,  0, 46, 45,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,127,128,129,130,131,132,  0,  0],
					    [0,  133,  1,  5,  1, 45,  1,101,  0,  0],
					    [0,  134,  5,  1, 45,  1,  5, 45,  0,  0],
					    [0,  135,  1, 45,  1,  5, 45,  5,  0,  0],
		    			[0,  136, 45,  1,  5, 45,  5,  1,  0,  0],
					    [0,  137,  1,  5, 45,  5,  1,  5,  0,  0],
					    [0,  138, 46, 45,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:7, y:2 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="left";

	var headerMessage = "<p class='infoTitle1'>Tekrar komutunu kullanarak ve mavi karelerden geçmeden, Zodi'nin hedefe ulaşmasını saǧlayacak algoritmayı yazabilir misin?</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>Using the repeat command and without passing through the blue squares, can you write an algorithm that allows Zodi to reach the goal?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/zodi/zodi_redarrow/";