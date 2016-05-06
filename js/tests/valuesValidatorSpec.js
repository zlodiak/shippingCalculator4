describe("valuesValidator:", function() {
  describe("emptyCheck", function() {
    var errorMessage = 'Это значение не может быть пустым';

    it("should return errormessage for empty string", function() {
      expect(APP.valuesValidator.emptyCheck('')).toEqual(errorMessage);
    });

    it("should not return errormessage for not empty string", function() {
      expect(APP.valuesValidator.emptyCheck('string')).not.toEqual(errorMessage);
    });  
  });


  describe("minusNumCheck", function() {
    var errorMessage = 'Это значение не может быть меньше нуля';

    it("should return errormessage for positive value", function() {
      expect(APP.valuesValidator.minusNumCheck(-6)).toEqual(errorMessage);
    });

    it("should not return errormessage for negative value", function() {
      expect(APP.valuesValidator.minusNumCheck(55)).not.toEqual(errorMessage);
    });  

    it("should not return errormessage for null value", function() {
      expect(APP.valuesValidator.minusNumCheck(0)).not.toEqual(errorMessage);
    });    
  });


  describe("nullNumCheck", function() {
    var errorMessage = 'Это значение не может быть равно нулю';

    it("should return errormessage for null value", function() {
      expect(APP.valuesValidator.nullNumCheck(0)).toEqual(errorMessage);
    });

    it("should not return errormessage for positive value", function() {
      expect(APP.valuesValidator.nullNumCheck(55)).not.toEqual(errorMessage);
    }); 

    it("should not return errormessage for negative value", function() {
      expect(APP.valuesValidator.nullNumCheck(-55)).not.toEqual(errorMessage);
    });       
  });


  describe("isNumCheck", function() {
    var errorMessage = 'Это значение не может быть цифрой';

    it("should return errormessage for number", function() {
      expect(APP.valuesValidator.isNumCheck(444)).toEqual(errorMessage);
    });

    it("should return errormessage for float", function() {
      expect(APP.valuesValidator.isNumCheck(444.45)).toEqual(errorMessage);
    });  

    it("should not return errormessage for string", function() {
      expect(APP.valuesValidator.isNumCheck('sdgs')).not.toEqual(errorMessage);
    }); 

    it("should not return errormessage for boolean", function() {
      expect(APP.valuesValidator.isNumCheck(true)).not.toEqual(errorMessage);
    });  

    it("should not return errormessage for undefined", function() {
      expect(APP.valuesValidator.isNumCheck(undefined)).not.toEqual(errorMessage);
    });         
  });


  describe("isStrCheck", function() {
    var errorMessage = 'Это значение должно быть цифрой';

    it("should return errormessage for string", function() {
      expect(APP.valuesValidator.isStrCheck('string')).toEqual(errorMessage);
    });

    it("should return errormessage for boolean", function() {
      expect(APP.valuesValidator.isStrCheck(true)).toEqual(errorMessage);
    });    

    it("should not return errormessage for float", function() {
      expect(APP.valuesValidator.isStrCheck(444.45)).not.toEqual(errorMessage);
    });  

    it("should not return errormessage for number", function() {
      expect(APP.valuesValidator.isStrCheck(23)).not.toEqual(errorMessage);
    });        
  });


  describe("lowLengthCheck", function() {
    var errorMessage = 'Это значение не может быть таким коротким';

    it("should return errormessage for short string", function() {
      expect(APP.valuesValidator.lowLengthCheck('we', 3)).toEqual(errorMessage);
    });

    it("should return errormessage for short string", function() {
      expect(APP.valuesValidator.lowLengthCheck('www', 3)).toEqual(errorMessage);
    });  

    it("should not return errormessage for long string", function() {
      expect(APP.valuesValidator.lowLengthCheck('string', 3)).not.toEqual(errorMessage);
    });  
  });
});