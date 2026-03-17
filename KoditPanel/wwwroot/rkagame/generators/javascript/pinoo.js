/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating JavaScript blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.JavaScript.pinoo');

goog.require('Blockly.JavaScript');

var isLiveMode = false;

Blockly.JavaScript['setLedValueOn'] = function(block) {

    var port = Blockly.JavaScript.valueToCode(this, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var value = "1";

    var code = "LedValue(" + port + ", " + value + ");\n";
   
    return code;
};

Blockly.JavaScript['ledStateOn'] = function(block) {

    var port = block.getFieldValue('PORT');

    return [port, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['setLedValueOff'] = function(block) {

    var port = Blockly.JavaScript.valueToCode(this, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var value = "0";

    var code = "LedValue(" + port + ", " + value + ");\n";
   
    return code;
};

Blockly.JavaScript['ledStateOff'] = function(block) {

    var value = block.getFieldValue('PORT');

    return [value, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['playBuzzer'] = function(block) {

    var frequency =  Blockly.JavaScript.valueToCode(block, 'FREQUENCY', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';

    var code = "";
    code = 'BuzzerSound(' + frequency + ');\n';
  
    return code;
};

Blockly.JavaScript['neoPixelPrepare'] = function(block) {

    return "NeopixelCreateConn();\n"; 
};

Blockly.JavaScript['neoPixelColour1'] = function(block) {

    var colourValue = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = "";

    var hexRed, hexGreen, hexBlue;
    var colourValueTemp = colourValue.replace("#", "").replace("'", "").replace("\"", "");;

    hexRed = colourValueTemp.substring(0, 2);
    hexGreen = colourValueTemp.substring(2, 4);
    hexBlue = colourValueTemp.substring(4, 6);

    code = 'NeopixelChangeLedColor1("' + hexRed + '", "' + hexGreen + '", "' + hexBlue + '");\n';

    return code;
};

Blockly.JavaScript['neoPixelColour2'] = function(block) {

    var colourValue = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = "";

    var hexRed, hexGreen, hexBlue;
    var colourValueTemp = colourValue.replace("#", "").replace("'", "").replace("\"", "");;

    hexRed = colourValueTemp.substring(0, 2);
    hexGreen = colourValueTemp.substring(2, 4);
    hexBlue = colourValueTemp.substring(4, 6);

    code = 'NeopixelChangeLedColor2("' + hexRed + '", "' + hexGreen + '", "' + hexBlue + '");\n';

    return code;
};

Blockly.JavaScript['neoPixelShow'] = function(block) {

    return "ShowNeopixelLedColor();\n";
};

Blockly.JavaScript['motor1States'] = function(block) {

    var value = block.getFieldValue('VALUE');

    return [value, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['motor2States'] = function(block) {

    var value = block.getFieldValue('VALUE');

    return [value, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['motor1'] = function(block) {

    var direction = Blockly.JavaScript.valueToCode(this, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = 'WheelMove(0, ' + direction + ', 100);\n';

    return code;
};

Blockly.JavaScript['motor2'] = function(block) {

    var direction = Blockly.JavaScript.valueToCode(this, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = 'WheelMove(1, ' + direction + ', 100);\n';

    return code;
};

Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "start();\n";
  
  return code;
};


Blockly.JavaScript['walkForward'] = function(block) {

    var code = 'walkForward();\n';

    return code;
};

Blockly.JavaScript['turnLeft'] = function(block) {

    var code = 'turnLeft();\n';

    return code;
};

Blockly.JavaScript['turnRight'] = function(block) {

    var code = 'turnRight();\n';

    return code;
};