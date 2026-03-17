function InfoMessage(headerMessage, explanationMessage, hint)
{
	$("#messageInfoModalBody").html(headerMessage);
	window.location.href = "#messageInfoModal";
}

function ShowInfoExp()
{
	$("#messageInfoModalBody").html(explanationMessage);
}

function InfoMessageStart()
{
	if(lang == "tr")
	{
		$("#messageInfoModalHeader").html("Başlama bloğunu eklemelisin");
		$("#messageInfoModalExplanation").html("<img src='images/info/start.png'/>");
	}
	else if(lang == "en")
	{
		$("#messageInfoModalHeader").html("Use start block");
		$("#messageInfoModalExplanation").html("<img src='images/info-en/start.png'/>");
	}

	window.location.href = "#messageInfoModal";
}

function ErrorMessage()
{
	window.location.href = "#messageErrorModal";

	if(lang == "tr")
	{
		$("#txtErrorHeader").text("OLMADI!!!");
		$("#txtErrorMessage").text("Hadi Tekrar Dene");
	}
	else if(lang == "en")
	{
		$("#txtErrorHeader").text("WRONG!!!");
		$("#txtErrorMessage").text("Try Again");
	}

	GameFailure();
}

function SuccessMessage(score)
{	
    window.location.href = "#messageSuccessModal";
    
    GameSuccess();

	$("#btnSuccessNext").click(function() {

		if(part == levelcount)
		{
		  	window.location = "";
		}
		else
		{
			var pageIndex = Number(part);
			pageIndex = pageIndex + 1;
			  
			var lang = String(window.location).split("?")[2];

	  		var user = getUrlParameter("user");
	  		var game = getUrlParameter("game");
	  		var stage = getUrlParameter("stage");
	  		
			if(pageIndex < 10)
			  	window.location = pageName + ".html?0" + String(pageIndex) + "?" + lang + "?user=" + user + "?game=" + game + "?stage=" + stage;
			else
			  	window.location = pageName + ".html?" + String(pageIndex) + "?" + lang + "?user=" + user + "?game=" + game + "?stage=" + stage;
		}
	  
	});
}

function GameSuccess()
{
	GameResult("success");
}

function GameFailure()
{
	GameResult("failure");
}

function GameResult(result)
{
  	console.log(result);
}