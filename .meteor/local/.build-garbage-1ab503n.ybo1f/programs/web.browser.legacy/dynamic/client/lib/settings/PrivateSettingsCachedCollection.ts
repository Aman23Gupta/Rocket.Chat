function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/settings/PrivateSettingsCachedCollection.ts                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);

var _inheritsLoose;

module.link("@babel/runtime/helpers/inheritsLoose", {
  default: function (v) {
    _inheritsLoose = v;
  }
}, 3);
module.export({
  PrivateSettingsCachedCollection: function () {
    return PrivateSettingsCachedCollection;
  }
});
var Notifications;
module.link("../../../app/notifications/client", {
  Notifications: function (v) {
    Notifications = v;
  }
}, 0);
var CachedCollection;
module.link("../../../app/ui-cached-collection/client", {
  CachedCollection: function (v) {
    CachedCollection = v;
  }
}, 1);

var PrivateSettingsCachedCollection = /*#__PURE__*/function (_CachedCollection) {
  _inheritsLoose(PrivateSettingsCachedCollection, _CachedCollection);

  function PrivateSettingsCachedCollection() {
    return _CachedCollection.call(this, {
      name: 'private-settings',
      eventType: 'onLogged'
    }) || this;
  }

  var _proto = PrivateSettingsCachedCollection.prototype;

  _proto.setupListener = function () {
    function setupListener() {
      var _this = this;

      return _regeneratorRuntime.async(function () {
        function setupListener$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Notifications.onLogged(this.eventName, function () {
                  function _callee(t, _ref) {
                    var _id, record;

                    return _regeneratorRuntime.async(function () {
                      function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _id = _ref._id, record = _objectWithoutProperties(_ref, _excluded);

                              _this.log('record received', t, _objectSpread({
                                _id: _id
                              }, record));

                              _this.collection.upsert({
                                _id: _id
                              }, record);

                              _this.sync();

                            case 4:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }

                      return _callee$;
                    }(), null, null, null, Promise);
                  }

                  return _callee;
                }());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }

        return setupListener$;
      }(), null, this, null, Promise);
    }

    return setupListener;
  }();

  PrivateSettingsCachedCollection.get = function () {
    function get() {
      if (!PrivateSettingsCachedCollection.instance) {
        PrivateSettingsCachedCollection.instance = new PrivateSettingsCachedCollection();
      }

      return PrivateSettingsCachedCollection.instance;
    }

    return get;
  }();

  return PrivateSettingsCachedCollection;
}(CachedCollection);

PrivateSettingsCachedCollection.instance = void 0;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/settings/75b0c8fd52847778f19fe8a6cde23907187ee6ce.map
