function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/contacts/contextualBar/ContactsContextualBar.tsx                                 //
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
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 1);
var useRoute, useRouteParameter;
module.link("../../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useOmnichannelRoom;
module.link("../../../../room/contexts/RoomContext", {
  useOmnichannelRoom: function (v) {
    useOmnichannelRoom = v;
  }
}, 4);
var useTabBarClose;
module.link("../../../../room/providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 5);
var ContactEditWithData;
module.link("./ContactEditWithData", {
  "default": function (v) {
    ContactEditWithData = v;
  }
}, 6);
var ContactInfo;
module.link("./ContactInfo", {
  "default": function (v) {
    ContactInfo = v;
  }
}, 7);
var PATH = 'live';

var ContactsContextualBar = function (_ref) {
  var rid = _ref.rid;
  var t = useTranslation();
  var closeContextualBar = useTabBarClose();
  var directoryRoute = useRoute(PATH);
  var context = useRouteParameter('context');

  var handleContactEditBarCloseButtonClick = function () {
    directoryRoute.push({
      id: rid,
      tab: 'contact-profile'
    });
  };

  var room = useOmnichannelRoom();
  var _id = room.v._id;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, (context === 'info' || !context) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "info-circled"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Contact_Info'))), context === 'edit' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "pencil"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Edit_Contact_Profile'))), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: closeContextualBar
  })), context === 'edit' ? /*#__PURE__*/React.createElement(ContactEditWithData, {
    id: _id,
    close: handleContactEditBarCloseButtonClick
  }) : /*#__PURE__*/React.createElement(ContactInfo, {
    id: _id,
    rid: rid,
    route: PATH
  }));
};

module.exportDefault(ContactsContextualBar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/contacts/contextualBar/f8b8fbc54e9abe6e113d923bc00eca351e20532e.map
