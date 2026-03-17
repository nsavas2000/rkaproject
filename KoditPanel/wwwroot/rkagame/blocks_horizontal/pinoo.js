/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
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
 * @fileoverview Wedo blocks for Scratch (Horizontal)
 * @author ascii@media.mit.edu <Andrew Sliwinski>
 */
'use strict';

goog.provide('Blockly.Blocks.pinoo');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['ledStateOn'] = {
  /**
   * Block for motor speed drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu(
            [
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/ledonport1.png',
                value: '0', width: 72, height: 72, alt: 'port1'},
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/ledonport2.png',
                value: '1', width: 72, height: 72, alt: 'port2'},
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/ledonport3.png',
                value: '2', width: 72, height: 72, alt: 'port3'},
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/ledonport4.png',
                value: '3', width: 72, height: 72, alt: 'port4'},
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/ledonport5.png',
                value: '4', width: 72, height: 72, alt: 'port5'},
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/ledonport6.png',
                value: '5', width: 72, height: 72, alt: 'port6'}
            ]), 'PORT');
    this.setOutput(true);
    this.setColour("#0aad82",
        "#098161",
        "#098161"
    );
  }
};

Blockly.Blocks['ledStateOff'] = {
  /**
   * Block for motor speed drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu(
            [
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/ledoffport1.png',
                value: '0', width: 72, height: 72, alt: 'port1'},
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/ledoffport2.png',
                value: '1', width: 72, height: 72, alt: 'port2'},
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/ledoffport3.png',
                value: '2', width: 72, height: 72, alt: 'port3'},
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/ledoffport4.png',
                value: '3', width: 72, height: 72, alt: 'port4'},
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/ledoffport5.png',
                value: '4', width: 72, height: 72, alt: 'port5'},
                {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/ledoffport6.png',
                value: '5', width: 72, height: 72, alt: 'port6'}
            ]), 'PORT');
    this.setOutput(true);
    this.setColour("#0aad82",
        "#098161",
        "#098161"
    );
  }
};

Blockly.Blocks['setLedValueOn'] = {
  /**
   * Block to set motor speed.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "setLedValue",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/ledonport1.svg",
          "width": 40,
          "height": 40,
          "alt": "value"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": "#0aad82",
      "colourSecondary": "#098161",
      "colourTertiary": "#098161"
    });
  }
};

Blockly.Blocks['setLedValueOff'] = {
  /**
   * Block to set motor speed.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "setLedValue",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/ledoffport1.svg",
          "width": 40,
          "height": 40,
          "alt": "value"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": "#0aad82",
      "colourSecondary": "#098161",
      "colourTertiary": "#098161"
    });
  }
};

Blockly.Blocks['walkForward'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "walkForward",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/forward.png",
          "width": 40,
          "height": 40,
          "alt": "ileri"
        },
        
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": "#1E90FF",
      "colourSecondary":  "#0000CD",
      "colourTertiary":  "#0000CD"
    });
  }
};


Blockly.Blocks['turnRight'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "turnRight",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/turnright.png",
          "width": 40,
          "height": 40,
          "alt": "Sağ"
        },
        
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": "#1E90FF",
      "colourSecondary":  "#0000CD",
      "colourTertiary":  "#0000CD"
    });
  }
};


Blockly.Blocks['turnLeft'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "turnLeft",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/turnleft.png",
          "width": 40,
          "height": 40,
          "alt": "Sol"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": "#1E90FF",
      "colourSecondary":  "#0000CD",
      "colourTertiary":  "#0000CD"
    });
  }
};

Blockly.Blocks['stopdrive'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "stopdrive",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/stopdrive.svg",
          "width": 40,
          "height": 40,
          "alt": "Dur"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": "#FFEADD",
      "colourSecondary":  "#c13024",
      "colourTertiary":  "#c13024"
    });
  }
};

Blockly.Blocks['playBuzzer'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "playBuzzer",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/play-on.svg",
          "width": 40,
          "height": 40,
          "alt": "Play"
        },
        {
          "type": "input_value",
          "name": "FREQUENCY",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": "#0aad82",
      "colourSecondary": "#098161",
      "colourTertiary": "#098161"
    });
  }
};


Blockly.Blocks['motor1States'] = {
  /**
   * Block for motor speed drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu(
            [
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/m1forward.png',
                value: '0', width: 48, height: 48, alt: 'forward'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/m1stop.png',
                value: '1', width: 48, height: 48, alt: 'stop'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/m1backward.png',
                value: '2', width: 48, height: 48, alt: 'backward'}
            ]), 'VALUE');
    this.setOutput(true);
    this.setColour("#f74739",
        "#c13024",
        "#c13024"
    );
  }
};

Blockly.Blocks['motor2States'] = {
  /**
   * Block for motor speed drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu(
            [
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/m2forward.png',
                value: '0', width: 48, height: 48, alt: 'forward'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/m2stop.png',
                value: '1', width: 48, height: 48, alt: 'stop'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/m2backward.png',
                value: '2', width: 48, height: 48, alt: 'backward'}
            ]), 'VALUE');
    this.setOutput(true);
    this.setColour("#f74739",
        "#c13024",
        "#c13024"
    );
  }
};

Blockly.Blocks['motor1'] = {
  /**
   * Block to set motor speed.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "motor1",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/motor1forward.png",
          "width": 40,
          "height": 40,
          "alt": "value"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": "#f74739",
      "colourSecondary":  "#c13024",
      "colourTertiary":  "#c13024"
    });
  }
};

Blockly.Blocks['motor2'] = {
  /**
   * Block to set motor speed.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "motor2",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/motor2forward.png",
          "width": 40,
          "height": 40,
          "alt": "value"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": "#f74739",
      "colourSecondary":  "#c13024",
      "colourTertiary":  "#c13024"
    });
  }
};

Blockly.Blocks['servoMotor1'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "servoMotor1",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/servo1.svg",
          "width": 50,
          "height": 50,
          "alt": "servo"
        },
        {
          "type": "input_value",
          "name": "ANGLE",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": "#f74739",
      "colourSecondary":  "#c13024",
      "colourTertiary":  "#c13024"
    });
  }
};

Blockly.Blocks['servoMotor2'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "servoMotor1",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/servo2.svg",
          "width": 50,
          "height": 50,
          "alt": "servo"
        },
        {
          "type": "input_value",
          "name": "ANGLE",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": "#f74739",
      "colourSecondary":  "#c13024",
      "colourTertiary":  "#c13024"
    });
  }
};

