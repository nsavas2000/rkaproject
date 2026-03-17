var StartBlockId = "";
var FuncBlockId = "";

var sidebarWidth = $("#leftSide").width();

$("#BlocksPannel").css("width", sidebarWidth);	
$("#blocklyDiv").css("width", sidebarWidth);

var levelcount = "10";
var workspaceCode = "";

var part = String(window.location).split("?")[1];

$(document).ready(function(){
  $(".close").click(function(){
    $(".alert").alert("close");
  });
});

$("#blocklyDiv").height($("#BlocksPannel").height() * 90 / 100);

$("#pgn01").removeClass("active");
$("#pgn02").removeClass("active");
$("#pgn03").removeClass("active");
$("#pgn04").removeClass("active");
$("#pgn05").removeClass("active");
$("#pgn06").removeClass("active");
$("#pgn07").removeClass("active");
$("#pgn08").removeClass("active");
$("#pgn09").removeClass("active");
$("#pgn10").removeClass("active");
$("#pgn11").removeClass("active");
$("#pgn12").removeClass("active");
$("#pgn13").removeClass("active");

if(part == "01")
	$("#pgn01").addClass("active");
if(part == "02")
	$("#pgn02").addClass("active");
if(part == "03")
	$("#pgn03").addClass("active");
if(part == "04")
	$("#pgn04").addClass("active");
if(part == "05")
	$("#pgn05").addClass("active");
if(part == "06")
	$("#pgn06").addClass("active");
if(part == "07")
	$("#pgn07").addClass("active");
if(part == "08")
		$("#pgn08").addClass("active");
if(part == "09")
	$("#pgn09").addClass("active");
if(part == "10")
	$("#pgn10").addClass("active");
if(part == "11")
	$("#pgn11").addClass("active");
if(part == "12")
	$("#pgn12").addClass("active");
if(part == "13")
	$("#pgn13").addClass("active");

let script = document.createElement("script");

script.setAttribute("type", "text/javascript");
script.setAttribute("src", "js/levels/" + pageName + "/level" + part + ".js");

document.head.appendChild(script);

localStorage.setItem(pageName + "level", part);

/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var workspace = Blockly.inject('blocklyDiv', {
  comments: false,
  disable: true,
  collapse: false,
  media: 'media/',
  readOnly: false,
  scrollbars: true,
  toolbox: false,
  trashcan: true,
  horizontalLayout: true,
  oneBasedIndex : true,  
  css : true, 
  toolboxPosition: 'end',
  toolbox: toolbox,
  toolboxOptions: {
    color: true,
    inverted: true
  },
  sounds: true,
  move: {
    scrollbars: true,
    drag: true,
    wheel: true,
  },
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1,
    maxScale: 4,
    minScale: 0.25,
    scaleSpeed: 1.1
  },
  colours: {
    fieldShadow: 'rgba(255, 255, 255, 0.3)',
    dragShadowOpacity: 0.6
  },
  scrollbars: {
    horizontal: true,
    vertical: false
  },

  grid:
  {
      spacing: 20,
      length: 2,
      colour: '#ccc',
      snap: true
  }
});

var pagepart = String(window.location).split("?")[1];

if(pagepart == "01")
var dom = Blockly.Xml.textToDom(level01);
else if(pagepart == "02")
	var dom = Blockly.Xml.textToDom(level02);
else if(pagepart == "03")
	var dom = Blockly.Xml.textToDom(level03);
else if(pagepart == "04")
	var dom = Blockly.Xml.textToDom(level04);
else if(pagepart == "05")
	var dom = Blockly.Xml.textToDom(level05);
else if(pagepart == "06")
	var dom = Blockly.Xml.textToDom(level06);
else if(pagepart == "07")
	var dom = Blockly.Xml.textToDom(level07);
else if(pagepart == "08")
	var dom = Blockly.Xml.textToDom(level08);
else if(pagepart == "09")
	var dom = Blockly.Xml.textToDom(level09);
else if(pagepart == "10")
	var dom = Blockly.Xml.textToDom(level10);
else
	var dom = Blockly.Xml.textToDom(level01);

Blockly.Xml.domToWorkspace(workspace, dom);

var workspaceBlocks = document.getElementById("workspaceBlocks"); 
//workspace.toolbox_.flyout_.autoClose = false;

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

var startXmlDom = Blockly.Xml.workspaceToDom(workspace);
var startXmlText = Blockly.Xml.domToText(startXmlDom);

function change() {
    var xmlDom = Blockly.Xml.workspaceToDom(workspace);
    var xmlText = Blockly.Xml.domToText(xmlDom);

    if (startXmlText != xmlText) {
      window.location.hash = '';
    }

    workspaceCode = xmlText;
}

workspace.addChangeListener(change);
generateCodeAndLoadIntoInterpreter();

function change(event) {
  var output = document.getElementById('importExport');
  var xmlDom = Blockly.Xml.workspaceToDom(workspace);
  xmlText = Blockly.Xml.domToText(xmlDom);
  
  if(event.type == "ui")
  {
    var id = event.blockId;

    if(id != null && workspace.getBlockById(id) != null)
    {
      var block = workspace.getBlockById(id);

      if(block.childBlocks_ != null && block.type == "start")
      {
          StartBlockId = id;
      }
      else if(block.childBlocks_ != null && block.type == "fnblock")
      {
          FuncBlockId = id;
      }
    }
  }
  else
  {
    var id = StartBlockId;
    var funcid = FuncBlockId;

    if(id == null || id == "")
    {
      id = findstartclickedID(xmlText);
    }

    if(funcid == null || funcid == "")
    {
      funcid = findwhenfuncclickedID(xmlText);
    }

    if(id != null && workspace.getBlockById(id) != null)
    {
      var block = workspace.getBlockById(id);
      if(block.childBlocks_ != null && block.type == "start")
      {
          latestCode = Blockly.JavaScript.blockToCode(block.childBlocks_[0]);
      }
    }
    
    if(funcid != null && workspace.getBlockById(funcid) != null)
    {
      var block = workspace.getBlockById(funcid);

      if(block.childBlocks_ != null && block.type == "fnblock")
      {
          funcCode = "function BeeFunction() {\n" + 
                        Blockly.JavaScript.blockToCode(block.childBlocks_[0]) + 
                      "} \n";

          latestCode = latestCode + funcCode;
      }
    }
  }
}

function findstartclickedID(xml) {

    var startIndex = xml.indexOf('<block type="start" id="');
    startIndex = startIndex + 24;

    var tmp = xml.substring(startIndex);

    var endIndex = tmp.indexOf('"');

    var id = tmp.substring(0, endIndex);

    return id;
}

function findwhenfuncclickedID(xml) {

    var startIndex = xml.indexOf('<block type="fnblock" id="');
    startIndex = startIndex + 26;

    var tmp = xml.substring(startIndex);

    var endIndex = tmp.indexOf('"');

    var id = tmp.substring(0, endIndex);

    return id;
}