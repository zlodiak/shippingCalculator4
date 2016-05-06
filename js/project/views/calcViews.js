APP.CalcView = Backbone.View.extend({  

  initialize: function() {   
    this.model = new APP.CalcModel();
    
    this.departCityWidget = new APP.DepartCityView();   
    this.destinCityWidget = new APP.DestinCityView();
    this.shippOptionsWidget = new APP.ShippOptionsView();
       
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
        volume = this.model.get('shippOptionsVolume');

    return parseInt((weight + volume) / 20, 10);
  },

  _setModel: function() { 
    var departCity =          this.$el.find('#fldDepartCity').val(), 
        destinCity =          this.$el.find('#fldDestinCity').val(), 
        shippOptionsWeight =  this.$el.find('#fldShippOptionsWeight').val(),
        shippOptionsVolume =  this.$el.find('#fldShippOptionsVolume').val();

    this.model.set({
      'departCity': departCity,
      'destinCity': destinCity,
      'shippOptionsWeight': shippOptionsWeight,
      'shippOptionsVolume': shippOptionsVolume
    });  
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