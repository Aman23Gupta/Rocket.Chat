function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/Header.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, memo, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var BurgerMenu;
module.link("../../../components/BurgerMenu", {
  "default": function (v) {
    BurgerMenu = v;
  }
}, 1);
var TemplateHeader;
module.link("../../../components/Header", {
  "default": function (v) {
    TemplateHeader = v;
  }
}, 2);
var useLayout;
module.link("../../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 3);
var DirectRoomHeader;
module.link("./DirectRoomHeader", {
  "default": function (v) {
    DirectRoomHeader = v;
  }
}, 4);
var OmnichannelRoomHeader;
module.link("./Omnichannel/OmnichannelRoomHeader", {
  "default": function (v) {
    OmnichannelRoomHeader = v;
  }
}, 5);
var RoomHeader;
module.link("./RoomHeader", {
  "default": function (v) {
    RoomHeader = v;
  }
}, 6);

var Header = function (_ref) {
  var room = _ref.room;

  var _useLayout = useLayout(),
      isMobile = _useLayout.isMobile,
      isEmbedded = _useLayout.isEmbedded,
      showTopNavbarEmbeddedLayout = _useLayout.showTopNavbarEmbeddedLayout;

  var slots = useMemo(function () {
    return {
      start: isMobile && /*#__PURE__*/React.createElement(TemplateHeader.ToolBox, null, /*#__PURE__*/React.createElement(BurgerMenu, null))
    };
  }, [isMobile]);

  if (isEmbedded && !showTopNavbarEmbeddedLayout) {
    return null;
  }

  if (room.t === 'd' && room.uids.length < 3) {
    return /*#__PURE__*/React.createElement(DirectRoomHeader, {
      slots: slots,
      room: room
    });
  }

  if (room.t === 'l') {
    return /*#__PURE__*/React.createElement(OmnichannelRoomHeader, {
      slots: slots
    });
  }

  return /*#__PURE__*/React.createElement(RoomHeader, {
    slots: slots,
    room: room,
    topic: room.topic
  });
};

module.exportDefault( /*#__PURE__*/memo(Header));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/4439dd084266300f416eaa70be5b3d1d60333f9e.map
