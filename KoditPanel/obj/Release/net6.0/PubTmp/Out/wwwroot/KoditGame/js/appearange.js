var xmlText;

var sidebarWidth = $("#leftSide").width()*1.05;
$("#BlocksPannel").css("width", sidebarWidth);	
$("#blocklyDiv").css("width", sidebarWidth);

var workspaceCode = "";
var part = window.location.href.split('?')[1];
  
if(part == undefined)
  part = "01";

$("#comboImg").attr("src", "images/flags/" + lang + ".png");

$(document).ready(function(){
  $(".close").click(function(){
    $(".alert").alert("close");
  });
});

$("#blocklyDiv").height($("#BlocksPannel").height() * 90 / 100);

setLanguage();

localStorage.setItem("kodit1level", part);

jQuery('.lang-select').click(function() {
  var theLang = jQuery(this).attr('data-lang');
  
  ChangeLanguage(theLang);
});

function ChangeLanguage(lang)
{	
	var newUrl = String(window.location).split("?")[0] + "?"+ part + "?" + lang; 

	window.location = newUrl;
}

// Level sistemi - Alt aşamalar dahil (çizgi ile)
const levelStructure = [
      {display: "1", value: "01", fileValue: "01"},
      {display: "2", value: "02", fileValue: "02"},
      {display: "3", value: "03", fileValue: "03"},
      {display: "4", value: "04", fileValue: "04"},
      {display: "5", value: "05", fileValue: "05"},
      {display: "6", value: "06", fileValue: "06"},
      {display: "7-1", value: "07-1", fileValue: "07-1"},
      {display: "7-2", value: "07-2", fileValue: "07-2"},
      {display: "7-3", value: "07-3", fileValue: "07-3"},
      {display: "7-4", value: "07-4", fileValue: "07-4"},
      {display: "8", value: "08", fileValue: "08"},
      {display: "9-1", value: "09-1", fileValue: "09-1"},
      {display: "9-2", value: "09-2", fileValue: "09-2"},
      {display: "9-3", value: "09-3", fileValue: "09-3"},
      {display: "9-4", value: "09-4", fileValue: "09-4"},
      {display: "9-5", value: "09-5", fileValue: "09-5"},
      {display: "10", value: "10", fileValue: "10"},
      {display: "11", value: "11", fileValue: "11"},
      {display: "12", value: "12", fileValue: "12"},
      {display: "13", value: "13", fileValue: "13"},
      {display: "14", value: "14", fileValue: "14"},
      {display: "15", value: "15", fileValue: "15"},
      {display: "16", value: "16", fileValue: "16"},
      {display: "17", value: "17", fileValue: "17"},
      {display: "18", value: "18", fileValue: "18"},
      {display: "19", value: "19", fileValue: "19"},
      {display: "20", value: "20", fileValue: "20"},
      {display: "21", value: "21", fileValue: "21"},
      {display: "22", value: "22", fileValue: "22"},
      {display: "23", value: "23", fileValue: "23"},
      {display: "24", value: "24", fileValue: "24"},
      {display: "25", value: "25", fileValue: "25"},
      {display: "26", value: "26", fileValue: "26"},
      {display: "27", value: "27", fileValue: "27"},
      {display: "28", value: "28", fileValue: "28"},
      {display: "29", value: "29", fileValue: "29"},
      {display: "30", value: "30", fileValue: "30"},
      {display: "31", value: "31", fileValue: "31"},
      {display: "32", value: "32", fileValue: "32"},
      {display: "33", value: "33", fileValue: "33"},
      {display: "34", value: "34", fileValue: "34"},
      {display: "35-1", value: "35-1", fileValue: "35-1"},
      {display: "35-2", value: "35-2", fileValue: "35-2"},
      {display: "36", value: "36", fileValue: "36"},
      {display: "37", value: "37", fileValue: "37"}
];

let currentLevelPage = 0;
const levelsPerPage = 5;
const totalLevels = levelStructure.length;
let completedLevels = JSON.parse(localStorage.getItem('completedLevels') || '[]');

function initializeLevelPage() {
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let currentLevel = part;

if (!currentLevel) {
  currentLevel = window.location.href.split('?')[1]?.split('&')[0];
}

if (currentLevel) {
  const levelIndex = levelStructure.findIndex(l => l.value === currentLevel);
  if (levelIndex !== -1) {
    currentLevelPage = Math.floor(levelIndex / levelsPerPage);
  }
}
}

function generateLevelButtons() {
const container = document.getElementById('levelButtonsContainer');
container.innerHTML = '';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let currentLevel = urlParams.get('level');

if (!currentLevel) {
  currentLevel = window.location.href.split('?')[1]?.split('&')[0];
}

if (currentLevel) {
  window.part = currentLevel;
}

const startIndex = currentLevelPage * levelsPerPage;
const endIndex = Math.min(startIndex + levelsPerPage, totalLevels);

for (let i = startIndex; i < endIndex; i++) {
  const level = levelStructure[i];
  const btn = document.createElement('button');
  btn.className = 'level-btn-header';
  btn.textContent = level.display;
  
  if (level.value === currentLevel || level.value === window.part) {
    btn.classList.add('active');
  } 
  else if (completedLevels.includes(level.value)) {
    btn.classList.add('completed');
  }
  
  btn.onclick = () => {
    GotoPage(level.value);
  };
  
  container.appendChild(btn);
}

updateNavButtons();
}

function scrollLevels(direction) {
const maxPage = Math.ceil(totalLevels / levelsPerPage) - 1;
currentLevelPage = Math.max(0, Math.min(maxPage, currentLevelPage + direction));
generateLevelButtons();
}

function updateNavButtons() {
const maxPage = Math.ceil(totalLevels / levelsPerPage) - 1;
document.getElementById('prevBtn').disabled = currentLevelPage === 0;
document.getElementById('nextBtn').disabled = currentLevelPage === maxPage;
}

initializeLevelPage();
generateLevelButtons();

  let script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  // URL'den gelen part değerini kullan (07-1 formatında)
  script.setAttribute("src", "js/levels/kodit1/level" + part + ".js");
  document.head.appendChild(script);

	var toolbox = document.getElementById("toolbox");

var options = { 
	  collapse : true, 
	  comments : true, 
	  disable : true, 
	  maxBlocks : Infinity, 
	  trashcan : true, 
	  horizontalLayout : false, 
	  toolboxPosition : 'start', 
	  css : true, 
	  media : 'https://blockly-demo.appspot.com/static/media/', 
	  rtl : false, 
	  scrollbars : true, 
	  sounds : true, 
	  oneBasedIndex : true, 
	  grid : {
	    spacing : 20, 
	    length : 1, 
	    colour : '#fff', 
	    snap : true
	  }, 
	  move: {
	          scrollbars: true,
	          drag: true,
	          wheel: true,
	        },
	  toolbox: toolbox,
	  toolboxOptions: {
	      color: true,
	      inverted: true
	    },
	  zoom : {
	    controls: true,
	    wheel: false,
	    startScale: 1.0,
	    maxScale: 4,
	    minScale: 0.25,
	    scaleSpeed: 1.1
	  }
	};

var workspace = Blockly.inject('blocklyDiv', options);

var pagepart = urlParams.get('level');

//Level yükleme sistemi - dinamik
try
{
  var levelVarName = 'level' + part.replace('-', '_');
  var dom = Blockly.Xml.textToDom(window[levelVarName]);
  Blockly.Xml.domToWorkspace(workspace, dom);
}
catch
{

}

var workspaceBlocks = document.getElementById("workspaceBlocks"); 

Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

var startXmlDom = Blockly.Xml.workspaceToDom(workspace);
var startXmlText = Blockly.Xml.domToText(startXmlDom);

function change() {
    var xmlDom = Blockly.Xml.workspaceToDom(workspace);
    xmlText = Blockly.Xml.domToText(xmlDom);

    if (startXmlText != xmlText) {
      window.location.hash = '';
    }

    workspaceCode = xmlText;
}

workspace.addChangeListener(change);

function showSolution() {
  const modal = document.getElementById('solutionModal');
  const content = document.getElementById('solutionContent');
  const levelNumber = document.getElementById('solutionLevelNumber');
  
  // URL'den verileri al (örnek: kodit.html?02?tr)
  const url = window.location.href;
  const parts = url.split('?'); // ["kodit.html", "02", "tr"]
  
  // part ve lang değerlerini ayıkla
  const part = parts[1] || '01';  // eğer boşsa varsayılan 01
  const lang = parts[2] || 'tr';  // eğer boşsa varsayılan tr
  
  // Level numarasını göster
  levelNumber.textContent = part;
  
  // Modalı hazırla
  content.innerHTML = '<p class="solution-loading">Çözüm yükleniyor...</p>';
  modal.style.display = 'block';
  
  // Görsel yolu - dile göre farklı dosya adları
  let imgPath;
  if (lang === 'en') {
    imgPath = `solve-png/${part}-en.png`;
  } else {
    imgPath = `solve-png/${part}.png`; // Türkçe ve diğerleri
  }
  
  const img = new Image();
  
  img.onload = function() {
    content.innerHTML = `<img src="${imgPath}" alt="Level ${part} Çözümü" class="solution-image">`;
  };
  
  img.onerror = function() {
    content.innerHTML = `
      <div class="solution-error">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 48px; margin-bottom: 15px;"></i>
        <p>Üzgünüz, bu level için çözüm görseli bulunamadı.</p>
        <p style="font-size: 14px; color: #999;">Görsel yolu: ${imgPath}</p>
        <p style="font-size: 14px; color: #999;">Dil: ${lang}</p>
      </div>
    `;
  };
  
  img.src = imgPath;
}


function closeSolution() {
  const modal = document.getElementById('solutionModal');
  modal.style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('solutionModal');
  if (event.target === modal) {
    closeSolution();
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeSolution();
  }
});

function setLanguage() {
  if(lang == "tr")
  {
    $("#btSolution").text("Çözüm");
    $("#btSave").text("Kaydet");
    $("#btLoad").text("Yükle");
  }
  else
  {
    $("#btSolution").text("Solution");
    $("#btSave").text("Save");
    $("#btLoad").text("Load");
  }
}