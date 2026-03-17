
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
		    			[0,  0,  5,  1,101,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,127,128,129,130,131,132,  0,  0],
					    [0,  133,  1,  5,  1, 79,  1,  5,  0,  0],
					    [0,  134, 80, 82, 81, 83,  5,  1,  0,  0],
					    [0,  135,  1, 80,  1, 84,  1,  5,  0,  0],
		    			[0,  136, 85,  1,101, 86,  5,  1,  0,  0],
					    [0,  137, 47, 81,  1,  5, 87,  5,  0,  0],
					    [0,  138,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:4, y:5 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="left";

	var headerMessage = "<p class='infoTitle1'>Kod canavarları, başla ve bitir kod fişi haricinde sadece 5 kod fişi kullanarak en yüksek sayı toplamına ulaşmaya çalışıyor. Lodi en yüksek sayı toplamınaşula acaǧını iddia ediyor. Lodi'nin geçtiǧi yoldaki sayıların en yüksek toplamı verdiǧi kodu yazabilir misin?</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>The code monsters are trying to reach the highest number total using only five code cards besides the start and end cards. Lodi claims he can reach the highest total. Can you write the code that gives Lodi the highest total of numbers on his path?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/lodi/lodi_greenarrow3/";