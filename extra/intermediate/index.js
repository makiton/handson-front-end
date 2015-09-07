(function() {
  var FetchBtnView, IntermediateModel, TableView;

  IntermediateModel = microModule["import"]('IntermediateModel');

  TableView = microModule["import"]('TableView');

  FetchBtnView = microModule["import"]('FetchBtnView');

  (function() {
    var $fetchBtn, $fetchBtns, $table, $tables, i, j, len, len1, model, results;
    $tables = document.querySelectorAll('.js-table');
    $fetchBtns = document.querySelectorAll('.js-btn-fetch');
    model = new IntermediateModel();
    for (i = 0, len = $tables.length; i < len; i++) {
      $table = $tables[i];
      new TableView(model, $table);
    }
    results = [];
    for (j = 0, len1 = $fetchBtns.length; j < len1; j++) {
      $fetchBtn = $fetchBtns[j];
      results.push(new FetchBtnView(model, $fetchBtn));
    }
    return results;
  })();

}).call(this);
