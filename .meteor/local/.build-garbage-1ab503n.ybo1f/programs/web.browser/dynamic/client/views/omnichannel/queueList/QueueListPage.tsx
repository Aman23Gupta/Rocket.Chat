function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/queueList/QueueListPage.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
module.export({
  QueueListPage: () => QueueListPage
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 1);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let QueueListFilter;
module.link("./QueueListFilter", {
  QueueListFilter(v) {
    QueueListFilter = v;
  }

}, 3);

const QueueListPage = _ref => {
  let {
    title,
    header,
    data,
    renderRow,
    params,
    setParams
  } = _ref;
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: title
  }), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderFilter: _ref2 => {
      let {
        onChange
      } = _ref2,
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/queueList/65066f672940757ea7ae141a86aeb1bc343dcd24.map
