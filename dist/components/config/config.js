"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigCtrl = void 0;

var _config = _interopRequireDefault(require("./config.html!text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TardisConfigCtrl =
/*#__PURE__*/
function () {
  function TardisConfigCtrl($scope, $injector, $q) {
    _classCallCheck(this, TardisConfigCtrl);

    this.$q = $q;
    this.enabled = false;
    this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this));
  }

  _createClass(TardisConfigCtrl, [{
    key: "postUpdate",
    value: function postUpdate() {
      var _this = this;

      if (!this.appModel.enabled) {
        return this.$q.resolve();
      }

      return this.appEditCtrl.importDashboards().then(function () {
        _this.enabled = true;
        return {
          url: "dashboards/tardis-home",
          message: "TARDIS Monitoring App enabled!"
        };
      });
    }
  }]);

  return TardisConfigCtrl;
}();

exports.ConfigCtrl = TardisConfigCtrl;
TardisConfigCtrl.template = _config["default"];
//# sourceMappingURL=config.js.map
