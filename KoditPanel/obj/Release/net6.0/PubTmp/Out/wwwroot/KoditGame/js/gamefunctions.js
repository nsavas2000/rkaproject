var player;
var worldobjects;
var objectSize;
var myInterpreter = null;
var highlightPause = false;
var latestCode = '';
var code = '';
var hasMoreCode = false;
var isCodeRunning = false;
var isRestartRequired = false;
var highlightblockid;
var hint = false;
var startDirection = "right";
var playSpeed = 1;
var fullscreenmode = 0;
var isRunCode = true;
var stepG = 0;
var isB2 = true;

var characterPath = "images/player/lodi/lodi_bluearrow/";

var worldImages = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
  "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
  "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
  "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
  "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
  "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
  "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
  "91", "92", "93", "94", "95", "96", "97", "98", "99", "100",
  "101", "102", "103", "104", "105", "106", "107", "108", "109", "110",
  "111", "112", "113", "114", "115", "116", "117", "118", "119", "120",
  "121", "122", "123", "124", "125", "126", "127", "128", "129", "130",
  "131", "132", "133", "134", "135", "136", "137", "138", "201", "202"
];

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
	window.location = String(window.location).split("?")[0] + "?" + pageId + "?" + lang;
}

function onLoadPage() {

    ASSET_MANAGER = new AssetManager();

    for(i = 0; i < 1; i++)
	{
		ASSET_MANAGER.queueDownload( characterPath + "player" + (i + 1) + ".png");
	}

	for(i = 0; i < worldImages.length; i++)
	{
		ASSET_MANAGER.queueDownload("images/world/world" + worldImages[i] + ".png");
	}

	ASSET_MANAGER.downloadAll(function() {
		hidePreloader();
		startGame();
		ShowInfoMessage();
		generateCodeAndLoadIntoInterpreter();
	});	
}

function restartGame() {
	isRestartRequired = false;

	hint = true;
	gameArea.stop();
	startGame();
	generateCodeAndLoadIntoInterpreter();

	isB2 = true;
}

function startGame() {
	isCodeRunning = false;

	var speed = localStorage.getItem("speed");

	gameArea.start();

	objectSize = gameArea.squareSizeX * 0.95;

	player = CreatePlayer();

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
		    
			if(worldImageNumber > 0) 
			{	
			 	worldobjects.push(CreateGameObject(i, j, worldImageNumber));
			}
		}
	}
}

function CreatePlayer()
{
	var playerSize = objectSize;
    var playerPositionX = 0;
	var playerPositionY = 0;

	for(i = 0; i < playerPosition.x; i++)
	{
		playerPositionX = playerPositionX + gameArea.squareSizeX;
	}

	for(i = 0; i < playerPosition.y; i++)
	{
		playerPositionY = playerPositionY + gameArea.squareSizeY;
	}

	var player = new Player(playerSize, playerSize, characterPath + "player1.png", playerPositionX, playerPositionY);

	player.matrisX = playerPosition.x;
	player.matrisY = playerPosition.y;
	player.Direction = startDirection;

	if(player.Direction == "left")
	{		
		player.normalImages = [ "0"];
		player.normalImageIndex = 0;
	}
	else if(player.Direction == "right")
	{
		player.normalImages = ["0"];
		player.normalImageIndex = 0;
	}
	else if(player.Direction == "down")
	{
		player.normalImages = ["0"];
		player.normalImageIndex = 0;
	}
	else if(player.Direction == "up")
	{
		player.normalImages = ["0"];
		player.normalImageIndex = 0;
	}

	return player;
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
    canvas: document.createElement("canvas"),
    trailCanvas: document.createElement("canvas"), // 🎯 kalıcı çizim için ikinci canvas

    start: function () {
        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight;

        var canvasWidth = $("#divGameArea").width();
        var canvasHeight = canvasWidth * 0.85;

        $("#pageHeader").height(innerHeight / 28);

        var workingAreaHeight = canvasHeight + $("#pageHeader").height() + 50;

        $("#divGameTop").height(innerHeight * 0.1);
        $("#blocklyDiv").height($("#BlocksPannel").height());

        var buttonTop = $("#BlocksPannel").height() / 2;
        var buttonLeft = $("#BlocksPannel").width() - $("#btRunCode").width() / 2;

        $("#btRunCode").css({ top: buttonTop, left: buttonLeft, position: 'absolute' });

        if (workingAreaHeight > window.innerHeight) {
            var excess = workingAreaHeight - window.innerHeight;
            var rate = 100 - ((excess / workingAreaHeight) * 100) - 5;

            canvasWidth = canvasWidth * rate / 100;
            canvasHeight = canvasHeight * rate / 100;
            $("#blocklyDiv").height($("#blocklyDiv").height() * rate / 100);
        }

        // 🎨 Ana oyun alanı
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.context = this.canvas.getContext("2d");

        // 🖋 İzlerin çizileceği alan
        this.trailCanvas.width = canvasWidth;
        this.trailCanvas.height = canvasHeight;
        this.trailContext = this.trailCanvas.getContext("2d");

        // trailCanvas önce eklenir, böylece player üstte görünür
        $( "#divGameArea" ).append(this.trailCanvas);
        $( "#divGameArea" ).append(this.canvas);

        // İkisini üst üste getir
        $(this.trailCanvas).css({
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
        });

        $(this.canvas).css({
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0
        });

        // Oyun döngüsü
        this.interval = setInterval(updateGameArea, 18 / playSpeed);

        // Hücre boyutları
        this.squareSizeX = this.canvas.height / 8;
        this.squareSizeY = this.canvas.height / 8;
    },

    clear: function () {
        // sadece ana canvas temizlenir — trailCanvas olduğu gibi kalır
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    clearTrails: function () {
        // istersen çizgileri silmek için bu fonksiyonu çağır
        this.trailContext.clearRect(0, 0, this.trailCanvas.width, this.trailCanvas.height);
    },

    stop: function () {
        clearInterval(this.interval);
    }
};

function GameObject(width, height, image, x, y) {
    this.image = new Image();
    this.image.src = image;

    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.rotationAngle = 0; // derece cinsinden
    this.scale = 1.0; // %100 boyut

    this.update = function() {
        const ctx = gameArea.context;
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate((this.rotationAngle * Math.PI) / 180);
        ctx.scale(this.scale, this.scale);
        ctx.drawImage(
            this.image,
            -this.width / 2,
            -this.height / 2,
            this.width,
            this.height
        );
        ctx.restore();
    };
}

function rotatePlayerSmooth(targetAngle) {
	targetAngle = player.rotationAngle + targetAngle;
    const stepAngle = 45;
    const delay = 500; // ms
    const totalSteps = Math.abs(targetAngle - player.rotationAngle) / stepAngle;
    const direction = targetAngle > player.rotationAngle ? 1 : -1;
    let currentStep = 0;
    player.playerAngle += targetAngle;

    function doStep() {
        if (currentStep >= totalSteps) return;

        // 45° artır / azalt
        player.rotationAngle += stepAngle * direction;

        // 45, 135, 225, 315 derecelerde boyutu %75 yap
        if (player.rotationAngle % 90 !== 0) {
            player.scale = 0.75;
        } else {
            player.scale = 1.0;
        }

        currentStep++;

        // Tekrarla
        setTimeout(doStep, delay);
    }

    doStep();
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

	this.DestTaken = false;
	this.DestArray = [];
	this.Dest = 0;
	this.Direction = "right";
	this.normalImageIndex = 0;
	this.runningImageIndex = 0;
	this.type = 101;
	this.animationDelay = 0;
	this.waitingDelay = 0;
	this.playerAngle = 0;
	GameObject.call(this, width, height, image, x, y, this.playerAngle);

	this.numberOfImages = 1;
	this.img = [];

	for(i = 0; i < this.numberOfImages; i++)
	{
		this.img[i] = new Image();
		this.img[i] = ASSET_MANAGER.getAsset("images/player/lodi/lodi_bluearrow/player" + (i + 1) + ".png");
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

	       	   	this.currentX = this.x;
				this.currentY = this.y;

	       		this.DestTaken = true;
	   		}
	   	}

	   	if(this.DestTaken == true)
	   	{
	   		this.isRunning = true;

	   		if(this.Direction == "right")
	   		{
	   		   this.normalImages = ["0"];

			   this.normalImageIndex = 0;

			   if(Math.round(this.x) < Math.round(this.Dest))
			   {
			   		this.x += 1;
			   		drawTrail(this.currentX, this.currentY, this.x, this.y);
			   }
			   else
			   {
			   		this.isRunning = false;
			   		
			   		this.waitingDelay++;
			   		if(this.waitingDelay == 20)
			   		{
						this.waitingDelay = 0;
						this.matrisX = this.matrisX + stepG;
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
	   		   this.normalImages = ["0"];

			   this.normalImageIndex = 0;
	   		   
			   if(Math.round(this.x) > Math.round(this.Dest))
			   {
			   		this.x -= 1;
			   		drawTrail(this.currentX, this.currentY, this.x, this.y);
			   }
			   else
			   {
			   		this.isRunning = false;
			   		
			   		this.waitingDelay++;
			   		if(this.waitingDelay == 20)
			   		{
						this.waitingDelay = 0;
						this.matrisX = this.matrisX - stepG;
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
	   		   this.normalImages = ["0"];

			   this.normalImageIndex = 0;
	   		   
			   if(Math.round(this.y) > Math.round(this.Dest))
			   {
			   		this.y -= 1;
			   		drawTrail(this.currentX, this.currentY, this.x, this.y);
			   }
			   else
			   {
			   		this.isRunning = false;

			   		this.waitingDelay++;
			   		if(this.waitingDelay == 20)
			   		{
						this.waitingDelay = 0;
						this.matrisY = this.matrisY - stepG;
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
	   		   this.normalImages = ["0"];

			   this.normalImageIndex = 0;
	   		   
			   if(Math.round(this.y) < Math.round(this.Dest))
			   {
			   		this.y += 1;
			   		drawTrail(this.currentX, this.currentY, this.x, this.y);
			   }	  
			   else
			   {
			   		this.isRunning = false;

			   		this.waitingDelay++;
			   		if(this.waitingDelay == 20)
			   		{	
						this.waitingDelay = 0;
						this.matrisY = this.matrisY + stepG;
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
   				this.image = this.img[Number(this.normalImages[this.runningImageIndex]) - 1];

   				this.runningImageIndex++;

   				if(this.runningImageIndex >= this.normalImages.length)
   					this.runningImageIndex = 0;
   			}
   			else
   			{
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
		    
		  if(worldImageNumber > 0) 
			{	
			 	worldobjects[worldobjectIndex].update();
				worldobjectIndex++;
			}
		}
	}

	player.newPos();
	//player.animate();
	player.update();   
}

function StateControl()
{
	if(player.crashWith()){
	  	ErrorStop();
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

	ErrorMessage();
	var error = new Audio('media/error.mp3');
	error.volume = 0.25;
	error.play();
}

function ErrorMessage (message) {
	// body...
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

function clearmove() {
    player.speedX = 0; 
    player.speedY = 0; 
}

function runCode(){	
	try
		{
	    	if(latestCode.length > 0)
	    	{	
	    		if(latestCode.indexOf("Start") <= 0 || latestCode.indexOf("Stop") <= 0)
	    			return;

	    		latestCode = RemoveHighLight(latestCode);
	    		latestCode = addElseLoopEnd(latestCode);
	  			
	  			console.log(latestCode);
		    	
		    	if(isCodeRunning == false && isRestartRequired == false)
		    	{	
		    		isCodeRunning = true;
					CreateInterpreter();
					StepCode();
					
					setTimeout(function() {
			          StepCode();
			        }, 100);
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

window.addEventListener("resize", function(event) {
    restartGame();
});

function ShowInfoMessage()
{
	InfoMessage(headerMessage, explanationMessage);
}

function InfoMessage(headerMessage, explanationMessage, hint)
{
	$("#messageInfoModalBody").html(headerMessage);
}

function initApi(interpreter, scope) {

  // Add an API function for walkForward blocks.
  var wrapper = function(step) {
    return interpreter.createPrimitive(walkForward(step));
  };
  interpreter.setProperty(scope, 'walkForward',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for turnRight blocks.
  var wrapper = function(angle) {
    return interpreter.createPrimitive(turnRight(angle));
  };
  interpreter.setProperty(scope, 'turnRight',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for turnLeft blocks.
  var wrapper = function(angle) {
    return interpreter.createPrimitive(turnLeft(angle));
  };
  interpreter.setProperty(scope, 'turnLeft',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for sayKodit blocks.
  var wrapper = function(value) {
    return interpreter.createPrimitive(sayKodit(value));
  };
  interpreter.setProperty(scope, 'sayKodit',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for doKodit blocks.
  var wrapper = function(value) {
    return interpreter.createPrimitive(doKodit(value));
  };
  interpreter.setProperty(scope, 'doKodit',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for doKodit2 blocks.
  var wrapper = function(value) {
    return interpreter.createPrimitive(doKodit2(value));
  };
  interpreter.setProperty(scope, 'doKodit2',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for highlighting blocks.
  var wrapper = function(id) {
    return interpreter.createPrimitive(highlightBlock(id));
  };
  interpreter.setProperty(scope, 'highlightBlock',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for isGreen blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(isGreen());
  };
  interpreter.setProperty(scope, 'isGreen',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for isBlue blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(isBlue());
  };
  interpreter.setProperty(scope, 'isBlue',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for isThereShip blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(isThereShip());
  };
  interpreter.setProperty(scope, 'isThereShip',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for isThereRightRoad blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(isThereRightRoad());
  };
  interpreter.setProperty(scope, 'isThereRightRoad',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for isThereLeftRoad blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(isThereLeftRoad());
  };
  interpreter.setProperty(scope, 'isThereLeftRoad',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for isThereFrontRoad blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(isThereFrontRoad());
  };
  interpreter.setProperty(scope, 'isThereFrontRoad',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for isBlueFlower blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(isBlueFlower());
  };
  interpreter.setProperty(scope, 'isBlueFlower',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for isNumber blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(isNumber());
  };
  interpreter.setProperty(scope, 'isNumber',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for UntilE2 blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(UntilE2());
  };
  interpreter.setProperty(scope, 'UntilE2',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for UntilB2 blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(UntilB2());
  };
  interpreter.setProperty(scope, 'UntilB2',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for UntilTreasure blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(UntilTreasure());
  };
  interpreter.setProperty(scope, 'UntilTreasure',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for UntilStar blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(UntilStar());
  };
  interpreter.setProperty(scope, 'UntilStar',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for UntilDestination blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(UntilDestination());
  };
  interpreter.setProperty(scope, 'UntilDestination',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for Start blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(Start());
  };
  interpreter.setProperty(scope, 'Start',
  		interpreter.createNativeFunction(wrapper));

  // Add an API function for Stop blocks.
  var wrapper = function() {
    return interpreter.createPrimitive(Stop());
  };
  interpreter.setProperty(scope, 'Stop',
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

String.prototype.replaceAt = function(index, replacement) {
	return this.substr(0, index) + replacement + this.substr(index + replacement.length);
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
		localStorage.setItem("koditfunctions", "");
	}
}

function drawTrail(x1, y1, x2, y2) {
    const ctx = gameArea.trailContext;
    ctx.beginPath();
    ctx.moveTo(x1 + objectSize / 2, y1 + objectSize / 2);
    ctx.lineTo(x2 + objectSize / 2, y2 + objectSize / 2);
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 10;
    ctx.stroke();
}

function addElseLoopEnd(code) {
    // #endif# taglarını bul
    return code.replace(/if\s*\((.*?)\)\s*{([\s\S]*?)}#endif#/g, (match, condition, ifBody) => {
        // Eğer ifBody içinde 'else' yoksa else ekle
        if (/else\s*{/.test(ifBody)) {
            // else varsa sadece #endif# kaldır
            return `if(${condition}){${ifBody}}`;
        } else {
            // else yoksa else ekle
            return `if(${condition}){${ifBody}}else{loopend();}`;
        }
    });
}

function RemoveHighLight(code) {
  // 1️⃣ Tüm fonksiyon adlarını bul
  const funcNames = [];
  const funcRegex = /function\s+([a-zA-Z0-9_]+)\s*\([^)]*\)\s*{/g;
  let match;
  while ((match = funcRegex.exec(code)) !== null) {
    funcNames.push(match[1]);
  }

  for (const name of funcNames) {
    // 2️⃣ Fonksiyon tanımı öncesindeki highlightBlock'u kaldır
    const defRegex = new RegExp(
      `[ \\t]*highlightBlock\\([^)]*\\);[ \\t\\n\\r]*function\\s+${name}\\s*\\([^)]*\\)\\s*{`,
      "g"
    );
    code = code.replace(defRegex, `function ${name}() {`);

    // 3️⃣ Fonksiyon çağrısı öncesindeki highlightBlock'u kaldır
    const callRegex = new RegExp(
      `[ \\t]*highlightBlock\\([^)]*\\);[ \\t\\n\\r]*${name}\\s*\\(\\);`,
      "g"
    );
    code = code.replace(callRegex, `${name}();`);
  }

  // 4️⃣ Kapanış '}' öncesindeki highlightBlock'u kaldır
  const beforeCloseRegex = /[ \t]*highlightBlock\([^)]*\);[ \t]*\n([ \t]*})/g;
  code = code.replace(beforeCloseRegex, "$1");

  //code = code.replace("highlightBlock('%NH~XU7#kB37`[Y)Fg3m');", "");
  // 5️⃣ if( ifadesi öncesindeki highlightBlock'u kaldır
  //const beforeIfRegex = /[ \t]*highlightBlock\([^)]*\);[ \t]*\n([ \t]*if\s*\()/g;
  //code = code.replace(beforeIfRegex, "$1");

  return code;
}

isThereFrontRoad = function() {

    var result = true;

    if(player.Direction == "down")
    {
		if(world[player.matrisY + 1][player.matrisX] == 122 
		   || world[player.matrisY + 1][player.matrisX] == 98
		   || world[player.matrisY + 1][player.matrisX] == 99
		   || world[player.matrisY + 1][player.matrisX] == 102
		   || world[player.matrisY + 1][player.matrisX] == 103
		   || world[player.matrisY + 1][player.matrisX] == 104
		   || world[player.matrisY + 1][player.matrisX] == 105
		   || world[player.matrisY + 1][player.matrisX] == 106
		   || world[player.matrisY + 1][player.matrisX] == 107
		   || world[player.matrisY + 1][player.matrisX] == 108
		   || world[player.matrisY + 1][player.matrisX] == 109
		   || world[player.matrisY + 1][player.matrisX] == 113)
	    	result = false;
	}
	else if(player.Direction == "up")
    {
		if(world[player.matrisY - 1][player.matrisX] == 122 
		   || world[player.matrisY - 1][player.matrisX] == 98
		   || world[player.matrisY - 1][player.matrisX] == 99
		   || world[player.matrisY - 1][player.matrisX] == 102
		   || world[player.matrisY - 1][player.matrisX] == 103
		   || world[player.matrisY - 1][player.matrisX] == 104
		   || world[player.matrisY - 1][player.matrisX] == 105
		   || world[player.matrisY - 1][player.matrisX] == 106
		   || world[player.matrisY - 1][player.matrisX] == 107
		   || world[player.matrisY - 1][player.matrisX] == 108
		   || world[player.matrisY - 1][player.matrisX] == 109
		   || world[player.matrisY - 1][player.matrisX] == 113)
	    	result = false;
	}
	else if(player.Direction == "left")
    {	
		if(world[player.matrisY][player.matrisX - 1] == 122 
		   || world[player.matrisY][player.matrisX - 1] == 98
		   || world[player.matrisY][player.matrisX - 1] == 99
		   || world[player.matrisY][player.matrisX - 1] == 102
		   || world[player.matrisY][player.matrisX - 1] == 103
		   || world[player.matrisY][player.matrisX - 1] == 104
		   || world[player.matrisY][player.matrisX - 1] == 105
		   || world[player.matrisY][player.matrisX - 1] == 106
		   || world[player.matrisY][player.matrisX - 1] == 107
		   || world[player.matrisY][player.matrisX - 1] == 108
		   || world[player.matrisY][player.matrisX - 1] == 109
		   || world[player.matrisY][player.matrisX - 1] == 113)
	    	result = false;
	}
	else if(player.Direction == "right")
    {
		if(world[player.matrisY][player.matrisX + 1] == 122 
		   || world[player.matrisY][player.matrisX + 1] == 98
		   || world[player.matrisY][player.matrisX + 1] == 99
		   || world[player.matrisY][player.matrisX + 1] == 102
		   || world[player.matrisY][player.matrisX + 1] == 103
		   || world[player.matrisY][player.matrisX + 1] == 104
		   || world[player.matrisY][player.matrisX + 1] == 105
		   || world[player.matrisY][player.matrisX + 1] == 106
		   || world[player.matrisY][player.matrisX + 1] == 107
		   || world[player.matrisY][player.matrisX + 1] == 108
		   || world[player.matrisY][player.matrisX + 1] == 109
		   || world[player.matrisY][player.matrisX + 1] == 113)
	    	result = false;
	}

	return result;
}

isThereRightRoad = function() {

    var result = true;

    if(player.Direction == "down")
    {
		if(world[player.matrisY][player.matrisX - 1] == 122 
		   || world[player.matrisY][player.matrisX - 1] == 98
		   || world[player.matrisY][player.matrisX - 1] == 99
		   || world[player.matrisY][player.matrisX - 1] == 102
		   || world[player.matrisY][player.matrisX - 1] == 103
		   || world[player.matrisY][player.matrisX - 1] == 104
		   || world[player.matrisY][player.matrisX - 1] == 105
		   || world[player.matrisY][player.matrisX - 1] == 106
		   || world[player.matrisY][player.matrisX - 1] == 107
		   || world[player.matrisY][player.matrisX - 1] == 108
		   || world[player.matrisY][player.matrisX - 1] == 109
		   || world[player.matrisY][player.matrisX - 1] == 113)
	    	result = false;
	}
	else if(player.Direction == "up")
    {
		if(world[player.matrisY][player.matrisX + 1] == 122 
		   || world[player.matrisY][player.matrisX + 1] == 98
		   || world[player.matrisY][player.matrisX + 1] == 99
		   || world[player.matrisY][player.matrisX + 1] == 102
		   || world[player.matrisY][player.matrisX + 1] == 103
		   || world[player.matrisY][player.matrisX + 1] == 104
		   || world[player.matrisY][player.matrisX + 1] == 105
		   || world[player.matrisY][player.matrisX + 1] == 106
		   || world[player.matrisY][player.matrisX + 1] == 107
		   || world[player.matrisY][player.matrisX + 1] == 108
		   || world[player.matrisY][player.matrisX + 1] == 109
		   || world[player.matrisY][player.matrisX + 1] == 113)
	    	result = false;
	}
	else if(player.Direction == "left")
    {	
		if(world[player.matrisY - 1][player.matrisX] == 122 
		   || world[player.matrisY - 1][player.matrisX] == 98
		   || world[player.matrisY - 1][player.matrisX] == 99
		   || world[player.matrisY - 1][player.matrisX] == 102
		   || world[player.matrisY - 1][player.matrisX] == 103
		   || world[player.matrisY - 1][player.matrisX] == 104
		   || world[player.matrisY - 1][player.matrisX] == 105
		   || world[player.matrisY - 1][player.matrisX] == 106
		   || world[player.matrisY - 1][player.matrisX] == 107
		   || world[player.matrisY - 1][player.matrisX] == 108
		   || world[player.matrisY - 1][player.matrisX] == 109
		   || world[player.matrisY - 1][player.matrisX] == 113)
	    	result = false;
	}
	else if(player.Direction == "right")
    {
		if(world[player.matrisY + 1][player.matrisX] == 122 
		   || world[player.matrisY + 1][player.matrisX] == 98
		   || world[player.matrisY + 1][player.matrisX] == 99
		   || world[player.matrisY + 1][player.matrisX] == 102
		   || world[player.matrisY + 1][player.matrisX] == 103
		   || world[player.matrisY + 1][player.matrisX] == 104
		   || world[player.matrisY + 1][player.matrisX] == 105
		   || world[player.matrisY + 1][player.matrisX] == 106
		   || world[player.matrisY + 1][player.matrisX] == 107
		   || world[player.matrisY + 1][player.matrisX] == 108
		   || world[player.matrisY + 1][player.matrisX] == 109
		   || world[player.matrisY + 1][player.matrisX] == 113)
	    	result = false;
	}

	return result;
}

isThereLeftRoad = function() {

    var result = true;

    if(player.Direction == "down")
    {
		if(world[player.matrisY][player.matrisX + 1] == 122 
		   || world[player.matrisY][player.matrisX + 1] == 98
		   || world[player.matrisY][player.matrisX + 1] == 99
		   || world[player.matrisY][player.matrisX + 1] == 102
		   || world[player.matrisY][player.matrisX + 1] == 103
		   || world[player.matrisY][player.matrisX + 1] == 104
		   || world[player.matrisY][player.matrisX + 1] == 105
		   || world[player.matrisY][player.matrisX + 1] == 106
		   || world[player.matrisY][player.matrisX + 1] == 107
		   || world[player.matrisY][player.matrisX + 1] == 108
		   || world[player.matrisY][player.matrisX + 1] == 109
		   || world[player.matrisY][player.matrisX + 1] == 113)
	    	result = false;
	}
	else if(player.Direction == "up")
    {
		if(world[player.matrisY][player.matrisX - 1] == 122 
		   || world[player.matrisY][player.matrisX - 1] == 98
		   || world[player.matrisY][player.matrisX - 1] == 99
		   || world[player.matrisY][player.matrisX - 1] == 102
		   || world[player.matrisY][player.matrisX - 1] == 103
		   || world[player.matrisY][player.matrisX - 1] == 104
		   || world[player.matrisY][player.matrisX - 1] == 105
		   || world[player.matrisY][player.matrisX - 1] == 106
		   || world[player.matrisY][player.matrisX - 1] == 107
		   || world[player.matrisY][player.matrisX - 1] == 108
		   || world[player.matrisY][player.matrisX - 1] == 109
		   || world[player.matrisY][player.matrisX - 1] == 113)
	    	result = false;
	}
	else if(player.Direction == "left")
    {
		if(world[player.matrisY + 1][player.matrisX] == 122 
		   || world[player.matrisY + 1][player.matrisX] == 98
		   || world[player.matrisY + 1][player.matrisX] == 99
		   || world[player.matrisY + 1][player.matrisX] == 102
		   || world[player.matrisY + 1][player.matrisX] == 103
		   || world[player.matrisY + 1][player.matrisX] == 104
		   || world[player.matrisY + 1][player.matrisX] == 105
		   || world[player.matrisY + 1][player.matrisX] == 106
		   || world[player.matrisY + 1][player.matrisX] == 107
		   || world[player.matrisY + 1][player.matrisX] == 108
		   || world[player.matrisY + 1][player.matrisX] == 109
		   || world[player.matrisY + 1][player.matrisX] == 113)
	    	result = false;
	}
	else if(player.Direction == "right")
    {
		if(world[player.matrisY - 1][player.matrisX] == 122 
		   || world[player.matrisY - 1][player.matrisX] == 98
		   || world[player.matrisY - 1][player.matrisX] == 99
		   || world[player.matrisY - 1][player.matrisX] == 102
		   || world[player.matrisY - 1][player.matrisX] == 103
		   || world[player.matrisY - 1][player.matrisX] == 104
		   || world[player.matrisY - 1][player.matrisX] == 105
		   || world[player.matrisY - 1][player.matrisX] == 106
		   || world[player.matrisY - 1][player.matrisX] == 107
		   || world[player.matrisY - 1][player.matrisX] == 108
		   || world[player.matrisY - 1][player.matrisX] == 109
		   || world[player.matrisY - 1][player.matrisX] == 113)
	    	result = false;
	}

	return result;
}

isThereShip = function() {

    var result = false;

	if(world[player.matrisY][player.matrisX] == 92
		|| world[player.matrisY][player.matrisX] == 93
		|| world[player.matrisY][player.matrisX] == 99
		|| world[player.matrisY][player.matrisX] == 99)
	    result = true;

	return result;
}

isGreen = function() {

    var result = false;

	if(world[player.matrisY][player.matrisX] == 47)
	    result = true;

	return result;
}

isBlue = function() {

    var result = false;

	if(world[player.matrisY][player.matrisX] == 45)
	    result = true;

	return result;
}

isBlueFlower = function() {

    var result = false;

	if(world[player.matrisY][player.matrisX] == 119)
	    result = true;

	return result;
}

isNumber = function() {

    var result = false;

	if(world[player.matrisY][player.matrisX] == 79
		|| world[player.matrisY][player.matrisX] == 81
		|| world[player.matrisY][player.matrisX] == 82
		|| world[player.matrisY][player.matrisX] == 83
		|| world[player.matrisY][player.matrisX] == 84
		|| world[player.matrisY][player.matrisX] == 85
		|| world[player.matrisY][player.matrisX] == 86
		|| world[player.matrisY][player.matrisX] == 87
		|| world[player.matrisY][player.matrisX] == 110
		|| world[player.matrisY][player.matrisX] == 111
		|| world[player.matrisY][player.matrisX] == 112
		|| world[player.matrisY][player.matrisX] == 114)
	    result = true;

	return result;
}

UntilE2 = function() {

    var result = false;
    console.log(player.matrisY + " " + player.matrisX);
	if(player.matrisY == 3 && player.matrisX == 6)
	    result = true;

	return result;
}

UntilTreasure = function() {

    var result = false;

	if(world[player.matrisY][player.matrisX] == 115
		|| world[player.matrisY][player.matrisX] == 116)
	    result = true;

	return result;
}

//b2 başlangış noktası
UntilB2 = function() {

	if(player.matrisY == 3 && player.matrisX == 3)
	    isB2 = !isB2;

	return isB2;
}

UntilStar = function() {

    var result = false;

	if(world[player.matrisY][player.matrisX] == 121)
	    result = true;

	return result;
}

UntilDestination = function() {

    var result = false;

	if(world[player.matrisY][player.matrisX] == 113)
	    result = true;

	return result;
}

function walkForward(step)
{
	stepG = step;

	if(player.Direction == "up")	
		MoveUp(step);

	else if(player.Direction == "down")	
		MoveDown(step);

	if(player.Direction == "right")	
		MoveRight(step);

	if(player.Direction == "left")	
		MoveLeft(step);
}

function MoveUp(step) {

  	player.yDestTemp -= (gameArea.squareSizeY * step);

  	var dest = {
		  	      destination : player.yDestTemp, 
		  		  direction : "up"
		  	};
	player.DestArray.push(dest);
}

function MoveDown(step) {
	
   	player.yDestTemp +=  (gameArea.squareSizeY * step);
	
	var dest = {
		  		destination : player.yDestTemp, 
		  		direction : "down"
		  	};
	player.DestArray.push(dest);
}

function MoveLeft(step) {

	player.xDestTemp -= (gameArea.squareSizeX * step);

	var dest = {
		  		destination : player.xDestTemp, 
		  		direction : "left"
		  	};

	player.DestArray.push(dest);
}

function MoveRight(step) {

	player.xDestTemp += (gameArea.squareSizeX  * step);

    var dest = {
		  		destination : player.xDestTemp, 
		  		direction : "right"
		  	};
	player.DestArray.push(dest);
}

function turnRight(angle) {
	
	player.normalImages = ["0"];
	player.normalImageIndex = 0;

	if(angle == 90) {
		rotatePlayerSmooth(90);

		if(player.Direction == "up")
			player.Direction = "right";
		else if(player.Direction == "right")
			player.Direction = "down";
		else if(player.Direction == "down")
			player.Direction = "left";
		else if(player.Direction == "left")
			player.Direction = "up";
	} else if(angle == 180) {
		rotatePlayerSmooth(180);

		if(player.Direction == "up")
			player.Direction = "down";
		else if(player.Direction == "right")
			player.Direction = "left";
		else if(player.Direction == "down")
			player.Direction = "up";
		else if(player.Direction == "left")
			player.Direction = "right";
	}
	else
	{
		alert("Yanlış Açı");
	}

	if(hasMoreCode == true && isCodeRunning == true)
	{				
		setTimeout(function() {
		         StateControl();     
		         StepCode();  
		}, 1000);
	}
}

function turnLeft(angle) {
	
	player.normalImages = ["0"];
	player.normalImageIndex = 0;

	if(angle == 90) {
		rotatePlayerSmooth(-90);

		if(player.Direction == "up")
			player.Direction = "left";
		else if(player.Direction == "right")
			player.Direction = "up";
		else if(player.Direction == "down")
			player.Direction = "right";
		else if(player.Direction == "left")
			player.Direction = "down";
	} else if(angle == 180) {
		rotatePlayerSmooth(-180);

		if(player.Direction == "up")
			player.Direction = "down";
		else if(player.Direction == "right")
			player.Direction = "left";
		else if(player.Direction == "down")
			player.Direction = "up";
		else if(player.Direction == "left")
			player.Direction = "right";
	}
	else
	{
		alert("Yanlış Açı");
	}

	if(hasMoreCode == true && isCodeRunning == true)
	{				
		setTimeout(function() {
		         StateControl();     
		         StepCode();  
		}, 1000);
	}
}

function Start() {
	setTimeout(function() {
      		StepCode();
    }, 100);
}

function Stop() {
	setTimeout(function() {
      		StepCode();
    }, 100);
}

function sayKodit(value) {
	setTimeout(function() {
      		StepCode();
    }, 100);
}

function doKodit(value) {
	setTimeout(function() {
      		StepCode();
    }, 100);
}

function doKodit2(value) {
	setTimeout(function() {
      		StepCode();
    }, 100);
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