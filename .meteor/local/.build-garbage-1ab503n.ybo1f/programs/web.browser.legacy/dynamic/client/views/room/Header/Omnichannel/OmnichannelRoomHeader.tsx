function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/Omnichannel/OmnichannelRoomHeader.tsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var BurgerMenu;
module.link("../../../../components/BurgerMenu", {
  "default": function (v) {
    BurgerMenu = v;
  }
}, 1);
var TemplateHeader;
module.link("../../../../components/Header", {
  "default": function (v) {
    TemplateHeader = v;
  }
}, 2);
var useLayout;
module.link("../../../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 3);
var useCurrentRoute;
module.link("../../../../contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  }
}, 4);
var useOmnichannelRoom;
module.link("../../contexts/RoomContext", {
  useOmnichannelRoom: function (v) {
    useOmnichannelRoom = v;
  }
}, 5);
var ToolboxContext, useToolboxContext;
module.link("../../lib/Toolbox/ToolboxContext", {
  ToolboxContext: function (v) {
    ToolboxContext = v;
  },
  useToolboxContext: function (v) {
    useToolboxContext = v;
  }
}, 6);
var RoomHeader;
module.link("../RoomHeader", {
  "default": function (v) {
    RoomHeader = v;
  }
}, 7);
var BackButton;
module.link("./BackButton", {
  "default": function (v) {
    BackButton = v;
  }
}, 8);
var QuickActions;
module.link("./QuickActions", {
  "default": function (v) {
    QuickActions = v;
  }
}, 9);
var useQuickActions;
module.link("./QuickActions/hooks/useQuickActions", {
  useQuickActions: function (v) {
    useQuickActions = v;
  }
}, 10);

var OmnichannelRoomHeader = function (_ref) {
  var parentSlot = _ref.slots;

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 1),
      name = _useCurrentRoute2[0];

  var _useLayout = useLayout(),
      isMobile = _useLayout.isMobile;

  var room = useOmnichannelRoom();

  var _useQuickActions = useQuickActions(room),
      visibleActions = _useQuickActions.visibleActions,
      getAction = _useQuickActions.getAction;

  var context = useToolboxContext();
  var slots = useMemo(function () {
    return _objectSpread(_objectSpread({}, parentSlot), {}, {
      start: (!!isMobile || name === 'omnichannel-directory') && /*#__PURE__*/React.createElement(TemplateHeader.ToolBox, null, isMobile && /*#__PURE__*/React.createElement(BurgerMenu, null), name === 'omnichannel-directory' && /*#__PURE__*/React.createElement(BackButton, null))
    }, !isMobile && {
      insideContent: /*#__PURE__*/React.createElement(QuickActions, {
        room: room
      })
    });
  }, [isMobile, name, parentSlot, room]);
  return /*#__PURE__*/React.createElement(ToolboxContext.Provider, {
    value: useMemo(function () {
      return _objectSpread(_objectSpread({}, context), {}, {
        actions: new Map([].concat(_toConsumableArray(isMobile ? visibleActions.map(function (action) {
          return [action.id, _objectSpread(_objectSpread({}, action), {}, {
            action: function () {
              return getAction(action.id);
            },
            order: (action.order || 0) - 10
          })];
        }) : []), _toConsumableArray(Array.from(context.actions.entries()))))
      });
    }, [context, isMobile, visibleActions, getAction])
  }, /*#__PURE__*/React.createElement(RoomHeader, {
    slots: slots,
    room: room
  }));
};

module.exportDefault(OmnichannelRoomHeader);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/Omnichannel/16d23df4d1b234b0e328be98f0ae943553b568df.map
