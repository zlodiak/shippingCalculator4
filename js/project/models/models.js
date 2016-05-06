window.APP = window.APP || {};

APP.CalcModel = Backbone.Model.extend({
  defaults: {
    departCity: undefined,
    destinCity: undefined,
    shippOptionsWeight: undefined,
    shippOptionsVolume: undefined,
    sizeLength: undefined,
    sizeWidth: undefined,
    sizeHeight: undefined,
    sizeVisibility: false,    
    errDepartCity: [],
    errDestinCity: [],
    errShippOptionsWeight: [],
    errShippOptionsVolume: [],
    errSizeLength: [],
    errSizeWidth: [],
    errSizeHeight: []
  }, 

  validate: function(attrs) {     
    this._resetErr();

    this._validDepartCity(attrs.departCity);
    this._validDestinCity(attrs.destinCity, attrs.departCity);
    this._validShippOptionsWeight(attrs.shippOptionsWeight);
    this._validShippOptionsVolume(attrs.shippOptionsVolume);

    if(this.get('sizeVisibility')) { 
      this._validSizeLength(attrs.sizeLength);
    };
    
/*    this._validSizeWidth(attrs.sizeWidth);
    this._validSizeHeight(attrs.sizeHeight);*/

    if(
      this.get('errDepartCity').length != 0 ||
      this.get('errDestinCity').length != 0 ||
      this.get('errShippOptionsWeight').length != 0 ||
      this.get('errShippOptionsVolume').length != 0 ||
      this.get('errSizeLength').length != 0 
    ) { 
      return {
        'departCity': this.get('errDepartCity'),
        'destinCity': this.get('errDestinCity'),
        'shippOptionsWeight': this.get('errShippOptionsWeight'),
        'shippOptionsVolume': this.get('errShippOptionsVolume'),
        'sizeLength': this.get('errSizeLength')
      };
    };
  },

  _resetErr: function() {
    this.set({'errDepartCity': []});
    this.set({'errDestinCity': []});
    this.set({'errShippOptionsWeight': []});
    this.set({'errShippOptionsVolume': []});    
    this.set({'errSizeLength': []});    
    this.set({'errSizeWidth': []});    
    this.set({'errSizeHeight': []});    
  },

  _validDepartCity: function(city) { 
    var emptyCheck = APP.valuesValidator.emptyCheck(city), 
        isNumCheck = APP.valuesValidator.isNumCheck(city),
        lowLengthCheck = APP.valuesValidator.lowLengthCheck(city, 3);

    if(emptyCheck) { this.get('errDepartCity').push(emptyCheck) } else { 
      if(isNumCheck) { this.get('errDepartCity').push(isNumCheck) } else { 
        if(lowLengthCheck) { this.get('errDepartCity').push(lowLengthCheck) };
      };               
    };
  },

  _validDestinCity: function(destinCity, departCity) { 
    var emptyCheck = APP.valuesValidator.emptyCheck(destinCity), 
        isNumCheck = APP.valuesValidator.isNumCheck(destinCity),
        lowLengthCheck = APP.valuesValidator.lowLengthCheck(destinCity, 3),
        doubleStrCheck = APP.valuesValidator.doubleStrCheck(destinCity, departCity);

    if(emptyCheck) { this.get('errDestinCity').push(emptyCheck) } else { 
      if(isNumCheck) { this.get('errDestinCity').push(isNumCheck) } else { 
        if(lowLengthCheck) { this.get('errDestinCity').push(lowLengthCheck) };
        if(doubleStrCheck) { this.get('errDestinCity').push(doubleStrCheck) };
      };               
    };
  },  

  _validShippOptionsWeight: function(weight) {  
    var emptyCheck = APP.valuesValidator.emptyCheck(weight), 
        minusNumCheck = APP.valuesValidator.minusNumCheck(weight), 
        nullNumCheck = APP.valuesValidator.nullNumCheck(weight), 
        isStrCheck = APP.valuesValidator.isStrCheck(weight);

    if(emptyCheck) { this.get('errShippOptionsWeight').push(emptyCheck) } else {
      if(isStrCheck) { this.get('errShippOptionsWeight').push(isStrCheck) } else {
        if(minusNumCheck) { this.get('errShippOptionsWeight').push(minusNumCheck) };
        if(nullNumCheck) { this.get('errShippOptionsWeight').push(nullNumCheck) };        
      }; 
    };       
  }, 

  _validShippOptionsVolume: function(volume) {  
    var emptyCheck = APP.valuesValidator.emptyCheck(volume), 
        minusNumCheck = APP.valuesValidator.minusNumCheck(volume), 
        nullNumCheck = APP.valuesValidator.nullNumCheck(volume), 
        isStrCheck = APP.valuesValidator.isStrCheck(volume);       

    if(emptyCheck) { this.get('errShippOptionsVolume').push(emptyCheck) } else {
      if(isStrCheck) { this.get('errShippOptionsVolume').push(isStrCheck) } else {
        if(minusNumCheck) { this.get('errShippOptionsVolume').push(minusNumCheck) };
        if(nullNumCheck) { this.get('errShippOptionsVolume').push(nullNumCheck) };        
      };
    };   
  },

  _validSizeLength: function(length) {  
    var emptyCheck = APP.valuesValidator.emptyCheck(length), 
        minusNumCheck = APP.valuesValidator.minusNumCheck(length), 
        nullNumCheck = APP.valuesValidator.nullNumCheck(length), 
        isStrCheck = APP.valuesValidator.isStrCheck(length);

    if(emptyCheck) { this.get('errSizeLength').push(emptyCheck) } else {
      if(isStrCheck) { this.get('errSizeLength').push(isStrCheck) } else {
        if(minusNumCheck) { this.get('errSizeLength').push(minusNumCheck) };
        if(nullNumCheck) { this.get('errSizeLength').push(nullNumCheck) };        
      };
    };   
  }      

});

