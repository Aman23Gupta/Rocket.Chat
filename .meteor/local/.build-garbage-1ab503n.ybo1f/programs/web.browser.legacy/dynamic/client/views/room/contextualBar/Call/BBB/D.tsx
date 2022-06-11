function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/BBB/D.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var popout;
module.link("../../../../../../app/ui-utils/client", {
  popout: function (v) {
    popout = v;
  }
}, 2);
var usePermission;
module.link("../../../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 3);
var useMethod;
module.link("../../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useSetting;
module.link("../../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 5);
var useRoom;
module.link("../../../contexts/RoomContext", {
  useRoom: function (v) {
    useRoom = v;
  }
}, 6);
var useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 7);
var CallBBB;
module.link("./CallBBB", {
  "default": function (v) {
    CallBBB = v;
  }
}, 8);

var D = function (_ref) {
  var _room$streamingOption2, _room$streamingOption3;

  var rid = _ref.rid;
  var handleClose = useTabBarClose();
  var openNewWindow = !!useSetting('bigbluebutton_Open_New_Window');
  var hasCallManagement = usePermission('call-management', rid);
  var room = useRoom();
  var join = useMethod('bbbJoin');
  var end = useMethod('bbbEnd');
  var endCall = useMutableCallback(function () {
    end({
      rid: rid
    });
  });
  var startCall = useMutableCallback(function () {
    function _callee() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(join({
                  rid: rid
                }));

              case 2:
                result = _context.sent;

                if (result) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                if (!openNewWindow) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", window.open(result.url));

              case 7:
                popout.open({
                  content: 'bbbLiveView',
                  data: {
                    source: result.url,
                    streamingOptions: result,
                    canOpenExternal: true,
                    showVideoControls: false
                  },
                  onCloseCallback: function () {
                    return false;
                  }
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }());
  useEffect(function () {
    var _room$streamingOption;

    if ((room === null || room === void 0 ? void 0 : (_room$streamingOption = room.streamingOptions) === null || _room$streamingOption === void 0 ? void 0 : _room$streamingOption.type) !== 'call' || openNewWindow || popout.context) {
      return;
    }

    startCall();
    return function () {
      popout.close();
    };
  }, [room === null || room === void 0 ? void 0 : (_room$streamingOption2 = room.streamingOptions) === null || _room$streamingOption2 === void 0 ? void 0 : _room$streamingOption2.type, startCall, openNewWindow]);
  var canManageCall = (room === null || room === void 0 ? void 0 : room.t) === 'd' || hasCallManagement;
  return /*#__PURE__*/React.createElement(CallBBB, {
    handleClose: handleClose,
    openNewWindow: openNewWindow,
    live: (room === null || room === void 0 ? void 0 : (_room$streamingOption3 = room.streamingOptions) === null || _room$streamingOption3 === void 0 ? void 0 : _room$streamingOption3.type) === 'call',
    endCall: endCall,
    startCall: startCall,
    canManageCall: canManageCall
  });
};

module.exportDefault(D);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/BBB/07c9892ccb0500653fd13f21ce0a54b1093dad04.map
