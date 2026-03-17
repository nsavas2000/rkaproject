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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.pinoo');

goog.require('Blockly.Arduino');

var isLiveMode = false;

Blockly.Arduino['start'] = function(block) {
    return "";
};

Blockly.Arduino['walkForward'] = function(block) {

    var steps = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_NONE);

    Blockly.Arduino.imports_['import_buzzer'] = "from pinoojr import PinooJR";
    Blockly.Arduino.definitions_['define_buzzer1'] = 'mypinoo = PinooJR()';

    var code = 'mypinoo.MoveForward(' + steps + ') \n';

    return code;
};

Blockly.Arduino['walkBackward'] = function(block) {

    var steps = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_NONE);

    Blockly.Arduino.imports_['import_buzzer'] = "from pinoojr import PinooJR";
    Blockly.Arduino.definitions_['define_buzzer1'] = 'mypinoo = PinooJR()';

    var code = 'mypinoo.MoveBackward(' + steps + ') \n';

    return code;
};


Blockly.Arduino['turnRight'] = function(block) {

    var steps = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_NONE);

    Blockly.Arduino.imports_['import_buzzer'] = "from pinoojr import PinooJR";
    Blockly.Arduino.definitions_['define_buzzer1'] = 'mypinoo = PinooJR()';

    var code = 'mypinoo.MoveTurnRigth(' + steps + ') \n';

    return code;
};


Blockly.Arduino['turnLeft'] = function(block) {

    var steps = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_NONE);

    Blockly.Arduino.imports_['import_buzzer'] = "from pinoojr import PinooJR";
    Blockly.Arduino.definitions_['define_buzzer1'] = 'mypinoo = PinooJR()';

    var code = 'mypinoo.MoveTurnLeft(' + steps + ') \n';

    return code;
};


Blockly.Arduino['playBuzzer'] = function(block) {

    var freq = Blockly.Arduino.valueToCode(this, 'FREQUENCY', Blockly.Arduino.ORDER_NONE);

    Blockly.Arduino.imports_['import_buzzer'] = "from pinoojr import PinooJR";
    Blockly.Arduino.definitions_['define_buzzer1'] = 'mypinoo = PinooJR()';

    var code = 'mypinoo.PlayBuzzer(' + freq + ') \n';

    return code;
};