var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  5,101,  5,  1,  5,  8,  0,  0],
					    [0,  0,  1,  5,  8,  5,  9,  5,  0,  0],
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
					    [0,133,  5,101,  5,  1,  5,  8,  0,  0],
					    [0,134,  1,  5,  8,  5,  9,  5,  0,  0],
					    [0,135,  5,  8,  5,  1,  5,  1,  0,  0],
		    			[0,136,  1,  5,  1,  5,  8,  5,  0,  0],
					    [0,137,  5,  8,  7,  1,  7,  1,  0,  0],
					    [0,138,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:3, y:2 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="right";

	var headerMessage = "<p class='infoTitle1'>Zodi tatil günlerinde doğa yürüyüşleri yapmayı seviypr. Bu hafta sonu yakınlardaki gölün çevresinde yürüyüş yapmak istiyor. Göle gidebilmesi için bir kod yazılmış. Bu kodu gözden geçirip, hata varsa kod fişleri ile doğru kodu yazabilir misin?</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>Zodi loves going on nature walks during holidays. This weekend, he wants to walk around the nearby lake. A code has been written for him to reach the lake. Can you check the code and correct it if there’s an error?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/zodi/zodi_darkbluearrow/";