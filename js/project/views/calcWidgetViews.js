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
  initialize: function() {
    this.listenTo(this.model, 'change:sizeVisibility', this.render);
  },

  id: 'shippOptionsWidget',

  template: _.template($('#shippOptionsTpl').html()),

  render: function () {  
    var size_visibility = this.model.get('sizeVisibility') ? 'show' : 'hide';

    this.$el.html(this.template({
      size_visibility: size_visibility
    }));
    return this;
  },

  events: {
    'click #sizeVisibleToggler' : 'toggleSizeVisible'
  },

  toggleSizeVisible: function() { 
    var sizeVisibility = this.model.get('sizeVisibility');
    this.model.set({sizeVisibility: !sizeVisibility});
  }

});


