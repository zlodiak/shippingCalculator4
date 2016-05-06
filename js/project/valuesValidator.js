APP.valuesValidator = {
  emptyCheck: function(value) { 
    if($.trim(value).length == 0) { 
      return 'Это значение не может быть пустым'; 
    };
  },

  minusNumCheck: function(value) { 
    if(parseInt($.trim(value), 10) < 0) { 
      return 'Это значение не может быть меньше нуля'; 
    };
  },

  nullNumCheck: function(value) { 
    if(parseInt($.trim(value), 10) == 0) { 
      return 'Это значение не может быть равно нулю'; 
    };
  },

  isNumCheck: function(value) { 
    if(isNaN(parseInt($.trim(value), 10)) == false) { 
      return 'Это значение не может быть цифрой'; 
    };
  },

  isStrCheck: function(value) { 
    var valueTrimmed = $.trim(value);

    if(isNaN(parseInt(valueTrimmed, 10)) == true && valueTrimmed.length != 0) { 
      return 'Это значение должно быть цифрой'; 
    };
  },

  lowLengthCheck: function(value, lowLimit) { 
    if($.trim(value).length <= lowLimit) { 
      return 'Это значение не может быть таким коротким'; 
    };
  }, 

  doubleStrCheck: function(string1, string2) { 
    var string1 = $.trim(string1),
        string2 = $.trim(string2);

    if(string1 == string2) { return 'Это значение дублируется' };
  }    
}