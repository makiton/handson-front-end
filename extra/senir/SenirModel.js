(function() {
  var MicroModel, SenirModel,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MicroModel = microModule["import"]('MicroModel');

  SenirModel = (function(superClass) {
    extend(SenirModel, superClass);

    function SenirModel() {
      return SenirModel.__super__.constructor.apply(this, arguments);
    }

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

    SenirModel.prototype.addData = function(item) {
      this.data.push(item);
      return this.set('data', this.data);
    };

    return SenirModel;

  })(MicroModel);

  microModule["export"](SenirModel);

}).call(this);
