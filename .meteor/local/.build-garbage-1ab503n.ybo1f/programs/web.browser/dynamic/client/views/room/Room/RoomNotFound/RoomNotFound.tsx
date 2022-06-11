function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Room/RoomNotFound/RoomNotFound.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let States, StatesIcon, StatesTitle, StatesSubtitle, Box;
module.link("@rocket.chat/fuselage", {
  States(v) {
    States = v;
  },

  StatesIcon(v) {
    StatesIcon = v;
  },

  StatesTitle(v) {
    StatesTitle = v;
  },

  StatesSubtitle(v) {
    StatesSubtitle = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let BurgerMenu;
module.link("../../../../components/BurgerMenu", {
  default(v) {
    BurgerMenu = v;
  }

}, 2);
let TemplateHeader;
module.link("../../../../components/Header", {
  default(v) {
    TemplateHeader = v;
  }

}, 3);
let useLayout;
module.link("../../../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 4);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let RoomTemplate;
module.link("../../components/RoomTemplate/RoomTemplate", {
  RoomTemplate(v) {
    RoomTemplate = v;
  }

}, 6);

const RoomNotFound = () => {
  const {
    isMobile
  } = useLayout();
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(RoomTemplate, null, /*#__PURE__*/React.createElement(RoomTemplate.Header, null, isMobile && /*#__PURE__*/React.createElement(TemplateHeader, {
    justifyContent: "start"
  }, /*#__PURE__*/React.createElement(TemplateHeader.ToolBox, null, /*#__PURE__*/React.createElement(BurgerMenu, null)))), /*#__PURE__*/React.createElement(RoomTemplate.Body, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "center",
    height: "full"
  }, /*#__PURE__*/React.createElement(States, null, /*#__PURE__*/React.createElement(StatesIcon, {
    name: "magnifier"
  }), /*#__PURE__*/React.createElement(StatesTitle, null, t('Room_not_found')), /*#__PURE__*/React.createElement(StatesSubtitle, null, t('Room_not_exist_or_not_permission'))))));
};

module.exportDefault(RoomNotFound);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Room/RoomNotFound/6f5067ea4040d56c4e314307e3f991ca82bd9d40.map
