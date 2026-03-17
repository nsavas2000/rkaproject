	function ShowCode(code)
	{
		var result = code;
	
		var count = (result.match(new RegExp("highlightBlock", "g")) || []).length;
		
		for(i = 0; i < count; i++)
		{
			result = result.replace(/highlightBlock(.*)/, '');
		}

        if(result.indexOf("\n") == 0)
        {
            result = result.replace("\n", "");
        }

		return result;
	}
	
    /* Define function for escaping user input to be treated as 
       a literal string within a regular expression */
    function escapeRegExp(string){
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
     
    /* Define functin to find and replace specified term with replacement string */
    function replaceAll(str, term, replacement) {
      return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
    }

    String.prototype.insert = function (index, string) {
      if (index > 0)
        return this.substring(0, index) + string + this.substring(index, this.length);

      return string + this;
    };