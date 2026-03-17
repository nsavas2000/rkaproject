var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  5,1,  5,  1,  5,  8,  0,  0],
					    [0,  0,  101,  5,  8,  5,  9,  5,  0,  0],
					    [0,  0,  5,  8,  5,  1,  5,  1,  0,  0],
		    			[0,  0,  1,  5,  1,  5,  8,  5,  0,  0],
					    [0,  0,  5,  8,  7,  1,  7,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,127,128,129,130,131,132,  0,  0],
					    [0,  133,  5,  1, 23, 24, 22, 19,  0,  0],
					    [0,  134,101,20,  19, 20, 28,  5,  0,  0],
					    [0,  135,  5,  1,  5, 25, 22,  1,  0,  0],
		    			[0,  136,  1,  5, 27,  5, 21, 26,  0,  0],
					    [0,  137,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  138,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:2, y:3 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="right";

	var headerMessage = "<p class='infoTitle1'>Zodi'nin elektrikli arabasını arj ettirmesi gerekiyor . Araç bilgisayarı en yakın arj istasyonuna gitmek için bir algoritma yazmış. Doǧruluǧunu kontrol edip hata varsa düzeltebilir misin?</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>Zodi needs to charge his electric car. The car’s computer has written an algorithm to reach the nearest charging station. Can you check if it’s correct and fix it if necessary?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}
	
	characterPath = "images/player/zodi/zodi_bluecar/";