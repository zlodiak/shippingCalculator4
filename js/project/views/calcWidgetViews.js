APP.DepartCityView = Backbone.View.extend({   

  id: 'departCityWidget',

  template: _.template($('#departCityTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  } 

});


APP.DestinCityView = Backbone.View.extend({   

  id: 'destinCityWidget',

  template: _.template($('#destinCityTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  } 

});


APP.ShippOptionsView = Backbone.View.extend({    

  id: 'shippOptionsWidget',

  template: _.template($('#shippOptionsTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  }

});


