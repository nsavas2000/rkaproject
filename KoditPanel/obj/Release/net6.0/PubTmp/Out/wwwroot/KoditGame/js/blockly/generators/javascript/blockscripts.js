
  
  Blockly.JavaScript['start'] = function(block) {
    // TODO: Assemble JavaScript into code variable.

    var code = "";

    code = "Start();\n";

    return code;
  };

  Blockly.JavaScript['bottom'] = function(block) {
    // TODO: Assemble JavaScript into code variable.

    var code = "";

    code = "Stop();\n";

    return code;
  };

  Blockly.JavaScript['turn_right'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var value = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "";

    code = "turnRight("+ value + ");\n";

    return code;
  };

  Blockly.JavaScript['turn_left'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var value = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "";

    code = "turnLeft("+ value + ");\n";

    return code;
  };

  Blockly.JavaScript['walk_forward'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var value = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "walkForward(" + value + ");\n";

    return code;
  };
  
  Blockly.JavaScript['walk_input'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var step = Blockly.JavaScript.valueToCode(block, 'Step', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "walkForward(" + step + ");\n";

    return code;
  };

  Blockly.JavaScript['whileKodit'] = function(block) {

    var count = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);
    const random = Math.floor(Math.random() * 1000);
    var code = 
        "\nfor (i" + random + " = 0; i" + random + " < " + count + "; i" + random + "++) { \n" +
        ' loopstep(); \n'; 

    return code;
  };

  Blockly.JavaScript['untilKodit'] = function(block) {

    var condition = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);   
    
    condition = condition.replace("'", "");
    condition = condition.replace("'", "");
    condition = duzeltMetin(condition);

    if(condition == "e2_karesine")
      condition = "UntilE2()";
    else if(condition == "hazine")
      condition = "UntilTreasure()";
    else if(condition == "hazineye")
      condition = "UntilTreasure()";
    else if(condition == "b2")
      condition = "UntilB2()";
    else if(condition == "b2_karesine")
      condition = "UntilB2()";
    else if(condition == "yildiza")
      condition = "UntilStar()";
    else if(condition == "hedefe")
      condition = "UntilDestination()";
    else
      condition = "false";

    var code = 
        "\nwhile(" + condition + " == false) { \n" +
        ' loopstep(); \n'; 

    return code;
  };

  Blockly.JavaScript['whileEndKodit'] = function(block) {
    
    var code = 
        "\n} \n" +
        'loopend();\n'; 

    return code;
  };

  Blockly.JavaScript['funcKodit'] = function(block) {

    var functionName = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);   
    
    functionName = functionName.replace("'", "");
    functionName = functionName.replace("'", "");
     // TODO: Assemble JavaScript into code variable.
    functionName = duzeltMetin(functionName);

    var code = "function" + " " + functionName + "()" + " { \n";
    return code;
  };

  Blockly.JavaScript['funcEndKodit'] = function(block) {

     // TODO: Assemble JavaScript into code variable.
    var code = "}\n ";
    return code;
  };

  Blockly.JavaScript['callFuncKodit'] = function(block) {

    var functionName = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC); 

    functionName = functionName.replace("'", "");
    functionName = functionName.replace("'", "");
    // TODO: Assemble JavaScript into code variable.
    functionName = duzeltMetin(functionName);
    var code = functionName + "();\n";
    return code;
  };

  Blockly.JavaScript['ifKodit'] = function(block) {

    var condition = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);   
    
    condition = condition.replace("'", "");
    condition = condition.replace("'", "");
    condition = duzeltMetin(condition);

    if(condition == "yesil")
      condition = "isGreen()";
    else if(condition == "kare_yesil")
      condition = "isGreen()";
    else if(condition == "kare_mavi")
      condition = "isBlue()";
    else if(condition == "gemi_var")
      condition = "isThereShip()";
    else if(condition == "sagda_yol_var")
      condition = "isThereRightRoad()";
    else if(condition == "solda_yol_var")
      condition = "isThereLeftRoad()";
    else if(condition == "ileride_yol_var")
      condition = "isThereFrontRoad()";
    else if(condition == "mavi_cicek")
    condition = "isBlueFlower()";
    else if(condition == "sayi")
      condition = "isNumber()";
    else 
      condition = "false";

    var code = "if(" + condition + ")" + " { loopstep();\n";
    return code;
  };

  Blockly.JavaScript['elseKodit'] = function(block) {

     // TODO: Assemble JavaScript into code variable.
    var code = "} else {loopend();\n ";
    return code;
  };

  Blockly.JavaScript['ifEndKodit'] = function(block) {

     // TODO: Assemble JavaScript into code variable.
    var code = "}#endif#\n ";
    return code;
  };

  Blockly.JavaScript['say_kodit'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var value = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "sayKodit(" + value + ");\n";

    return code;
  };

  Blockly.JavaScript['do_kodit'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var value = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "doKodit(" + value + ");\n";

    return code;
  };

  Blockly.JavaScript['do_kodit2'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var value = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "doKodit2(" + value + ");\n";

    return code;
  };

  function duzeltMetin(metin) {
    const cevir = {
      'ç': 'c', 'Ç': 'C',
      'ğ': 'g', 'Ğ': 'G',
      'ı': 'i', 'İ': 'i',
      'ö': 'o', 'Ö': 'O',
      'ş': 's', 'Ş': 'S',
      'ü': 'u', 'Ü': 'U'
    };

    // Türkçe karakterleri değiştir
    let yeniMetin = metin.replace(/[çÇğĞıİöÖşŞüÜ]/g, harf => cevir[harf] || harf);

    // Boşlukları kaldır
    yeniMetin = yeniMetin.replace(/\s+/g, '_');

    // Tüm karakterleri küçük harfe dönüştür
    yeniMetin = yeniMetin.toLowerCase();

    return yeniMetin;
  }