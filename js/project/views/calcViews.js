APP.CalcView = Backbone.View.extend({  

  initialize: function() {   
    this.model = new APP.CalcModel();
    
    this.departCityWidget =   new APP.DepartCityView({model: this.model});   
    this.destinCityWidget =   new APP.DestinCityView({model: this.model});
    this.shippOptionsWidget = new APP.ShippOptionsView({model: this.model});    
       
    this.render();
  },    

  template: _.template($('#calcTpl').html()),

  render: function () {    
    this.$el.html(this.template());    
    this.$el.find('#departCityWidgetCont').html(this.departCityWidget.render().el);
    this.$el.find('#destinCityWidgetCont').html(this.destinCityWidget.render().el);
    this.$el.find('#shippOptionsWidgetCont').html(this.shippOptionsWidget.render().el);

    return this;
  },

  events:{
    'click #calcSubmitBtn' : 'submit'
  },

  submit: function() { 
    this._setModel();

    if(this.model.isValid()) { 
      if(!this.paymentModal) { 
        this.paymentModal = new APP.PaymentModalView();         
      };

      this.$el.append(this.paymentModal.render({price: this._computePrice()}).el);

      $('#paymentModal').modal('show') 
    };    

    this._errMsgManage();
  },

  _computePrice: function() { 
    var weight = this.model.get('shippOptionsWeight'),
        volume = this.model.get('shippOptionsVolume'),
        length = this.model.get('sizeLength'),
        width = this.model.get('sizeWidth'),
        height = this.model.get('sizeHeight'),
        sizeVisibility = this.model.get('sizeVisibility'),
        price = (weight + volume) / 20;

    if(length && width && height && sizeVisibility) { price += (length * width) / height };

    return parseInt(price, 10);
  },

  _setModel: function() { 
    var departCity =          this.$el.find('#fldDepartCity').val(), 
        destinCity =          this.$el.find('#fldDestinCity').val(), 
        shippOptionsWeight =  this.$el.find('#fldShippOptionsWeight').val(),
        shippOptionsVolume =  this.$el.find('#fldShippOptionsVolume').val(),
        sizeLength =          this.$el.find('#fldSizeLength').val(),
        sizeWidth =           this.$el.find('#fldSizeWidth').val(),
        sizeHeight =          this.$el.find('#fldSizeHeight').val(),
        validationObj;

    if(this.model.get('sizeVisibility')) {
      validationObj ={
        'departCity': departCity,
        'destinCity': destinCity,
        'shippOptionsWeight': shippOptionsWeight,
        'shippOptionsVolume': shippOptionsVolume,
        'sizeLength': sizeLength,
        'sizeWidth': sizeWidth,
        'sizeHeight': sizeHeight   
      };
    } else {
      validationObj ={
        'departCity': departCity,
        'destinCity': destinCity,
        'shippOptionsWeight': shippOptionsWeight,
        'shippOptionsVolume': shippOptionsVolume      
      };      
    };

    this.model.set(validationObj);       
  },

  _errMsgManage: function() { 
    var validErrArr = this.model.validationError;

    this.$el.find('.help-block').empty();    

    for(prop in validErrArr) { 
      var msgCont = this.$el.find('#errMsg_' + prop);      
      for(key in validErrArr[prop]) { msgCont.append(validErrArr[prop][key] + '<br>') };
    };
  } 

});


APP.PaymentModalView = Backbone.View.extend({     

  tagName: 'div',

  template: _.template($('#paymentModalTpl').html()),

  render: function (data) {  
    this.$el.html(this.template(data));
    return this;
  }

});