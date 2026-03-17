
function LoadCode(code)
{
    xmlText = code;
    workspace.clear();
    var dom = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(workspace, dom);
  
    loadCode();
}

function loadCode() {
    latestCode = Blockly.JavaScript.workspaceToCode(workspace);
}

function dispFile(contents) {
    workspace.clear();
    xmlText = contents;
    var dom = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(workspace, dom);

    loadCode();
}

function clickElem(elem) {
    // Thx user1601638 on Stack Overflow (6/6/2018 - https://stackoverflow.com/questions/13405129/javascript-create-and-save-file )
    var eventMouse = document.createEvent("MouseEvents");
    eventMouse.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    elem.dispatchEvent(eventMouse);
}

function OpenProject(func) {
    readFile = function(e) {
      var file = e.target.files[0];
      if (!file) {
        return;
      }
      var reader = new FileReader();
      reader.onload = function(e) {
        var contents = e.target.result;
        fileInput.func(contents)
        document.body.removeChild(fileInput)
      }
      reader.readAsText(file)

      var fileName = file.name;
      fileName = fileName.replace(".kodit", "");
    }
    fileInput = document.createElement("input")
    fileInput.type = 'file'
    fileInput.style.display = 'none'
    fileInput.onchange = readFile
    fileInput.func = func
    document.body.appendChild(fileInput)
    clickElem(fileInput);
}

async function SaveProject()
{
    var projectName = "KoditProject" + localStorage.getItem("kodit1level");

    const fileHandle = await window.self.showSaveFilePicker({
                                      suggestedName: projectName + '.kodit',
                                      types: [{
                                        description: 'kodit',
                                        accept: {
                                          'text/plain': ['.kodit'],
                                        },
                                      }],
                                    })
    const fileStream = await fileHandle.createWritable();
    await fileStream.write(new Blob([xmlText], {type: "text/plain"}));
    await fileStream.close();

    var fileName = fileHandle.name;
    fileName = fileName.replace(".kodit", "");
}

const saveFile = async (blob, suggestedName) => {
  // Feature detection. The API needs to be supported
  // and the app not run in an iframe.
  const supportsFileSystemAccess =
    'showSaveFilePicker' in window &&
    (() => {
      try {
        return window.self === window.top;
      } catch {
        return false;
      }
    })();
  // If the File System Access API is supported…
  if (supportsFileSystemAccess) {
    try {
      // Show the file save dialog.
      const handle = await showSaveFilePicker({
        suggestedName,
      });
      // Write the blob to the file.
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return;
    } catch (err) {
      // Fail silently if the user has simply canceled the dialog.
      if (err.name !== 'AbortError') {
        console.error(err.name, err.message);
        return;
      }
    }
  }
};
