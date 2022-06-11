function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/managers/ManagersPage.js                                                                   //
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
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var FilterByText;
module.link("../../../components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 1);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var AddManager;
module.link("./AddManager", {
  "default": function (v) {
    AddManager = v;
  }
}, 4);

function ManagersPage(_ref) {
  var data = _ref.data,
      reload = _ref.reload,
      header = _ref.header,
      setParams = _ref.setParams,
      params = _ref.params,
      title = _ref.title,
      renderRow = _ref.renderRow,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: title
  }), /*#__PURE__*/React.createElement(AddManager, {
    reload: reload,
    pi: "x24"
  }), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: data && data.users,
    total: data && data.total,
    setParams: setParams,
    params: params,
    renderFilter: function (_ref2) {
      var onChange = _ref2.onChange,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        onChange: onChange
      }, props));
    }
  }))), children);
}

module.exportDefault(ManagersPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/managers/d8693138d5401842cce41f29d02a13957f5dcc5d.map
