(function() {
  this.FetchBtnView = (function() {
    function FetchBtnView(model, $el) {
      this.model = model;
      this.$el = $el;
      this.setEventListeners();
    }

    FetchBtnView.prototype.setEventListeners = function() {
      return this.$el.addEventListener('click', (function(_this) {
        return function() {
          return _this.model.fetch();
        };
      })(this));
    };

    return FetchBtnView;

  })();

}).call(this);
