function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/RoomList/RoomList.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var useResizeObserver;
module.link("@rocket.chat/fuselage-hooks", {
  useResizeObserver: function (v) {
    useResizeObserver = v;
  }
}, 1);
var React, useRef, useEffect, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var Virtuoso;
module.link("react-virtuoso", {
  Virtuoso: function (v) {
    Virtuoso = v;
  }
}, 3);
var useSession;
module.link("../../contexts/SessionContext", {
  useSession: function (v) {
    useSession = v;
  }
}, 4);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useUserPreference, useUserId;
module.link("../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  },
  useUserId: function (v) {
    useUserId = v;
  }
}, 6);
var useAvatarTemplate;
module.link("../hooks/useAvatarTemplate", {
  useAvatarTemplate: function (v) {
    useAvatarTemplate = v;
  }
}, 7);
var usePreventDefault;
module.link("../hooks/usePreventDefault", {
  usePreventDefault: function (v) {
    usePreventDefault = v;
  }
}, 8);
var useRoomList;
module.link("../hooks/useRoomList", {
  useRoomList: function (v) {
    useRoomList = v;
  }
}, 9);
var useShortcutOpenMenu;
module.link("../hooks/useShortcutOpenMenu", {
  useShortcutOpenMenu: function (v) {
    useShortcutOpenMenu = v;
  }
}, 10);
var useSidebarPaletteColor;
module.link("../hooks/useSidebarPaletteColor", {
  useSidebarPaletteColor: function (v) {
    useSidebarPaletteColor = v;
  }
}, 11);
var useTemplateByViewMode;
module.link("../hooks/useTemplateByViewMode", {
  useTemplateByViewMode: function (v) {
    useTemplateByViewMode = v;
  }
}, 12);
var Row;
module.link("./Row", {
  "default": function (v) {
    Row = v;
  }
}, 13);
var ScrollerWithCustomProps;
module.link("./ScrollerWithCustomProps", {
  "default": function (v) {
    ScrollerWithCustomProps = v;
  }
}, 14);

var RoomList = function () {
  useSidebarPaletteColor();
  var listRef = useRef();

  var _useResizeObserver = useResizeObserver({
    debounceDelay: 100
  }),
      ref = _useResizeObserver.ref;

  var openedRoom = useSession('openedRoom');
  var sidebarViewMode = useUserPreference('sidebarViewMode');
  var sideBarItemTemplate = useTemplateByViewMode();
  var avatarTemplate = useAvatarTemplate();
  var extended = sidebarViewMode === 'extended';
  var isAnonymous = !useUserId();
  var t = useTranslation();
  var roomsList = useRoomList();
  var itemData = useMemo(function () {
    return {
      extended: extended,
      t: t,
      SideBarItemTemplate: sideBarItemTemplate,
      AvatarTemplate: avatarTemplate,
      openedRoom: openedRoom,
      sidebarViewMode: sidebarViewMode,
      isAnonymous: isAnonymous
    };
  }, [avatarTemplate, extended, isAnonymous, openedRoom, sideBarItemTemplate, sidebarViewMode, t]);
  usePreventDefault(ref);
  useShortcutOpenMenu(ref);
  useEffect(function () {
    var _listRef$current;

    (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.resetAfterIndex(0);
  }, [sidebarViewMode]);
  return /*#__PURE__*/React.createElement(Box, {
    h: "full",
    w: "full",
    ref: ref
  }, /*#__PURE__*/React.createElement(Virtuoso, {
    totalCount: roomsList.length,
    data: roomsList,
    components: {
      Scroller: ScrollerWithCustomProps
    },
    itemContent: function (index, data) {
      return /*#__PURE__*/React.createElement(Row, {
        data: itemData,
        item: data
      });
    }
  }));
};

module.exportDefault(RoomList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/RoomList/487ec89296b0a988836e0250e9787708ef154d78.map
