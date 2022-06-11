function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/currentChats/CurrentChatsPage.tsx                                                          //
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
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
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
let FilterByText;
module.link("./FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 3);

const CurrentChatsPage = _ref => {
  let {
    data,
    header,
    setParams,
    params,
    title,
    renderRow,
    reload
  } = _ref;
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
    renderFilter: _ref2 => {
      let {
        onChange
      } = _ref2,
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/currentChats/532238a34613a43a49f841b01c5e12868faff3c3.map
