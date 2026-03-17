var player;
var destination;
var startPosition;
var startCode = false;
var worldobjects;
var objectSize;

var foodsteps;
var isBackgroundMusicPlay;
var backgroundmusic;
var myInterpreter = null;
var highlightPause = false;
var latestCode = "";
var latestCodePython = "";
var hasMoreCode = false;
var isCodeRunning = false;
var isRestartRequired = false;
var highlightblockid;
var playedlevels = "000000000000000"
var hint = false;
var startDirection = "down";
var playSpeed = 1;
var fullscreenmode = 0;
var isRunCode = true;
var editorType = "Python";

var worldImages = ["1", "2", "3", "4", "5", "6", "10", "11", "12", "13", "20", 
				   "21", "22", "23", "24","25","26","27","28","29","30","31",
				   "32","33","34","35","36","37","38","39","40","41","42","43",
				   "44","45","46","47","48","49","50","51","52"];

var preloaderFadeOutTime = 1000;

function hidePreloader() {
	var preloader = $('.spinner-wrapper');
	preloader.fadeOut(preloaderFadeOutTime);
}

var getUrlParameter = function getUrlParameter(sParam) {
  	var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('?'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function GotoPage(pageId)
{	
	var lang = String(window.location).split("?")[2];
	var user = getUrlParameter("user");
    var game = getUrlParameter("game");
    var stage = getUrlParameter("stage");

	window.location = String(window.location).split("?")[0] + "?" + pageId + "?" + lang + "?user=" + user + "?game=" + game + "?stage=" + stage;
}

function onLoadPage() {
    ASSET_MANAGER = new AssetManager();

    for(i = 0; i < 53; i++)
	{
		ASSET_MANAGER.queueDownload("images/player/player" + (i + 1) + ".png");
	}

	for(i = 0; i < worldImages.length; i++)
	{
		ASSET_MANAGER.queueDownload("images/world/world" + worldImages[i] + ".png");
	}

	ASSET_MANAGER.downloadAll(function() {
		hidePreloader();
	    HighLightLevels();
		startGame();
		ShowInfoMessage();
		generateCodeAndLoadIntoInterpreter();
	});	

	var level = String(window.location).split("?")[1];

	if(lang == "tr")
		$("#levelID").text("Seviye " + level );
	else
		$("#levelID").text("Level " + level);

	SetLanguage();
}

function restartGame() {
	isRestartRequired = false;
	startCode = false;
	hint = true;
	gameArea.stop();
	startGame();
	generateCodeAndLoadIntoInterpreter();
}

function startGame() {
	isCodeRunning = false;

	foodsteps = new Audio('media/footsteps.mp3');

	if(backgroundmusic == null)
	{
		backgroundmusic = new Audio('');
		//backgroundmusic.volume = 0.25;
		backgroundmusic.loop = true;
		backgroundmusic.play();
		isBackgroundMusicPlay = true;
	}

	var sound = localStorage.getItem("pinoojr1sound");

	if(sound !== null)
	{
		if(sound == "on")
		{
			backgroundmusic.play();
			$("#btPlaySound").attr('src', 'images/soundon.png');
			isBackgroundMusicPlay = true;
		}
		else
		{
			backgroundmusic.pause();
			$("#btPlaySound").attr('src', 'images/soundoff.png');
			isBackgroundMusicPlay = false;
		}
	}

	

	gameArea.start();

	objectSize = gameArea.squareSizeX * 0.95;

	player = CreatePlayer();
		
	startPosition = CreateStartPosition();

    destination = CreateDestination();

	for(i = 0; i < 10; i++)
	{
		for(j = 0; j < 10; j++)
		{
		    world[i][j] = worldTemp[i][j];
		}
	}

	AddGameObjects();
}

function AddGameObjects()
{
	worldobjects = [];

	for(i = 0; i < 10; i++)
	{
		for(j = 9; j >= 0; j--)
		{
		    var worldImageNumber = world[i][j];
		    
			if(worldImageNumber > 0 && worldImageNumber < 100) // 100: destination
			{	
			 	worldobjects.push(CreateGameObject(i, j, worldImageNumber));
			}
		}
	}
}

function CreatePlayer()
{
	var playerSize = objectSize * 1.2;
    var playerPositionX = 0 - objectSize / 8;
	var playerPositionY = 0 - objectSize / 4;

	for(i = 0; i < playerPosition.x; i++)
	{
		playerPositionX = playerPositionX + gameArea.squareSizeX;
	}

	for(i = 0; i < playerPosition.y; i++)
	{
		playerPositionY = playerPositionY + gameArea.squareSizeY;
	}

	var player = new Player(playerSize, playerSize, "images/player/player1.png", playerPositionX, playerPositionY);

	player.matrisX = playerPosition.x;
	player.matrisY = playerPosition.y;
	player.Direction = startDirection;

	if(player.Direction == "left")
	{		
		player.normalImages = [ 
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"45", "46", "47", "48", "49", "50", "51"
								];
		player.runningImages = ["9", "10", "11", "12", "13", "14", "15", "16"];
		player.normalImageIndex = 0;
	}
	else if(player.Direction == "right")
	{
		player.normalImages = [ 
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"37", "38", "39", "40", "41", "42", "43"
								];
		player.runningImages = ["1", "2", "3", "4", "5", "6", "7", "8"];
		player.normalImageIndex = 0;
	}
	else if(player.Direction == "down")
	{
		player.normalImages = ["28", "28", "28", "28", "28", "28"];
		player.runningImages = ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];
		player.normalImageIndex = 0;
	}
	else if(player.Direction == "up")
	{
		player.normalImages = ["53", "53", "53", "53", "53", "53"];
		player.runningImages = ["29", "30", "31", "32", "33", "34", "35", "36"];
		player.normalImageIndex = 0;
	}

	return player;
}

function CreateDestination()
{
	var destPositionX = 0;
	var destPositionY = 0; 

	for(i = 0; i < destinationPosition.x; i++)
	{
		destPositionX = destPositionX + gameArea.squareSizeX;
	}

	for(i = 0; i < destinationPosition.y; i++)
	{
		destPositionY = destPositionY + gameArea.squareSizeY;
	}

	if(world[destinationPosition.y][destinationPosition.x] == 100)
	{
		var destination = new DestinationObject(objectSize, objectSize, "images/player/destination1.png", destPositionX, destPositionY);
	}
	else if(world[destinationPosition.y][destinationPosition.x] == 200)
	{
		var destination = new DestinationObject(objectSize, objectSize, "images/player/destinationT1.png", destPositionX, destPositionY);
	}

	return destination;
}

function CreateStartPosition()
{
	var startPositionX = 0;
	var startPositionY = 0; 

	for(i = 0; i < playerPosition.x; i++)
	{
		startPositionX = startPositionX + gameArea.squareSizeX;
	}

	for(i = 0; i < playerPosition.y; i++)
	{
		startPositionY = startPositionY + gameArea.squareSizeY;
	}

	if(world[playerPosition.y][playerPosition.x] == 101)
	{
		var startPosition = new GameObject(objectSize, objectSize, "images/world/world1.png", startPositionX , startPositionY)
	}
	else if(world[playerPosition.y][playerPosition.x] == 102)
	{
		var startPosition = new GameObject(objectSize, objectSize, "images/world/world20.png", startPositionX , startPositionY)
	}
	
	return startPosition;
}

function CreateGameObject(i, j, worldImageNumber)
{
	var worldObjectPositionX = 0;
	var worldObjectPositionY = 0; 

	for(k = 0; k < j; k++)
	{
		worldObjectPositionX = worldObjectPositionX + gameArea.squareSizeX;
	}

	for(k = 0; k < i; k++)
	{
		worldObjectPositionY = worldObjectPositionY + gameArea.squareSizeY;
	}

	var gameObject = new GameObject(objectSize, objectSize, "images/world/world" + worldImageNumber + ".png", worldObjectPositionX , worldObjectPositionY);

	return gameObject;
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {

    	var innerWidth = window.innerWidth;
    	var innerHeight = window.innerHeight;

    	var canvasWidth = $("#divGameArea").width();
    	var canvasHeight = canvasWidth * 0.85;

    	$("#pageHeader").height(innerHeight / 18);

    	var workingAreaHeight = canvasHeight + $("#pageHeader").height() + 50;

    	$("#divGameTop").height(innerHeight * 0.1);
    	$("#blocklyDiv").height($("#BlocksPannel").height());

    	var buttonTop = $("#BlocksPannel").height() / 1.8;
    	var buttonLeft = $("#BlocksPannel").width() - $("#btRunCode").width() / 8;

    	$("#btRunCode").css({top: buttonTop, left: buttonLeft, position:'absolute'}); 

    	if(workingAreaHeight > window.innerHeight)
    	{
    		var excess = workingAreaHeight - window.innerHeight;
    		var rate = 100 - ((excess / workingAreaHeight) * 100) - 5;

    		canvasWidth = canvasWidth * rate / 100;
    		canvasHeight = canvasHeight * rate / 100;
    		$("#blocklyDiv").height($("#blocklyDiv").height() * rate / 100);
    	}

    	this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;

        this.squareSizeX = this.canvas.height / 10;
        this.squareSizeY = this.canvas.height / 10;

        this.context = this.canvas.getContext("2d");
        $( "#divGameArea" ).append(this.canvas);

        this.interval = setInterval(updateGameArea, 18 / playSpeed);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function GameObject(width, height, image, x, y) {
    
    if(image.indexOf("player/player") > 0
		|| image.indexOf("world/world") > 0)
	{
		this.image = ASSET_MANAGER.getAsset(image);
	}
	else
	{
		this.image = new Image();
    	this.image.src = image;
	}

    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.matrisX = 0;
    this.matrisY = 0;
    this.type = 1;

    this.update = function() {
        ctx = gameArea.context;
        ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
    }
}

function DestinationObject(width, height, image, x, y) {

	GameObject.call(this, width, height, image, x, y);
	this.delay = 0;

	this.images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
				   	"10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];

	this.imageIndex = 0;
	this.type = 100;

	this.numberOfImages = 10;
	this.img = [];

	for(i = 0; i < this.numberOfImages; i++)
	{
		if(world[destinationPosition.y][destinationPosition.x] == 100)
		{
			this.img[i] = new Image();
			this.img[i].src = "images/player/destination" + (i + 1) + ".png";
		}
		else if(world[destinationPosition.y][destinationPosition.x] == 200)
		{
			this.img[i] = new Image();
			this.img[i].src = "images/player/destinationT" + (i + 1) + ".png";
		}
	}

    this.animate = function()
    {
		this.delay++;
		if(this.delay == 5)
   		{
   			this.delay = 0;
   			this.image = this.img[Number(this.images[this.imageIndex]) - 1];

   			this.imageIndex++;

			if(this.imageIndex >= this.images.length)
   				this.imageIndex = 0;
    	}
    }
}

function AnimatedObject(width, height, image, x, y, name) {

	GameObject.call(this, width, height, image, x, y);
	this.delay = 0;
	this.images = ["1", "2", "1", "3"];
	this.imageIndex = 0;
	this.type = 100;
	this.img = [];

	this.loadImages = function(numberOfImages)
	{
		for(i = 0; i < numberOfImages; i++)
		{
			this.img[i] = new Image();
			this.img[i].src = "images/animatedobjects/" + name + "/object" + (i + 1) + ".png";
		}
	}

    this.animate = function()
    {
		this.delay++;

		if(this.delay == 5)
   		{
   			this.delay = 0;
   			this.image = this.img[Number(this.images[this.imageIndex]) - 1];

   			this.imageIndex++;

			if(this.imageIndex >= this.images.length)
   				this.imageIndex = 0;
    	}
    }
}


function Player(width, height, image, x, y) {

	GameObject.call(this, width, height, image, x, y);
	this.DestTaken = false;
	this.DestArray = [];
	this.Dest = 0;
	this.Direction = "";
	this.normalImageIndex = 0;
	this.runningImageIndex = 0;
	this.type = 101;
	this.animationDelay = 0;
	this.waitingDelay = 0;

	this.numberOfImages = 53;
	this.img = [];

	for(i = 0; i < this.numberOfImages; i++)
	{
		this.img[i] = new Image();
		this.img[i] = ASSET_MANAGER.getAsset("images/player/player" + (i + 1) + ".png");
	}

	this.xDestTemp = this.x;
	this.yDestTemp = this.y;

    this.newPos = function() {

        if(this.DestArray.length > 0)
	   	{
	   		if(this.DestTaken == false)
	   		{	
	   			var destObj = this.DestArray.shift();
	       	    this.Dest = destObj.destination;
	       	    this.Direction = destObj.direction;

	       		this.DestTaken = true;
	   		}
	   	}

	   	if(this.DestTaken == true)
	   	{
	   		this.isRunning = true;

	   		if(this.Direction == "right")
	   		{
	   		   	this.normalImages = [ 
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"37", "38", "39", "40", "41", "42", "43"
								];

			   this.normalImageIndex = 0;
	   		   
			   if(Math.round(this.x) < Math.round(this.Dest))
			   {
			   		this.x += 1;
			   }
			   else
			   {
			   		this.isRunning = false;
			   		
			   		this.waitingDelay++;
			   		if(this.waitingDelay == 20)
			   		{
						this.waitingDelay = 0;
						this.matrisX = this.matrisX + 1;
						this.DestTaken = false;

						StateControl();
						if(hasMoreCode == true && isCodeRunning == true)
						{
							StepCode();
						}
			   		}
			   }
			}

			if(this.Direction == "left")
	   		{
			   this.normalImages = [ 
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"45", "46", "47", "48", "49", "50", "51"
								];
			   this.runningImages = ["9", "10", "11", "12", "13", "14", "15", "16"];

			   this.normalImageIndex = 0;

			   if(Math.round(this.x) > Math.round(this.Dest))
			   {
			   		this.x -= 1;
			   }
			   else
			   {
			   		this.isRunning = false;
			   		
			   		this.waitingDelay++;
			   		if(this.waitingDelay == 20)
			   		{
						this.waitingDelay = 0;
						this.matrisX = this.matrisX - 1;
						this.DestTaken = false;

						StateControl();
						if(hasMoreCode == true && isCodeRunning == true)
						{
							StepCode();
						}
			   		}
			   }
			}

			if(this.Direction == "up")
	   		{
	   		   this.normalImages = ["53", "53", "53", "53", "53", "53"];
			   this.runningImages = ["29", "30", "31", "32", "33", "34", "35", "36"];

			   this.normalImageIndex = 0;

			   if(Math.round(this.y) > Math.round(this.Dest))
			   {
			   		this.y -= 1;
			   }
			   else
			   {
			   		this.isRunning = false;

			   		this.waitingDelay++;
			   		if(this.waitingDelay == 20)
			   		{
						this.waitingDelay = 0;
						this.matrisY = this.matrisY - 1;
						this.DestTaken = false;

						StateControl();
						if(hasMoreCode == true && isCodeRunning == true)
						{
							StepCode();
						}
			   		}
			   }
			}

			if(this.Direction == "down")
	   		{
	   		   this.normalImages = ["28", "28", "28", "28", "28", "28"];
			   this.runningImages = ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];

			   this.normalImageIndex = 0;

			   if(Math.round(this.y) < Math.round(this.Dest))
			   {
			   		this.y += 1;
			   }	  
			   else
			   {
			   		this.isRunning = false;

			   		this.waitingDelay++;
			   		if(this.waitingDelay == 20)
			   		{	
						this.waitingDelay = 0;
						this.matrisY = this.matrisY + 1;
						this.DestTaken = false;

						StateControl();
						if(hasMoreCode == true && isCodeRunning == true)
						{	
							StepCode();
						}
			   		}			   		
			   }
			}	
		}
    }

    this.animate = function()
    {
		this.animationDelay++;

		if(this.animationDelay == 5)
   		{
   			this.animationDelay = 0;

   			if(this.isRunning == true)
   			{
   				foodsteps.play();
   				//this.image.src = "images/player/player" + this.runningImages[this.runningImageIndex] + ".png";
   				this.image = this.img[Number(this.runningImages[this.runningImageIndex]) - 1];

   				this.runningImageIndex++;

   				if(this.runningImageIndex >= this.runningImages.length)
   					this.runningImageIndex = 0;
   			}
   			else
   			{
   				//this.image.src = "images/player/player" + this.normalImages[this.normalImageIndex] + ".png";
   				this.image = this.img[Number(this.normalImages[this.normalImageIndex]) - 1];

   				this.normalImageIndex++;

				if(this.normalImageIndex >= this.normalImages.length)
   					this.normalImageIndex = 0;
   			}
    	}
    }

	 this.crashWith = function() {
	    if(world[this.matrisY][this.matrisX] == 0)
	    {	
	    	return true;
	    }
	    else
	    {
	    	return false;
	    }
	  }

      this.reachDestination = function() {

     	var result = false;

	    if(world[this.matrisY][this.matrisX] == 100 || 
	    	world[this.matrisY][this.matrisX] == 200)
	    	result = true;
	    else
	    	result = false;

	    if(world[this.matrisY][this.matrisX] == 10 
	    	&& this.matrisX == destinationPosition.x 
	    	&& this.matrisY == destinationPosition.y)
	    	result = true;

	    if(world[this.matrisY][this.matrisX] == 20 
	    	&& this.matrisX == destinationPosition.x 
	    	&& this.matrisY == destinationPosition.y)
	    	result = true;

	    return result;
	  }

	  this.outOfBorders = function() {
	    var myleft = this.x;
	    var myright = this.x + (this.width);
	    var mytop = this.y;
	    var mybottom = this.y + (this.height);
		var out = false;

	    if (
		    (mybottom > gameArea.canvas.height + objectSize / 2) ||
		    (mytop < 0 - objectSize / 2) ||
		    (myright > gameArea.canvas.width + objectSize / 2) ||
		    (myleft < 0 - objectSize / 2)
	    ) 
	    {
	      out = true;
	    }
	    
	    return out;
	  }
	}

function updateGameArea() {

	gameArea.clear();

	var worldobjectIndex = 0;

	for(i = 0; i < 10; i++)
	{
		for(j = 9; j >= 0; j--)
		{
		    var worldImageNumber = world[i][j];
		    
			if(worldImageNumber > 0 && worldImageNumber < 100) // 100: destination
			{	
			 	worldobjects[worldobjectIndex].update();
				worldobjectIndex++;
			}

			if(world[i][j] == 101 || world[i][j] == 102)
			{
				startPosition.update();
			}

			if(world[i][j] == 100 || world[i][j] == 200)
			{
				destination.animate();
				destination.update();
			}
		}
	}

	player.newPos();
	player.animate();
	player.update();   
}

function StateControl()
{
	if(player.crashWith()){
	  	ErrorStop();
	}
	else if (player.reachDestination()) {
		SuccesStop();
		HighLightLevel();
	}
	else if(hasMoreCode == false){
		ErrorStop();
	}
}


function ErrorStop()
{
	isRestartRequired = true;
	gameArea.stop();
	isCodeRunning = false;

    resetStepUi();

	window.location.href = "#messageErrorModal";

	if(lang == "tr")
	{
		$("#txtErrorHeader").text("OLMADI!!!");
		$("#txtErrorMessage").text("TEKRAR DENEMELİSİN");
	}
	else if(lang == "en")
	{
		$("#txtErrorHeader").text("WRONG!!!");
		$("#txtErrorMessage").text("TRY AGAIN");
	}

	var error = new Audio('media/error.mp3');
	error.volume = 0.25;
	error.play();
}

function ErrorStop2()
{
	isRestartRequired = true;
	gameArea.stop();
	isCodeRunning = false;

    resetStepUi();

	ErrorMessage();
	var error = new Audio('media/error.mp3');
	error.volume = 0.25;
	error.play();
}

function WorkspaceBlocksCount()
{
	var countBlocks = (workspaceCode.match(new RegExp("<block ", "g")) || []).length;
	return countBlocks;
}

function SuccesStop()
{
	isRestartRequired = true;
	gameArea.stop();
	isCodeRunning = false;
    resetStepUi();

    var blocksCount = WorkspaceBlocksCount();
    var score = 0;

    if(targetedBlockNumber == 0)
	{
		score = 3;
	}
    else if(blocksCount <= (targetedBlockNumber + 1))
    {
    	score = 3;
    }
    else if(blocksCount == (targetedBlockNumber + 2))
    {
		score = 2;
    }
    else
    {
		score = 1;
    }

	SuccessMessage(score);

	var victory = new Audio('media/victory.mp3');
	victory.volume = 0.25;
	victory.play();
}

function MoveUp() {

	if(startCode == false)
	{
		ErrorStop();
		return;
	}

  	player.yDestTemp -= gameArea.squareSizeY;

  	var dest = {
		  	      destination : player.yDestTemp, 
		  		  direction : "up"
		  	};
	player.DestArray.push(dest);
}

function MoveDown() {
	
	if(startCode == false)
	{
		ErrorStop();
		return;
	}
	
   	player.yDestTemp +=  gameArea.squareSizeY;
	
	var dest = {
		  		destination : player.yDestTemp, 
		  		direction : "down"
		  	};
	player.DestArray.push(dest);
}

function MoveLeft() {

	if(startCode == false)
	{
		ErrorStop();
		return;
	}

	player.xDestTemp -= gameArea.squareSizeX;

	var dest = {
		  		destination : player.xDestTemp, 
		  		direction : "left"
		  	};

	player.DestArray.push(dest);
}

function MoveRight() {

	if(startCode == false)
	{
		ErrorStop();
		return;
	}

	player.xDestTemp += gameArea.squareSizeX;

    var dest = {
		  		destination : player.xDestTemp, 
		  		direction : "right"
		  	};
	player.DestArray.push(dest);
}

function turnBack() {

	if(startCode == false)
	{
		ErrorStop();
		return;
	}
	
	if(player.Direction == "")
	{
		player.Direction = "left";
		player.normalImages = [ 
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"45", "46", "47", "48", "49", "50", "51"
								];
		player.runningImages = ["9", "10", "11", "12", "13", "14", "15", "16"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "left")
	{
		player.Direction = "right";
	    player.normalImages = [ 
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"37", "38", "39", "40", "41", "42", "43"
								];
		player.runningImages = ["1", "2", "3", "4", "5", "6", "7", "8"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "up")
	{
		player.Direction = "down";
		player.normalImages = ["28", "28", "28", "28", "28", "28"];
		player.runningImages = ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "right")
	{
		player.Direction = "left";
		player.normalImages = [ 
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"45", "46", "47", "48", "49", "50", "51"
								];
		player.runningImages = ["9", "10", "11", "12", "13", "14", "15", "16"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "down")
	{
		player.Direction = "up";
		player.normalImages = ["53", "53", "53", "53", "53", "53"];
		player.runningImages = ["29", "30", "31", "32", "33", "34", "35", "36"];
		player.normalImageIndex = 0;
	}

	if(hasMoreCode == true && isCodeRunning == true)
	{				
		setTimeout(function() {
		         StateControl();     
		         StepCode();  
		}, 500);
	}
}

function turnRight() {

	if(startCode == false)
	{
		ErrorStop();
		return;
	}
	
	if(player.Direction == "")
	{
		player.Direction = "left";
		player.normalImages = [ 
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"45", "46", "47", "48", "49", "50", "51"
								];
		player.runningImages = ["9", "10", "11", "12", "13", "14", "15", "16"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "up")
	{
		player.Direction = "right";
	    player.normalImages = [ 
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"37", "38", "39", "40", "41", "42", "43"
								];
		player.runningImages = ["1", "2", "3", "4", "5", "6", "7", "8"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "right")
	{
		player.Direction = "down";
		player.normalImages = ["28", "28", "28", "28", "28", "28"];
		player.runningImages = ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "down")
	{
		player.Direction = "left";
		player.normalImages = [ 
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"45", "46", "47", "48", "49", "50", "51"
								];
		player.runningImages = ["9", "10", "11", "12", "13", "14", "15", "16"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "left")
	{
		player.Direction = "up";
		player.normalImages = ["53", "53", "53", "53", "53", "53"];
		player.runningImages = ["29", "30", "31", "32", "33", "34", "35", "36"];
		player.normalImageIndex = 0;
	}

	if(hasMoreCode == true && isCodeRunning == true)
	{				
		setTimeout(function() {
		         StateControl();     
		         StepCode();  
		}, 500);
	}
}

function turnLeft() {
	if(startCode == false)
	{
		ErrorStop();
		return;
	}

	if(player.Direction == "")
	{
		player.Direction = "right";
	    player.normalImages = [ 
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"37", "38", "39", "40", "41", "42", "43"
								];
		player.runningImages = ["1", "2", "3", "4", "5", "6", "7", "8"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "up")
	{
		player.Direction = "left";
		player.normalImages = [ 
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52", "52",
								"45", "46", "47", "48", "49", "50", "51"
								];
		player.runningImages = ["9", "10", "11", "12", "13", "14", "15", "16"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "left")
	{
		player.Direction = "down";
		player.normalImages = ["28", "28", "28", "28", "28", "28"];
		player.runningImages = ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "down")
	{
		player.Direction = "right";
	    player.normalImages = [ 
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44",
								"37", "38", "39", "40", "41", "42", "43"
								];
		player.runningImages = ["1", "2", "3", "4", "5", "6", "7", "8"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "right")
	{
		player.Direction = "up";
		player.normalImages = ["53", "53", "53", "53", "53", "53"];
		player.runningImages = ["29", "30", "31", "32", "33", "34", "35", "36"];
		player.normalImageIndex = 0;
	}

	if(hasMoreCode == true && isCodeRunning == true)
	{				
		setTimeout(function() {
		         StateControl();     
		         StepCode();  
		}, 500);
	}
}

function loopstep() {
	setTimeout(function() {
      		StepCode();
    }, 100);
}

function loopend() {

	if(hasMoreCode == true && isCodeRunning == true)
	{
		AddGameObjects();

		if(hasMoreCode == true && isCodeRunning == true)
		{				
			setTimeout(function() {
		          StateControl();     
		          StepCode();  
		    }, 100);
		}
	}
}

function walkForward()
{
	if(player.Direction == "")	
		MoveDown();

	if(player.Direction == "up")	
		MoveUp();

	else if(player.Direction == "down")	
		MoveDown();

	if(player.Direction == "right")	
		MoveRight();

	if(player.Direction == "left")	
		MoveLeft();
}

function clearmove() {
    player.speedX = 0; 
    player.speedY = 0; 
}

function runCode(){	
	try
		{
	    	if(latestCode.length > 0)
	    	{	
		    	if(isCodeRunning == false && isRestartRequired == false)
		    	{	
		    		isCodeRunning = true;
					CreateInterpreter();
					StepCode();
					
					setTimeout(function() {
			          StepCode();
			        }, 500);
				}
			}
			else
			{	
				ErrorStop();
			}
		}
		catch(err)
		{
			ErrorStop(err.message);
		}	
}

function controlCode(code)
{
	if(code.indexOf("for")>= 0)
		return true;
	else
		return false;
}

function start()
{
	if(hasMoreCode == true && isCodeRunning == true)
	{				
		setTimeout(function() {
		         StateControl();     
		         StepCode();  
		}, 500);
	}

    startCode = true;
}

window.addEventListener("resize", function(event) {
    restartGame();
});

function ShowInfoMessage()
{
	InfoMessage(headerMessage, explanationMessage);
}

function initApi(interpreter, scope) {

  // Add an API function for turnRight blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(turnRight());
  };
  interpreter.setProperty(scope, 'turnRight',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for turnLeft blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(turnLeft());
  };
  interpreter.setProperty(scope, 'turnLeft',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for turnBack blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(turnBack());
  };
  interpreter.setProperty(scope, 'turnBack',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for walkForward blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(walkForward());
  };
  interpreter.setProperty(scope, 'walkForward',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for start blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(start());
  };
  interpreter.setProperty(scope, 'start',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for highlighting blocks.
  var wrapper = function(id) {
    return interpreter.createPrimitive(highlightBlock(id));
  };
  interpreter.setProperty(scope, 'highlightBlock',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for step blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(loopstep());
  };
  interpreter.setProperty(scope, 'loopstep',
  		interpreter.createNativeFunction(wrapper));

   // Add an API function for loopend blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(loopend());
  };
  interpreter.setProperty(scope, 'loopend',
  		interpreter.createNativeFunction(wrapper));
}

function highlightBlock(id) {
  highlightblockid = id;
  highlightPause = true;
}

function generateCodeAndLoadIntoInterpreter() {
  // Generate JavaScript code and parse it.
  Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
  Blockly.JavaScript.addReservedWords('highlightBlock');
  latestCode = Blockly.JavaScript.workspaceToCode(workspace);
  latestCodePython = Blockly.Arduino.workspaceToCode(workspace);
  resetStepUi();
}

function resetStepUi() {
  workspace.highlightBlock(null);
  highlightblockid = "";
  highlightPause = false;
}

workspace.addChangeListener(function(event) {
  if (!(event instanceof Blockly.Events.Ui)) {
    // Something changed. Parser needs to be reloaded.
    generateCodeAndLoadIntoInterpreter();
  }
});

	function CreateInterpreter()
{
    myInterpreter = null;
    resetStepUi();
    myInterpreter = new Interpreter(latestCode, initApi);
}

function StepCode() { 
	workspace.highlightBlock(highlightblockid);
	
 	if(myInterpreter)
 	{
      highlightPause = false;
      do {
        try {
          hasMoreCode = myInterpreter.step();
        } finally {
          if (!hasMoreCode) {
            return;
          }
        }
        // Keep executing until a highlight statement is reached,
        // or the code completes or errors.
      } while (hasMoreCode && !highlightPause);
		}
}

function PlaySound()
{
	if(isBackgroundMusicPlay)
	{
		backgroundmusic.pause();
		isBackgroundMusicPlay = false;
		$("#btPlaySound").attr('src', 'images/soundoff.png');
		localStorage.setItem("pinoojr1sound", "off");
	}
	else
	{
		backgroundmusic.play();
		isBackgroundMusicPlay = true;
		$("#btPlaySound").attr('src', 'images/soundon.png');
		localStorage.setItem("pinoojr1sound", "on");
	}
}

function SetSpeed()
{
	if(playSpeed == 1)
	{
		playSpeed = 2;
		$("#btSetSpeed").attr('src', 'images/speed2.png');
		localStorage.setItem("speed", "2");
	}
	else if(playSpeed == 2)
	{
		playSpeed = 3;
		$("#btSetSpeed").attr('src', 'images/speed3.png');
		localStorage.setItem("speed", "3");
	}
	else if(playSpeed == 3)
	{
		playSpeed = 1;
		$("#btSetSpeed").attr('src', 'images/speed1.png');
		localStorage.setItem("speed", "1");
	}
}

function GetLevel()
{
    var part = String(window.location).split("?")[1];
	var level = 0;
	switch(part) {
		 case "01": level = 1; break;
		 case "02": level = 2; break;
		 case "03": level = 3; break;
		 case "04": level = 4; break;
		 case "05": level = 5; break;
		 case "06": level = 6; break;
		 case "07": level = 7; break;
		 case "08": level = 8; break;
		 case "09": level = 9; break;
		 case "10": level = 10; break;
		 case "11": level = 11; break;
		 case "12": level = 12; break;
		 case "13": level = 13; break;
		 case "14": level = 14; break;
		 case "15": level = 15; break;
		 case "16": level = 16; break;
		 case "17": level = 17; break;
		 case "18": level = 18; break;
		 case "19": level = 19; break;
		 case "20": level = 20; break;
	     default:
	     {
	        level = 1;
	     }
    } 

    return level;
}

String.prototype.replaceAt = function(index, replacement) {
	return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function HighLightLevelByID(successLevels) {

    var levels = successLevels.split("-")

    for (i = 0; i < levels.length; i++) {

        if (levels[i] != "") {
            if (levels[i] < 10) {
                $("#img0" + levels[i]).attr("src", "images/levelnumbers/level" + levels[i] + "a.png");
            }
            else
                $("#img" + levels[i]).attr("src", "images/levelnumbers/level" + levels[i] + "a.png");
        }
    }
}

function HighLightLevel()
{
	var level = GetLevel();
	playedlevels = playedlevels.replaceAt(level - 1, '1');

	if(level < 10)
		$("#img0" + level).attr("src","images/levelnumbers/level" + level + "a.png");
	else
		$("#img" + level).attr("src","images/levelnumbers/level" + level + "a.png");

	localStorage.setItem(pageName + "levels", playedlevels);
}

function HighLightLevels()
{	
	var storedlevels = localStorage.getItem(pageName + "levels");

	if(storedlevels !== null)
	{
		playedlevels = storedlevels;

		for(i = 0; i < playedlevels.length; i++)
		{
			if(playedlevels.charAt(i) == '1')
			{
				if((i + 1) < 10)
					$("#img0" + (i + 1)).attr("src", "images/levelnumbers/level" + (i + 1) + "a.png");
				else
					$("#img" + (i + 1)).attr("src", "images/levelnumbers/level" + (i + 1) + "a.png");
			}
		}	
	}	
}

function FullScreen()
{
	if(fullscreenmode == 0)
	{
		fullscreenmode = 1;
		$("#btFullScreen").attr('src', 'images/closefullscreen.png');
		openFullscreen();
	}
	else if(fullscreenmode == 1)
	{
		fullscreenmode = 0;
		$("#btFullScreen").attr('src', 'images/fullscreen.png');
		closeFullscreen();
	}
}

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function btRunCodeClick()
{
	if(isRunCode == true)
	{
		isRunCode = false;
		$("#btRunCode").toggleClass("runButton repeatButton");
		runCode();
	}
	else
	{
		isRunCode = true;
		$("#btRunCode").toggleClass("repeatButton runButton");
		restartGame();
	}
}

function SetLanguage()
{
  $("#modalDialogClose").text(Close);
  $("#confirmConnectionClose").text(Close);
  $("#confirmConnectionClose").text(Cancel);
  $("#confirmDialogText").text(CloseConnectionConfirm);
  $("#confirmConnectionOkey").text(UploadCodeText);

  $("#buttonConnect").prop('title', ConnectBoardText);
  $("#btSaveCode").prop('title', UploadCodeText);
  $("#btRun").prop('title', RunCodeText);

  $("#settingsButton").prop('title', SettingsText);
  $("#btMicropython").text(UploadMicropythonText);
  $("#btPinooLibrary").text(UploadLibrariesText);
}

function OpenConnectionForm(argument) {
  if(isConnected == false)
    connectSerial();
  else
    $("#modalConfirmConnection").modal("show"); 
}

function showConfirmDialog()
{
    $("#modalConfirm").modal('show');
}

function ConnectedSerialPort()
{
    isConnected = true;
    showModalDialog(ConnectedText)
}

function DisconnectedSerialPort()
{
    isConnected = false;
}

function showModalDialog(message)
{
    $("#modalDialog").modal('show');
    $("#dialogText").text(message);
}

function SaveCode()
{
	if(isConnected)
	{
	    showProgressPanel(true);
	    if(latestCodePython != "")
	    {
	      saveCode(latestCodePython, "main.py");
	    }
	}
	else
	{
	    showModalDialog(`${ConnectPinooSerialText}`);
	}
}

function showProgressPanel(isSave)
{
  $("#btSaving").css("visibility", "visible");

  if(isSave)
    $("#progressBarDiv").css("visibility", "visible");
}

function hideProgressPanel()
{
  $("#btSaving").css("visibility", "hidden");
  $("#progressBarDiv").css("visibility", "hidden");
}

function closeProgressPanel()
{
    document.querySelector("#modalProgress").style.display = "none";
}