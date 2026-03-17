
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,101,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
		    			[0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  1,  5,  1,  5,  1,  5,  0,  0],
					    [0,  0,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,127,128,129,130,131,132,  0,  0],
					    [0,133,101,  5,  1,  5,  1,  5,  0,  0],
					    [0,134,125,  1,125,  3,126,  1,  0,  0],
					    [0,135,124,  5,124,126,  3,  5,  0,  0],
		    			[0,136,125,  1,125,  3,126,  1,  0,  0],
					    [0,137,124,  5,124,126,  3,  5,  0,  0],
					    [0,138,  5,  1,  5,  1,  5,  1,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:2, y:2 }; 
	var destinationPosition = { x:5, y:3 }; 
	var targetedBlockNumber = 2;
	startDirection ="down";

	var headerMessage = "<p class='infoTitle1'>Her sırada 4 çilek olmak üzere iki sıra çilek ve yine her sırada 4 elma olmak üzere iki sıra elma var. İki sıra çileǧi toplamak için kod yazılmı doǧru mu? 8 adet çilek ve 4 elma toplamak için bir kod yazar mısın?</p>";
	var explanationMessage = "<p class='infoTitle1'>İPUCU</p>" +
							"<p>" + 
							"<img src='images/info/start.png'/> " +
							"</br><img src='images/info/go.png'/> </br>" +
							"</p>";

	if (lang == "en") {
	    headerMessage = "<p class='infoTitle1'>There are two rows of strawberries, four in each row, and two rows of apples, four in each row. Is the code written to collect two rows of strawberries correct? Can you write a code to collect 8 strawberries and 4 apples?</p>";
	    explanationMessage = "<p class='infoTitle1'>TIP</p>" +
	   						"<p>" + 
							"<img src='images/info-en/start.png'/> </br> <img src='images/info-en/go.png'/> </br>" +
							"</p>";
	}

	characterPath = "images/player/zodi/zodi_bluearrow2/";