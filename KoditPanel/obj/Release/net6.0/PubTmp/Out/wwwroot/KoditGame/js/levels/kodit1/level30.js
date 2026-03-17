
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
		    			[0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,101,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,    0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  127,128,129, 130, 131,132,  0,  0],
					    [0,  133, 98, 99,  98,  5,  98,  5,  0,  0],
					    [0,  134, 99, 98,  99,  1,  99,  1,  0,  0],
					    [0,  135,  1,  5,   1,  5,   1,  5,  0,  0],
		    			[0,  136, 99, 98, 116,  98,  5,  98, 0,  0],
					    [0,  137, 98, 99,  98,  99,  1,  99, 0,  0],
					    [0,  138, 99, 98, 101,  1,   5,  98, 0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:4, y:7 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="right";

	var headerMessage = "<p class='infoTitle1'>Hazine avı devam ediyor. Zodi'nin c4 karesindeki hazineye gidebilmesi için bir kod yazılmı ama bazı komutlar silinmi . Koddaki eksikleri tamamlayabilir misin?</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>The treasure hunt continues. A code has been written for Zodi to reach the treasure in square C4, but some commands are missing. Can you fill in the missing parts of the code?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/lodi/lodi_korsan/";