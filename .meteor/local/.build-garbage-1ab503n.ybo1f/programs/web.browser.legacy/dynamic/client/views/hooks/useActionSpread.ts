function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/hooks/useActionSpread.ts                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  useActionSpread: function () {
    return useActionSpread;
  }
});
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);

var mapOptions = function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      _ref2$ = _ref2[1],
      action = _ref2$.action,
      label = _ref2$.label,
      icon = _ref2$.icon;

  return [key, {
    label: {
      label: label,
      icon: icon
    },
    action: action
  }];
};

var useActionSpread = function (actions) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return useMemo(function () {
    var entries = Object.entries(actions);
    var options = entries.slice(0, size);
    var menuOptions = entries.slice(size, entries.length).map(mapOptions);
    var menu = menuOptions.length ? Object.fromEntries(menuOptions) : undefined;
    return {
      actions: options,
      menu: menu
    };
  }, [actions, size]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/hooks/e55100f92589a1efb1f2f374418027fed0453b65.map
