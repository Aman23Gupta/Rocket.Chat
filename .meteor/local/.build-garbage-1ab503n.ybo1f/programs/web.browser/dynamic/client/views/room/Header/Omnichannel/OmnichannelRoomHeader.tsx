function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/Omnichannel/OmnichannelRoomHeader.tsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 0);
let BurgerMenu;
module.link("../../../../components/BurgerMenu", {
  default(v) {
    BurgerMenu = v;
  }

}, 1);
let TemplateHeader;
module.link("../../../../components/Header", {
  default(v) {
    TemplateHeader = v;
  }

}, 2);
let useLayout;
module.link("../../../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 3);
let useCurrentRoute;
module.link("../../../../contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  }

}, 4);
let useOmnichannelRoom;
module.link("../../contexts/RoomContext", {
  useOmnichannelRoom(v) {
    useOmnichannelRoom = v;
  }

}, 5);
let ToolboxContext, useToolboxContext;
module.link("../../lib/Toolbox/ToolboxContext", {
  ToolboxContext(v) {
    ToolboxContext = v;
  },

  useToolboxContext(v) {
    useToolboxContext = v;
  }

}, 6);
let RoomHeader;
module.link("../RoomHeader", {
  default(v) {
    RoomHeader = v;
  }

}, 7);
let BackButton;
module.link("./BackButton", {
  default(v) {
    BackButton = v;
  }

}, 8);
let QuickActions;
module.link("./QuickActions", {
  default(v) {
    QuickActions = v;
  }

}, 9);
let useQuickActions;
module.link("./QuickActions/hooks/useQuickActions", {
  useQuickActions(v) {
    useQuickActions = v;
  }

}, 10);

const OmnichannelRoomHeader = _ref => {
  let {
    slots: parentSlot
  } = _ref;
  const [name] = useCurrentRoute();
  const {
    isMobile
  } = useLayout();
  const room = useOmnichannelRoom();
  const {
    visibleActions,
    getAction
  } = useQuickActions(room);
  const context = useToolboxContext();
  const slots = useMemo(() => _objectSpread(_objectSpread({}, parentSlot), {}, {
    start: (!!isMobile || name === 'omnichannel-directory') && /*#__PURE__*/React.createElement(TemplateHeader.ToolBox, null, isMobile && /*#__PURE__*/React.createElement(BurgerMenu, null), name === 'omnichannel-directory' && /*#__PURE__*/React.createElement(BackButton, null))
  }, !isMobile && {
    insideContent: /*#__PURE__*/React.createElement(QuickActions, {
      room: room
    })
  }), [isMobile, name, parentSlot, room]);
  return /*#__PURE__*/React.createElement(ToolboxContext.Provider, {
    value: useMemo(() => _objectSpread(_objectSpread({}, context), {}, {
      actions: new Map([...(isMobile ? visibleActions.map(action => [action.id, _objectSpread(_objectSpread({}, action), {}, {
        action: () => getAction(action.id),
        order: (action.order || 0) - 10
      })]) : []), ...Array.from(context.actions.entries())])
    }), [context, isMobile, visibleActions, getAction])
  }, /*#__PURE__*/React.createElement(RoomHeader, {
    slots: slots,
    room: room
  }));
};

module.exportDefault(OmnichannelRoomHeader);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/Omnichannel/cba66ec3ccd011a1164d725e27bf4cf127d68dd5.map
