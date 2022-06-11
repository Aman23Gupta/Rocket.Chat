function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/ContactContextualBar.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 1);
var useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var ContactEditWithData;
module.link("./contacts/contextualBar/ContactEditWithData", {
  "default": function (v) {
    ContactEditWithData = v;
  }
}, 4);
var ContactInfo;
module.link("./contacts/contextualBar/ContactInfo", {
  "default": function (v) {
    ContactInfo = v;
  }
}, 5);
var ContactNewEdit;
module.link("./contacts/contextualBar/ContactNewEdit", {
  "default": function (v) {
    ContactNewEdit = v;
  }
}, 6);

var ContactContextualBar = function (_ref) {
  var contactReload = _ref.contactReload;
  var directoryRoute = useRoute('omnichannel-directory');
  var bar = useRouteParameter('bar');
  var id = useRouteParameter('id');
  var t = useTranslation();

  var handleContactsVerticalBarCloseButtonClick = function () {
    directoryRoute.push({
      page: 'contacts'
    });
  };

  var handleContactsVerticalBarBackButtonClick = function () {
    directoryRoute.push({
      page: 'contacts',
      id: id,
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/a3ecd66ef5e22b9ccd1693898219555af8e0aff7.map
