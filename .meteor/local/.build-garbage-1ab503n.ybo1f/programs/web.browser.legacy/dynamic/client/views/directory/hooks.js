function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/hooks.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  useQuery: function () {
    return useQuery;
  }
});
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);

function useQuery(_ref, _ref2, type) {
  var text = _ref.text,
      itemsPerPage = _ref.itemsPerPage,
      current = _ref.current;

  var _ref3 = _slicedToArray(_ref2, 2),
      column = _ref3[0],
      direction = _ref3[1];

  var workspace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'local';
  return useMemo(function () {
    var _JSON$stringify;

    return _objectSpread(_objectSpread({
      query: JSON.stringify({
        type: type,
        text: text,
        workspace: workspace
      }),
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = direction === 'asc' ? 1 : 0, _JSON$stringify))
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });
  }, [itemsPerPage, current, column, direction, type, workspace, text]);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/directory/76e94c2c21fe18fdfef0bcac86ec82f4648537e5.map
