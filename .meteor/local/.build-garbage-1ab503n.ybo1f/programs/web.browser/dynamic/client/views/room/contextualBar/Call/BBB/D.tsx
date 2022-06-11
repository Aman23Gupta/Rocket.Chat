function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/BBB/D.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let popout;
module.link("../../../../../../app/ui-utils/client", {
  popout(v) {
    popout = v;
  }

}, 2);
let usePermission;
module.link("../../../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 3);
let useMethod;
module.link("../../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useSetting;
module.link("../../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 5);
let useRoom;
module.link("../../../contexts/RoomContext", {
  useRoom(v) {
    useRoom = v;
  }

}, 6);
let useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 7);
let CallBBB;
module.link("./CallBBB", {
  default(v) {
    CallBBB = v;
  }

}, 8);

const D = _ref => {
  var _room$streamingOption2, _room$streamingOption3;

  let {
    rid
  } = _ref;
  const handleClose = useTabBarClose();
  const openNewWindow = !!useSetting('bigbluebutton_Open_New_Window');
  const hasCallManagement = usePermission('call-management', rid);
  const room = useRoom();
  const join = useMethod('bbbJoin');
  const end = useMethod('bbbEnd');
  const endCall = useMutableCallback(() => {
    end({
      rid
    });
  });
  const startCall = useMutableCallback(async () => {
    const result = await join({
      rid
    });

    if (!result) {
      return;
    }

    if (openNewWindow) {
      return window.open(result.url);
    }

    popout.open({
      content: 'bbbLiveView',
      data: {
        source: result.url,
        streamingOptions: result,
        canOpenExternal: true,
        showVideoControls: false
      },
      onCloseCallback: () => false
    });
  });
  useEffect(() => {
    var _room$streamingOption;

    if ((room === null || room === void 0 ? void 0 : (_room$streamingOption = room.streamingOptions) === null || _room$streamingOption === void 0 ? void 0 : _room$streamingOption.type) !== 'call' || openNewWindow || popout.context) {
      return;
    }

    startCall();
    return () => {
      popout.close();
    };
  }, [room === null || room === void 0 ? void 0 : (_room$streamingOption2 = room.streamingOptions) === null || _room$streamingOption2 === void 0 ? void 0 : _room$streamingOption2.type, startCall, openNewWindow]);
  const canManageCall = (room === null || room === void 0 ? void 0 : room.t) === 'd' || hasCallManagement;
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/BBB/7c0b22c9fb136a5df219e6ef7c7b5bac00719e99.map
