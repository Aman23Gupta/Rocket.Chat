function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Room/RoomNotFound/RoomNotFound.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var States, StatesIcon, StatesTitle, StatesSubtitle, Box;
module.link("@rocket.chat/fuselage", {
  States: function (v) {
    States = v;
  },
  StatesIcon: function (v) {
    StatesIcon = v;
  },
  StatesTitle: function (v) {
    StatesTitle = v;
  },
  StatesSubtitle: function (v) {
    StatesSubtitle = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var BurgerMenu;
module.link("../../../../components/BurgerMenu", {
  "default": function (v) {
    BurgerMenu = v;
  }
}, 2);
var TemplateHeader;
module.link("../../../../components/Header", {
  "default": function (v) {
    TemplateHeader = v;
  }
}, 3);
var useLayout;
module.link("../../../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 4);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var RoomTemplate;
module.link("../../components/RoomTemplate/RoomTemplate", {
  RoomTemplate: function (v) {
    RoomTemplate = v;
  }
}, 6);

var RoomNotFound = function () {
  var _useLayout = useLayout(),
      isMobile = _useLayout.isMobile;

  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/room/Room/RoomNotFound/f3354b85b9191373c1a43737f9dadbd20b2b27df.map
