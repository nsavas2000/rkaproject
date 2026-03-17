
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
		    			[0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,101,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,127,128,129,130,131,132,  0,  0],
					    [0,  133,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  134,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  135,  1,  5,  1,  5,  1,  5,  0,  0],
		    			[0,  136, 47,  1, 47,  1, 47,  1,  0,  0],
					    [0,  137,  1,101, 47,  5,  1,  5,  0,  0],
					    [0,  138, 47,  1, 47,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:3, y:6 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="left";

	var headerMessage = "<p class='infoTitle1'>Arkadaşları Zodi'ye doǧum günü için bir hediye almı lar. Ancak Zodi'nin hediyesini bulması gerekiyor. Arkada ları hediyeyi sürpriz bir kareye yerle tirmi ler ve Zodi'ye onu bulabilmesi için bir kod bırakmı lar. Kodu takip edip hediyenin hangi karede olduǧunu sen de bulabilir misin?</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>Zodi’s friends bought him a birthday present. But Zodi has to find it! His friends hid the gift in a surprise square and left a code for him to find it. Can you follow the code and find out which square the gift is in?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/zodi/zodi_bluearrow/";