function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/customFields/CustomFieldsPage.js                                                           //
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
let Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let FilterByText;
module.link("../../../components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 3);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 4);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 5);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);

const CustomFieldsPage = _ref => {
  let {
    data,
    header,
    setParams,
    params,
    title,
    renderRow,
    children
  } = _ref;
  const t = useTranslation();
  const router = useRoute('omnichannel-customfields');
  const onAddNew = useMutableCallback(() => router.push({
    context: 'new'
  }));
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
    renderFilter: _ref2 => {
      let {
        onChange
      } = _ref2,
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/customFields/c98d5bf0bae9d6e831774ce8a50988f37e1570a7.map
