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
    this.sizeWidget = new APP.sizeView({model: this.model});
  },

  id: 'shippOptionsWidget',

  template: _.template($('#shippOptionsTpl').html()),

  render: function () {  
    var size_visibility = this.model.get('sizeVisibility') ? 'show' : 'hide',
        sizeElem = this.sizeWidget.render().el;

    this.$el.html(this.template());

    this.$el.find('.widget_content').append(sizeElem);
    
    return this;
  }

});

APP.sizeView = Backbone.View.extend({    
  initialize: function() {
    this.listenTo(this.model, 'change:sizeVisibility', this.render);
  },

  id: 'sizeWidget',

  template: _.template($('#sizeTpl').html()),

  render: function () {  
    var size_visibility = this.model.get('sizeVisibility') ? 'show' : 'hide';

    this.$el.html(this.template({
      size_visibility: size_visibility,
      lengthInitVal: this.model.get('sizeLength'),
      widthInitVal: this.model.get('sizeWidth'),
      heightInitVal: this.model.get('sizeHeight')
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


