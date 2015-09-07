(function() {
  this.SenirModel = (function() {
    function SenirModel() {}

    SenirModel.prototype._events = {};

    SenirModel.prototype.isShowModal = false;

    SenirModel.prototype.data = [
      {
        name: 'AAA',
        amount: 2000
      }, {
        name: 'BBB',
        amount: 10
      }, {
        name: 'CCC',
        amount: 10000
      }
    ];

    SenirModel.prototype.get = function(key) {
      return this[key];
    };

    SenirModel.prototype.set = function(key, value, silent) {
      var callback, i, len, ref, results;
      this[key] = value;
      if (!this._events[key] || silent) {
        return;
      }
      ref = this._events[key];
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        callback = ref[i];
        results.push(callback());
      }
      return results;
    };

    SenirModel.prototype.onChange = function(key, callback) {
      this._events[key] = this._events[key] || [];
      return this._events[key].push(callback);
    };

    SenirModel.prototype.addData = function(item) {
      this.data.push(item);
      return this.set('data', this.data);
    };

    return SenirModel;

  })();

}).call(this);
