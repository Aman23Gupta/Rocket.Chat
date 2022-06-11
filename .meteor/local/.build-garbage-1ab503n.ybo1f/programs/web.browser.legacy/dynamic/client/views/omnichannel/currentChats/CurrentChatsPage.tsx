function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/currentChats/CurrentChatsPage.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 1);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var FilterByText;
module.link("./FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 3);

var CurrentChatsPage = function (_ref) {
  var data = _ref.data,
      header = _ref.header,
      setParams = _ref.setParams,
      params = _ref.params,
      title = _ref.title,
      renderRow = _ref.renderRow,
      reload = _ref.reload;
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: title
  }), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: data === null || data === void 0 ? void 0 : data.rooms,
    total: data === null || data === void 0 ? void 0 : data.total,
    params: params,
    setParams: setParams,
    reload: reload,
    renderFilter: function (_ref2) {
      var onChange = _ref2.onChange,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        setFilter: onChange
      }, props));
    }
  })));
};

module.exportDefault( /*#__PURE__*/memo(CurrentChatsPage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/currentChats/3e0d85833e84eef0f79796b603f768566185ccf4.map
