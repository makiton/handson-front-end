(function() {
  (function() {
    var $addItemBtn, $addItemBtns, $addItemModal, $addItemModals, $table, $tables, i, j, k, len, len1, len2, model, results;
    $tables = document.querySelectorAll('.js-table');
    $addItemBtns = document.querySelectorAll('.js-btn-add-item');
    $addItemModals = document.querySelectorAll('.js-modal-add-item');
    model = new SenirModel();
    for (i = 0, len = $tables.length; i < len; i++) {
      $table = $tables[i];
      new TableView(model, $table);
    }
    for (j = 0, len1 = $addItemBtns.length; j < len1; j++) {
      $addItemBtn = $addItemBtns[j];
      new AddItemBtnView(model, $addItemBtn);
    }
    results = [];
    for (k = 0, len2 = $addItemModals.length; k < len2; k++) {
      $addItemModal = $addItemModals[k];
      results.push(new AddItemModalView(model, $addItemModal));
    }
    return results;
  })();

}).call(this);
