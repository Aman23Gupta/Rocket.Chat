function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/RoomList/RoomList.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let useResizeObserver;
module.link("@rocket.chat/fuselage-hooks", {
  useResizeObserver(v) {
    useResizeObserver = v;
  }

}, 1);
let React, useRef, useEffect, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let Virtuoso;
module.link("react-virtuoso", {
  Virtuoso(v) {
    Virtuoso = v;
  }

}, 3);
let useSession;
module.link("../../contexts/SessionContext", {
  useSession(v) {
    useSession = v;
  }

}, 4);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useUserPreference, useUserId;
module.link("../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  },

  useUserId(v) {
    useUserId = v;
  }

}, 6);
let useAvatarTemplate;
module.link("../hooks/useAvatarTemplate", {
  useAvatarTemplate(v) {
    useAvatarTemplate = v;
  }

}, 7);
let usePreventDefault;
module.link("../hooks/usePreventDefault", {
  usePreventDefault(v) {
    usePreventDefault = v;
  }

}, 8);
let useRoomList;
module.link("../hooks/useRoomList", {
  useRoomList(v) {
    useRoomList = v;
  }

}, 9);
let useShortcutOpenMenu;
module.link("../hooks/useShortcutOpenMenu", {
  useShortcutOpenMenu(v) {
    useShortcutOpenMenu = v;
  }

}, 10);
let useSidebarPaletteColor;
module.link("../hooks/useSidebarPaletteColor", {
  useSidebarPaletteColor(v) {
    useSidebarPaletteColor = v;
  }

}, 11);
let useTemplateByViewMode;
module.link("../hooks/useTemplateByViewMode", {
  useTemplateByViewMode(v) {
    useTemplateByViewMode = v;
  }

}, 12);
let Row;
module.link("./Row", {
  default(v) {
    Row = v;
  }

}, 13);
let ScrollerWithCustomProps;
module.link("./ScrollerWithCustomProps", {
  default(v) {
    ScrollerWithCustomProps = v;
  }

}, 14);

const RoomList = () => {
  useSidebarPaletteColor();
  const listRef = useRef();
  const {
    ref
  } = useResizeObserver({
    debounceDelay: 100
  });
  const openedRoom = useSession('openedRoom');
  const sidebarViewMode = useUserPreference('sidebarViewMode');
  const sideBarItemTemplate = useTemplateByViewMode();
  const avatarTemplate = useAvatarTemplate();
  const extended = sidebarViewMode === 'extended';
  const isAnonymous = !useUserId();
  const t = useTranslation();
  const roomsList = useRoomList();
  const itemData = useMemo(() => ({
    extended,
    t,
    SideBarItemTemplate: sideBarItemTemplate,
    AvatarTemplate: avatarTemplate,
    openedRoom,
    sidebarViewMode,
    isAnonymous
  }), [avatarTemplate, extended, isAnonymous, openedRoom, sideBarItemTemplate, sidebarViewMode, t]);
  usePreventDefault(ref);
  useShortcutOpenMenu(ref);
  useEffect(() => {
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
    itemContent: (index, data) => /*#__PURE__*/React.createElement(Row, {
      data: itemData,
      item: data
    })
  }));
};

module.exportDefault(RoomList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/RoomList/a1a008d8825652dab73cf5e2f3c505f5a65bdc30.map
