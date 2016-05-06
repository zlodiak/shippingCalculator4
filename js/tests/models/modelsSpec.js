describe("CalcModel:", function() {
  var DATA = {
    errDepartCity: ['qwerty', 'asdfgh'],
    errDestinCity: ['qwerty', 'asdfgh'],
    errShippOptionsWeight: ['qwerty', 'asdfgh'],
    errShippOptionsVolume: ['qwerty', 'asdfgh']
  };

  beforeEach(function() {
    this.model = new APP.CalcModel(DATA);
    this.valuesValidator = APP.valuesValidator;
  });  

  it("should init successful", function() {
    expect(this.model).toBeDefined();
  });


  describe("_resetErr", function() {
    it("should errDepartCity is not empty after init", function() {
      var ModelcountElem = this.model.get('errDepartCity').length,
          DATAcountElem = DATA.errDepartCity.length;

      expect(ModelcountElem).toEqual(DATAcountElem)
    });  

    it("should errDepartCity is empty after _resetErr()", function() {
      this.model._resetErr();

      var ModelcountElem = this.model.get('errDepartCity').length,
          DATAcountElem = DATA.errDepartCity.length;    

      expect(ModelcountElem).toEqual(0)
    });   

    it("should all errors props is empty after _resetErr()", function() {
      this.model._resetErr();

      var ModelcountElems = this.model.get('errDepartCity').length + 
                            this.model.get('errDestinCity').length +
                            this.model.get('errShippOptionsWeight').length +
                            this.model.get('errShippOptionsVolume').length;

      var DATAcountElem = DATA.errDepartCity.length;    

      expect(ModelcountElems).toEqual(0);
    });    
  });


  describe("validate", function() {
    it("should return undefined for valid data", function() {
      this.model._resetErr();

      var validData = {
        departCity: 'Moscow',
        destinCity: 'New York',
        shippOptionsWeight: 100,
        shippOptionsVolume: 12 
      };

      expect(this.model.validate(validData)).toEqual(undefined);
    });

    it("should return something for invalid data", function() {
      this.model._resetErr();

      var inValidData = {
        departCity: 'Moscow',
        destinCity: 'New York',
        shippOptionsWeight: 100,
        shippOptionsVolume: -12 
      };

      expect(this.model.validate(inValidData)).not.toEqual(undefined);
    });
  });    


  describe("_validDepartCity", function() {
    it("should not generate errors for long string data", function() {
      this.model._resetErr();
      this.model._validDepartCity('string');

      expect(this.model.get('errDepartCity').length).toEqual(0);      
    });

    it("should generate errors for short string data", function() {
      this.model._resetErr();
      this.model._validDepartCity('qw');

      expect(this.model.get('errDepartCity').length).not.toEqual(0);      
    });    

    it("should generate errors for num data", function() {
      this.model._resetErr();
      this.model._validDepartCity(23);

      expect(this.model.get('errDepartCity').length).not.toEqual(0);      
    });    

    it("should generate errors for empty data", function() {
      this.model._resetErr();
      this.model._validDepartCity();

      expect(this.model.get('errDepartCity').length).not.toEqual(0);      
    });            
  });


  describe("_validDestinCity", function() {
    it("should not generate errors for long string data", function() {
      this.model._resetErr();
      this.model._validDestinCity('string1');

      expect(this.model.get('errDestinCity').length).toEqual(0);      
    });

    it("should generate errors for short string data", function() {
      this.model._resetErr();
      this.model._validDestinCity('qw');

      expect(this.model.get('errDestinCity').length).not.toEqual(0);      
    });    

    it("should generate errors for num data", function() {
      this.model._resetErr();
      this.model._validDestinCity(23);

      expect(this.model.get('errDestinCity').length).not.toEqual(0);      
    });    

    it("should generate errors for empty data", function() {
      this.model._resetErr();
      this.model._validDestinCity();

      expect(this.model.get('errDestinCity').length).not.toEqual(0);      
    });  

    it("should generate errors for double strings data", function() {
      this.model._resetErr();
      this.model._validDestinCity('string1', 'string1');

      expect(this.model.get('errDestinCity').length).not.toEqual(0);      
    });  

    it("should not generate errors for various strings data", function() {
      this.model._resetErr();
      this.model._validDestinCity('string1', 'string2');

      expect(this.model.get('errDestinCity').length).toEqual(0);      
    });                      
  }); 


  describe("_validShippOptionsWeight", function() {
    it("should not generate errors for positive number data", function() {
      this.model._resetErr();
      this.model._validShippOptionsWeight(122);

      expect(this.model.get('errShippOptionsWeight').length).toEqual(0);      
    });

    it("should generate errors for negative number data", function() {
      this.model._resetErr();
      this.model._validShippOptionsWeight('qw');

      expect(this.model.get('errShippOptionsWeight').length).not.toEqual(0);      
    });    

    it("should generate errors for zero number data", function() {
      this.model._resetErr();
      this.model._validShippOptionsWeight(0);

      expect(this.model.get('errShippOptionsWeight').length).not.toEqual(0);      
    });  

    it("should generate errors for string data", function() {
      this.model._resetErr();
      this.model._validShippOptionsWeight(0);

      expect(this.model.get('errShippOptionsWeight').length).not.toEqual(0);      
    });  

    it("should generate errors for empty data", function() {
      this.model._resetErr();
      this.model._validShippOptionsWeight('');

      expect(this.model.get('errShippOptionsWeight').length).not.toEqual(0);      
    });          
  });          
});



