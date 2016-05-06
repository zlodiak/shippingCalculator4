<script type="text/template" id="calcTpl">
  <div class="container">
    <div class="row">
      <div class="col-xs-12"><h1>Калькулятор доставки</h1></div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6" id="departCityWidgetCont"></div>
      <div class="col-xs-12 col-sm-6" id="destinCityWidgetCont"></div>
    </div> 

    <div class="row">
      <div class="col-xs-12" id="shippOptionsWidgetCont"></div>
    </div>     

    <div class="row">
      <div class="col-xs-12">
        <div class="btn btn-default pull-right" id="calcSubmitBtn">Рассчитать</div>
      </div>
    </div>        
  </div>
</script>


<script type="text/template" id="departCityTpl">
  <div class="panel panel-default">
    <div class="panel-body row">
      <div class="col-xs-12">
        <h2>Город отправления</h2>
      </div>

      <div class="widget_content form-group col-xs-12">
        <input type="text" class="form-control" id="fldDepartCity">
        <div id="errMsg_departCity" class="help-block"></div>
      </div>
    </div>
  </div>
</script>


<script type="text/template" id="destinCityTpl">
  <div class="panel panel-default">
    <div class="panel-body row">
      <div class="col-xs-12">
        <h2>Город назначения</h2>
      </div>

      <div class="widget_content form-group col-xs-12">
        <input type="text" class="form-control" id="fldDestinCity">
        <div id="errMsg_destinCity" class="help-block"></div>
      </div>
    </div>
  </div>
</script>


<script type="text/template" id="shippOptionsTpl">
  <div class="panel panel-default">
    <div class="panel-body row">
      <div class="col-xs-12">
        <h2>Параметры груза</h2>
      </div>

      <div class="widget_content form-group col-xs-12">
        <div class="row">
          <div class="col-xs-6">
            <label>Вес</label>

            <div class="input-group">
              <input type="text" class="form-control" id="fldShippOptionsWeight">
              <span class="input-group-addon">кг</span>
            </div>

            <div id="errMsg_shippOptionsWeight" class="help-block"></div>
          </div>

          <div class="col-xs-6">
            <label>Объём</label>

            <div class="input-group">
            <input type="text" class="form-control" id="fldShippOptionsVolume"> 
              <span class="input-group-addon">м<sup>3</sup></span>
            </div>

            <div id="errMsg_shippOptionsVolume" class="help-block"></div>      
          </div>
        </div>
      </div>
    </div>
  </div>
</script>


<script type="text/template" id="overCargoTpl">
  <div class="panel panel-default">
    <div class="panel-body row">
      <h2 class="col-xs-12">
        <input 
          class="over_cargo_state_checkbox" 
          id="overCargoStateCheckbox" 
          type="checkbox" 
          <%= activeState %> 
        >
        <span>Негабаритный груз</span>
      </h2>

      <div class="widget_content form-group col-xs-12 <%= visibility %>">
        <div class="">
          <label>Вес</label>
          <input type="text" class="form-control" id="fldOverCargoWeight">
          <div id="errMsgOverCargoWeight" class="help-block"></div>
        </div>

        <div class="">
          <label>Объём</label>
          <input type="text" class="form-control" id="fldOverCargoVolume">  
          <div id="errMsgOverCargoVolume" class="help-block"></div>      
        </div>
      </div>
    </div>
  </div>
</script>


<script type="text/template" id="paymentModalTpl">
  <!-- Modal payment -->
  <div class="modal fade payment_modal" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="paymentLabel">
    <div class="modal-dialog" role="document">     
      <div class="modal-content">
        <form class="" id="paymentForm" method="get" action="#" onSubmit="return false;">
          <fieldset>         
            <div class="modal-header">
              <btn type="btn" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></btn>
              <h4 class="modal-title" id="paymentLabel">Стоимость пересылки</h4>
            </div>

            <div class="modal-body" id="paymentPriceCont">
              <span class="price"><%= price %></span>
              <span class="currency">руб</span>
            </div>

            <div class="modal-footer">
              <btn type="btn" class="btn btn-default" data-dismiss="modal">Понятно</btn>
            </div>
          </fieldset>
        </form>          
      </div>
    </div>
  </div>  
</script>