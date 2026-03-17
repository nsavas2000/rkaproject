
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  50,  51,  53,  51,  54,  52,  0,  0],
					    [0,  0,  55,  56,  57,  58,  59,  60,  0,  0],
					    [0,  0,  61,  101, 62,  63,  53,  52,  0,  0],
		    			[0,  0,  55,  64,  65,  64,  66,  64,  0,  0],
					    [0,  0,  67,  68,  67,  69,  54,  70,  0,  0],
					    [0,  0,  66,  67,  63,  59,  52,  68,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,127,128,129,130,131,132,  0,  0],
					    [0,  133,  50,  51,  53,  51,  54,  52,  0,  0],
					    [0,  134,  55,  56,  57,  58,  59,  60,  0,  0],
					    [0,  135,  61,  101, 62,  63,  53,  52,  0,  0],
		    			[0,  136,  55,  64,  65,  64,  66,  64,  0,  0],
					    [0,  137,  67,  68,  67,  69,  54,  70,  0,  0],
					    [0,  138,  66,  67,  63,  62,  52,  64,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:3, y:4 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="right";

	var headerMessage = "<p class='infoTitle1'>Aşaǧıda gizlenmi bazı kelimeler var. Odi bu kelimelerden biri için kod yazarak size bir ipucu bıraktı. Bu koda göre harfleri takip edip kelimeyi bulabilir misin? Bu kelime oyununda ba langıç karesi her zaman B3 olacaktır.</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>Some hidden words are below. Odi left you a clue by writing a code for one of these words. Can you follow the letters according to the code and find the word? In this word game, the starting square is always B3.</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/odi/odi_bluearrow2/";