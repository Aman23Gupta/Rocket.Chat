function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/priorities/PrioritiesPage.js                                                                  //
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
let Button, Icon, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
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
module.link("../../../../client/components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 3);
let GenericTable;
module.link("../../../../client/components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 4);
let Page;
module.link("../../../../client/components/Page", {
  default(v) {
    Page = v;
  }

}, 5);
let useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 6);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);

function PrioritiesPage(_ref) {
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
  const prioritiesRoute = useRoute('omnichannel-priorities');
  const handleClick = useMutableCallback(() => prioritiesRoute.push({
    context: 'new'
  }));
  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: title
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleClick,
    title: t('New_Priority')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t('New')))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: data && data.priorities,
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
}

module.exportDefault(PrioritiesPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/priorities/5ae1baab90a92aea5f1e195505bab2d0b2e791d9.map
