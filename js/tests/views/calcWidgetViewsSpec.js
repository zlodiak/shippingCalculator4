describe("DepartCityView:", function() {
  beforeEach(function () {
    this.view = new APP.DepartCityView();
  });  
  
  it ('should init successful', function () {
    expect(this.view).toBeDefined();
  }); 

  it ("produces the correct HTML", function() {
    this.view.render();

    var id = this.view.$el.attr('id');
    expect(id).toEqual('departCityWidget');
  }); 
});
