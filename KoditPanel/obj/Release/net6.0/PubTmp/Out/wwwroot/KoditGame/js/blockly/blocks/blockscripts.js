	
	var START_COMMAND = "başla";
	var STOP_COMMAND = "bitir  ";
	var FORWARD_COMMAND = "adım ilerle           ";
	var TURNRIGHT_COMMAND = "derece sağa dön";
	var TURNLEFT_COMMAND = "derece sola dön";
	var WHILE_COMMAND =   "defa tekrarla        ";
	var UNTIL_COMMAND = "kadar tekrarla    ";
	var FUNCTION_COMMAND = "fonksiyon";
	var IF_COMMAND1 = "eğer       ";
	var IF_COMMAND2 = "ise          ";
	var ELSE_COMMAND = "değilse                                        ";
	var END_COMMAND = "                                                  ";
	var REPEATEND_COMMAND = "                                 ";
	var SAY_COMMAND = "söyle ";
	var DO_COMMAND = "yap   ";
	var DO2_COMMAND = "        ";
	var DOEND_COMMAND = "                 ";

	if(lang == "en")
	{
			START_COMMAND = "start";
			STOP_COMMAND = "stop ";
			FORWARD_COMMAND = "step forward      ";
			TURNRIGHT_COMMAND = "deg turn right  ";
			TURNLEFT_COMMAND = "deg turn left   ";
			WHILE_COMMAND =   "repeat times       ";
			UNTIL_COMMAND = "repeat until      ";
			FUNCTION_COMMAND = "function ";
			IF_COMMAND1 = "if         ";
			IF_COMMAND2 = "then         ";
			ELSE_COMMAND = "else                                           ";
			END_COMMAND = "                                                 ";
			REPEATEND_COMMAND = "                                 ";
			SAY_COMMAND = "say   ";
			DO_COMMAND = "do    ";
			DO2_COMMAND = "        ";
			DOEND_COMMAND = "                 ";
	}

	Blockly.Blocks['start'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(START_COMMAND);
      this.setNextStatement(true);
      this.setColour("#f7a510");
      this.setStartHat(true);
    }
	};

 	Blockly.Blocks['bottom'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(STOP_COMMAND);
      this.setPreviousStatement(true);
      this.setColour("#f7a510");
      this.setStartBottom(true);
    }
 	};

	Blockly.Blocks['walk_forward'] = {
	  init: function() {
	    	this.appendValueInput("Value")
        	.setCheck("Number")
        	.setAlign(Blockly.ALIGN_CENTRE);
        this.appendDummyInput()
        		.appendField(FORWARD_COMMAND);
        this.setInputsInline(true)
	    	this.setPreviousStatement(true, null);
	    	this.setNextStatement(true, null);
	    	this.setColour("#00ade7");
	  }
	};

	Blockly.Blocks['turn_right'] = {
	  init: function() {
	  		this.appendDummyInput()
          .appendField(new Blockly.FieldImage("images/right.png", 30, 30, "*"));
	    	this.appendValueInput("Value")
        	.setCheck("Number")
        	.setAlign(Blockly.ALIGN_CENTRE);
        this.appendDummyInput()
        		.appendField(TURNRIGHT_COMMAND);
        this.setInputsInline(true)
	    	this.setPreviousStatement(true, null);
	    	this.setNextStatement(true, null);
	    	this.setColour("#00ade7");
	  }

	};

	Blockly.Blocks['turn_left'] = {
	  init: function() {
	  		this.appendDummyInput()
          .appendField(new Blockly.FieldImage("images/left.png", 30, 30, "*"));
	    	this.appendValueInput("Value")
        	.setCheck("Number")
        	.setAlign(Blockly.ALIGN_CENTRE);
        this.appendDummyInput()
        		.appendField(TURNLEFT_COMMAND);
        this.setInputsInline(true)
	    	this.setPreviousStatement(true, null);
	    	this.setNextStatement(true, null);
	    	this.setColour("#00ade7");
	  }
	};

	Blockly.Blocks['whileKodit'] = {
    init: function() {
	    this.appendValueInput("Value")
        	.setCheck("Number")
        	.setAlign(Blockly.ALIGN_CENTRE);
      this.appendDummyInput()
          .appendField(WHILE_COMMAND);
			this.setPreviousStatement(true, null);
	   	this.setNextStatement(true, null);
      this.setColour("#94c600");
      this.setWhileHat(true);
    }
	};

	Blockly.Blocks['untilKodit'] = {
    init: function() {
	    this.appendValueInput("Value")
        	.setAlign(Blockly.ALIGN_CENTRE);
      this.appendDummyInput()
          .appendField(UNTIL_COMMAND);
			this.setPreviousStatement(true, null);
	   	this.setNextStatement(true, null);
      this.setColour("#94c600");
      this.setWhileHat(true);
    }
	};

 	Blockly.Blocks['whileEndKodit'] = {
    init: function() {
    	this.appendDummyInput()
          .appendField(REPEATEND_COMMAND);
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("images/repeat.png", 60, 30, "*"));
      this.setPreviousStatement(true);
      this.setNextStatement(true, null);
      this.setColour("#94c600");
      this.setWhileBottom(true);
    }
 	};

	Blockly.Blocks['funcKodit'] = {
    init: function() {
    	this.appendDummyInput()
          .appendField(FUNCTION_COMMAND);
	    this.appendValueInput("Value")
      		.setAlign(Blockly.ALIGN_CENTRE);
      this.appendDummyInput()
          .appendField("             ");
			this.setPreviousStatement(true, null);
	   	this.setNextStatement(true, null);
      this.setColour("#a5399c");
      this.setFuncHat(true);
    }
	};

 	Blockly.Blocks['funcEndKodit'] = {
    init: function() {
    	this.appendDummyInput()
          .appendField(END_COMMAND);
			this.setPreviousStatement(true, null);
	   	this.setNextStatement(true, null);
      this.setColour("#a5399c");
      this.setFuncBottom(true);
    }
	};

	Blockly.Blocks['callFuncKodit'] = {
	  init: function() {
    	this.appendDummyInput()
          .appendField(FUNCTION_COMMAND);
	    this.appendValueInput("Value")
      		.setAlign(Blockly.ALIGN_CENTRE);
      this.appendDummyInput()
          .appendField("             ");
      this.setInputsInline(true)
	    this.setPreviousStatement(true, null);
	    this.setNextStatement(true, null);
	    this.setColour("#a5399c");
	  }
	};

	Blockly.Blocks['ifKodit'] = {
    init: function() {
    	this.appendDummyInput()
          .appendField(IF_COMMAND1);
	    this.appendValueInput("Value")
      		.setAlign(Blockly.ALIGN_CENTRE);
      this.appendDummyInput()
          .appendField(IF_COMMAND2);
			this.setPreviousStatement(true, null);
	   	this.setNextStatement(true, null);
      this.setColour("#e7008c");
      this.setIfHat(true);
    }
	};

 	Blockly.Blocks['elseKodit'] = {
    init: function() {
    	this.appendDummyInput()
          .appendField(ELSE_COMMAND);
			this.setPreviousStatement(true, null);
	   	this.setNextStatement(true, null);
      this.setColour("#e7008c");
      this.setElseHat(true);
    }
	};

 	Blockly.Blocks['ifEndKodit'] = {
    init: function() {
    	this.appendDummyInput()
          .appendField(END_COMMAND);
			this.setPreviousStatement(true, null);
	   	this.setNextStatement(true, null);
      this.setColour("#e7008c");
      this.setIfBottom(true);
    }
	};

	Blockly.Blocks['say_kodit'] = {
	  init: function() {
	      this.appendDummyInput()
        		.appendField(SAY_COMMAND);
	    	this.appendValueInput("Value")
        		.setAlign(Blockly.ALIGN_CENTRE);
        this.appendDummyInput()
        		.appendField(DOEND_COMMAND);
        this.setInputsInline(true);
	    	this.setPreviousStatement(true, null);
	    	this.setNextStatement(true, null);
	    	this.setColour("#00ade7");
	  }
	};

	Blockly.Blocks['do_kodit'] = {
	  init: function() {
	      this.appendDummyInput()
        		.appendField(DO_COMMAND);
	    	this.appendValueInput("Value")
        		.setAlign(Blockly.ALIGN_CENTRE);
        this.appendDummyInput()
        		.appendField(DOEND_COMMAND);
        this.setInputsInline(true);
	    	this.setPreviousStatement(true, null);
	    	this.setNextStatement(true, null);
	    	this.setColour("#00ade7");
	  }
	};

	Blockly.Blocks['do_kodit2'] = {
	  init: function() {
	  	  this.appendDummyInput()
        		.appendField(DO2_COMMAND);
	    	this.appendValueInput("Value")
        		.setAlign(Blockly.ALIGN_CENTRE);
         this.appendDummyInput()
        		.appendField(DOEND_COMMAND);
        this.setInputsInline(true);
	    	this.setPreviousStatement(true, null);
	    	this.setNextStatement(true, null);
	    	this.setColour("#00ade7");
	  }
	};