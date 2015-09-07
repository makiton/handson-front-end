(function() {
  this.AddItemBtnView = (function() {
    function AddItemBtnView(model, $el) {
      this.model = model;
      this.$el = $el;
      this.setEventListeners();
    }

    AddItemBtnView.prototype.setEventListeners = function() {
      return this.$el.addEventListener('click', (function(_this) {
        return function() {
          return _this.model.set('isShowModal', true);
        };
      })(this));
    };

    return AddItemBtnView;

  })();

}).call(this);
