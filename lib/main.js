'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//classes are object making machines, create parent class
var Desserts = function Desserts(type, calories) {
  _classCallCheck(this, Desserts);

  this.name = type;
  this.calories = calories;
};

// create child class ClassName


var IceCream = function (_Desserts) {
  _inherits(IceCream, _Desserts);

  function IceCream(type, calories, flavor, scoops) {
    _classCallCheck(this, IceCream);

    var _this = _possibleConstructorReturn(this, (IceCream.__proto__ || Object.getPrototypeOf(IceCream)).call(this, type, calories));

    _this.flavor = flavor;
    _this.scoops = scoops;
    //this.includeSpoon(console.log('Here is your spoon!')) = includeSpoon;
    return _this;
  }

  _createClass(IceCream, [{
    key: 'includeSpoon',
    value: function includeSpoon() {
      console.log('Here is your spoon!');
    }
  }]);

  return IceCream;
}(Desserts);

//give above properities a value by creating a variable (not creating another class)


var vanillaIceCream = new IceCream('ice cream', '340', 'vanilla', '3');
console.log(vanillaIceCream);

//call includeSpoon on vanilla ic cream
vanillaIceCream.includeSpoon();