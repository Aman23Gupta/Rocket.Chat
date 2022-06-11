function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/contacts/contextualBar/ContactsContextualBar.tsx                                 //
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
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 1);
let useRoute, useRouteParameter;
module.link("../../../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useOmnichannelRoom;
module.link("../../../../room/contexts/RoomContext", {
  useOmnichannelRoom(v) {
    useOmnichannelRoom = v;
  }

}, 4);
let useTabBarClose;
module.link("../../../../room/providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 5);
let ContactEditWithData;
module.link("./ContactEditWithData", {
  default(v) {
    ContactEditWithData = v;
  }

}, 6);
let ContactInfo;
module.link("./ContactInfo", {
  default(v) {
    ContactInfo = v;
  }

}, 7);
const PATH = 'live';

const ContactsContextualBar = _ref => {
  let {
    rid
  } = _ref;
  const t = useTranslation();
  const closeContextualBar = useTabBarClose();
  const directoryRoute = useRoute(PATH);
  const context = useRouteParameter('context');

  const handleContactEditBarCloseButtonClick = () => {
    directoryRoute.push({
      id: rid,
      tab: 'contact-profile'
    });
  };

  const room = useOmnichannelRoom();
  const {
    v: {
      _id
    }
  } = room;
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/contacts/contextualBar/19bd6b833ab242a248afde45442d39186ab1d469.map
