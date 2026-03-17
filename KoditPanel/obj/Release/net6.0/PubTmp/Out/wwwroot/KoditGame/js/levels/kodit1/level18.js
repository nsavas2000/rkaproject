
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
		    			[0,  0, 101, 1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,127,128,129,130,131,132,  0,  0],
					    [0,  133,  1, 73, 72, 71,  1,  5,  0,  0],
					    [0,  134,  5, 74,  5,  1,  5,  1,  0,  0],
					    [0,  135,  1, 72,  1,  5,  1,  5,  0,  0],
		    			[0,  136, 101,75,  5,  1,  5,  1,  0,  0],
					    [0,  137,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  138,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:2, y:5 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="right";

	var headerMessage = "<p class='infoTitle1'>Lodi arkadaşlarının bahçesindeki zeytinlerin hasadı için bir robot geliştirmi . Robotun zeytinleri toplaması için de bir kod yazmı . Öncelikle bu kodun bütün zeytinlerin toplanmasını saǧlayıp saǧlamadıǧını kontrol eder misin? Kodda hata bulursan, bu hatayı düzelterek doǧru kodu fişlerle yazabilir misin?</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>Lodi developed a robot to harvest the olives in his friends’ garden. He also wrote a code for the robot to collect the olives. Can you check whether this code collects all the olives? If there’s an error, can you correct it using the code cards?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/lodi/lodi_redarrow1/";