(function() {
  var MicroView;

  MicroView = (function() {
    function MicroView() {
      this.init();
      this.setEventListeners();
    }

    MicroView.prototype.init = function() {};

    MicroView.prototype.setEventListeners = function() {};

    MicroView.prototype.on = function($el, eventType, callback) {
      var _$el, i, len, results;
      if (this._isDOMCollection($el)) {
        results = [];
        for (i = 0, len = $el.length; i < len; i++) {
          _$el = $el[i];
          results.push(_$el.addEventListener(eventType, callback));
        }
        return results;
      } else if (this._isDOM($el)) {
        return $el.addEventListener(eventType, callback);
      } else if (this._isSelector($el)) {
        _$el = this.$el.querySelectorAll($el);
        return this.on(_$el, eventType, callback);
      }
    };

    MicroView.prototype.addClass = function($el, className) {
      var _$el, i, len, results;
      if (this._isDOMCollection($el)) {
        results = [];
        for (i = 0, len = $el.length; i < len; i++) {
          _$el = $el[i];
          results.push(_$el.classList.add(className));
        }
        return results;
      } else if (this._isDOM($el)) {
        return $el.classList.add(className);
      } else if (this._isSelector($el)) {
        _$el = this.$el.querySelectorAll($el);
        return this.addClass(_$el, className);
      }
    };

    MicroView.prototype.removeClass = function($el, className) {
      var _$el, i, len, results;
      if (this._isDOMCollection($el)) {
        results = [];
        for (i = 0, len = $el.length; i < len; i++) {
          _$el = $el[i];
          results.push(_$el.classList.remove(className));
        }
        return results;
      } else if (this._isDOM($el)) {
        return $el.classList.remove(className);
      } else if (this._isSelector($el)) {
        _$el = this.$el.querySelectorAll($el);
        return this.addClass(_$el, className);
      }
    };

    MicroView.prototype._isDOMCollection = function($el) {
      if (typeof $el === 'object' && $el.length) {
        return true;
      }
      return false;
    };

    MicroView.prototype._isDOM = function($el) {
      if (typeof $el === 'object' && !$el.length) {
        return true;
      }
      return false;
    };

    MicroView.prototype._isSelector = function($el) {
      if (typeof $el === 'string') {
        return true;
      }
      return false;
    };

    return MicroView;

  })();

  microModule["export"](MicroView);

}).call(this);
