function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/customFields/CustomFieldsPage.js                                                           //
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
var Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var FilterByText;
module.link("../../../components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 3);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 4);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 5);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);

var CustomFieldsPage = function (_ref) {
  var data = _ref.data,
      header = _ref.header,
      setParams = _ref.setParams,
      params = _ref.params,
      title = _ref.title,
      renderRow = _ref.renderRow,
      children = _ref.children;
  var t = useTranslation();
  var router = useRoute('omnichannel-customfields');
  var onAddNew = useMutableCallback(function () {
    return router.push({
      context: 'new'
    });
  });
  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: title
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onAddNew
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: "x16"
  }), " ", t('New'))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: data && data.customFields,
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
};

module.exportDefault(CustomFieldsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/customFields/8897fa1b7f773a5ee832c4d87961d54c0e8c83fd.map
