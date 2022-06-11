function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/queueList/QueueListPage.tsx                                                                //
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
module.export({
  QueueListPage: function () {
    return QueueListPage;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
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
var QueueListFilter;
module.link("./QueueListFilter", {
  QueueListFilter: function (v) {
    QueueListFilter = v;
  }
}, 3);

var QueueListPage = function (_ref) {
  var title = _ref.title,
      header = _ref.header,
      data = _ref.data,
      renderRow = _ref.renderRow,
      params = _ref.params,
      setParams = _ref.setParams;
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: title
  }), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderFilter: function (_ref2) {
      var onChange = _ref2.onChange,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement(QueueListFilter, _extends({
        setFilter: onChange
      }, props));
    },
    renderRow: renderRow,
    results: data === null || data === void 0 ? void 0 : data.queue,
    total: data === null || data === void 0 ? void 0 : data.total,
    params: params,
    setParams: setParams
  })));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/queueList/dd36aaafc858d24b144867a24586ed5c8216ee85.map
