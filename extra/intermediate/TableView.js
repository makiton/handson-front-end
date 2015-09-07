(function() {
  var MicroView, TableView,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MicroView = microModule["import"]('MicroView');

  TableView = (function(superClass) {
    var _data, _reverse;

    extend(TableView, superClass);

    _data = [];

    _reverse = false;

    function TableView(model, $el) {
      this.model = model;
      this.$el = $el;
      _data = this.model.get('data');
      this.$tbody = this.$el.querySelector('.js-tbody');
      this.$sortBtns = this.$el.querySelectorAll('.js-btn-sort');
      TableView.__super__.constructor.call(this);
    }

    TableView.prototype.init = function() {
      return this.render();
    };

    TableView.prototype.setEventListeners = function() {
      this.model.onChange('data', (function(_this) {
        return function() {
          _data = _this.model.get('data');
          return _this.render();
        };
      })(this));
      return this.on(this.$sortBtns, 'click', (function(_this) {
        return function(event) {
          var sortkey;
          sortkey = event.target.dataset.sortkey;
          _this._sortByKey(sortkey);
          return _this.render();
        };
      })(this));
    };

    TableView.prototype.addComma = function(num) {
      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    };

    TableView.prototype.template = function(data) {
      return "<tr><td>" + data.name + "</td><td>" + (this.addComma(data.amount)) + "</td></tr>";
    };

    TableView.prototype._sortByKey = function(key) {
      _reverse = !_reverse;
      return _data.sort(function(a, b) {
        var x, y;
        x = a[key];
        y = b[key];
        if (_reverse) {
          if (x > y) {
            return 1;
          }
          if (x < y) {
            return -1;
          }
          return 0;
        } else {
          if (x > y) {
            return -1;
          }
          if (x < y) {
            return 1;
          }
          return 0;
        }
      });
    };

    TableView.prototype.render = function() {
      var data, i, len, tableEl;
      tableEl = [];
      for (i = 0, len = _data.length; i < len; i++) {
        data = _data[i];
        tableEl.push(this.template(data));
      }
      return this.$tbody.innerHTML = tableEl.join('');
    };

    return TableView;

  })(MicroView);

  microModule["export"](TableView);

}).call(this);
