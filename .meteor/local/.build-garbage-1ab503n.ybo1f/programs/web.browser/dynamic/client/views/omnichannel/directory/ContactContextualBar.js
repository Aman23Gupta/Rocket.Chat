function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/ContactContextualBar.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 1);
let useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let ContactEditWithData;
module.link("./contacts/contextualBar/ContactEditWithData", {
  default(v) {
    ContactEditWithData = v;
  }

}, 4);
let ContactInfo;
module.link("./contacts/contextualBar/ContactInfo", {
  default(v) {
    ContactInfo = v;
  }

}, 5);
let ContactNewEdit;
module.link("./contacts/contextualBar/ContactNewEdit", {
  default(v) {
    ContactNewEdit = v;
  }

}, 6);

const ContactContextualBar = _ref => {
  let {
    contactReload
  } = _ref;
  const directoryRoute = useRoute('omnichannel-directory');
  const bar = useRouteParameter('bar');
  const id = useRouteParameter('id');
  const t = useTranslation();

  const handleContactsVerticalBarCloseButtonClick = () => {
    directoryRoute.push({
      page: 'contacts'
    });
  };

  const handleContactsVerticalBarBackButtonClick = () => {
    directoryRoute.push({
      page: 'contacts',
      id,
      bar: 'info'
    });
  };

  return /*#__PURE__*/React.createElement(VerticalBar, {
    className: 'contextual-bar'
  }, /*#__PURE__*/React.createElement(VerticalBar.Header, null, bar === 'new' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "user"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('New_Contact'))), bar === 'info' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "user"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Contact_Info'))), bar === 'edit' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "pencil"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Edit_Contact_Profile'))), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleContactsVerticalBarCloseButtonClick
  })), bar === 'new' && /*#__PURE__*/React.createElement(ContactNewEdit, {
    reload: contactReload,
    close: handleContactsVerticalBarCloseButtonClick
  }), bar === 'info' && /*#__PURE__*/React.createElement(ContactInfo, {
    reload: contactReload,
    id: id
  }), bar === 'edit' && /*#__PURE__*/React.createElement(ContactEditWithData, {
    id: id,
    reload: contactReload,
    close: handleContactsVerticalBarBackButtonClick
  }));
};

module.exportDefault(ContactContextualBar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/6a8b0d1b3a2349921158e8803fe56cd4da736f2b.map
