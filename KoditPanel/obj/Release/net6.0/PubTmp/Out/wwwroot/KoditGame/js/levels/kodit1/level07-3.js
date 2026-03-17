var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1, 17,  0,  0],
					    [0,  0, 15,  1,  5,  1,  5,  1,  0,  0],
		    			[0,  0,  1,  5,  16, 5,  1,101,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1, 18,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,127,128,129,130,131,132,  0,  0],
					    [0,  133,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  134,  1,  5,  1,  5,  1, 17,  0,  0],
					    [0,  135, 15,  1,  5,  1,  5,  1,  0,  0],
		    			[0,  136,  1,  5,  16, 5,  1,101,  0,  0],
					    [0,  137,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  138,  1,  5,  1,  5,  1, 18,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:7, y:5 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="up";


	var headerMessage = "<p class='infoTitle1'>Odi doǧa müzesinde mevsimlerin anlatıldıǧı odaları ziyaret etmek istiyor. Elindeki kaǧıtta ba langıç karesinden her odaya nasıl gideceǧini gösteren kodlar var. Kodları, mevsimlerle eşleştirir eşleştirir misin?</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>Odi wants to visit the rooms in the nature museum where the seasons are explained. On his paper, there are codes showing how to reach each room from the starting square. Can you match the codes with the correct seasons?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/odi/odi_rainbowarrow/";