function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/index.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  "default": function () {
    return TeamsInfoWithRooms;
  }
});
var Callout;
module.link("@rocket.chat/fuselage", {
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var VerticalBar;
module.link("../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 3);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 5);
var useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 6);
var EditChannelWithData;
module.link("../../../room/contextualBar/Info/EditRoomInfo", {
  "default": function (v) {
    EditChannelWithData = v;
  }
}, 7);
var TeamsInfoWithData;
module.link("./TeamsInfoWithData", {
  "default": function (v) {
    TeamsInfoWithData = v;
  }
}, 8);

function TeamsInfoWithRooms(_ref) {
  var rid = _ref.rid;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1];

  var onClickBack = useMutableCallback(function () {
    return setEditing(false);
  });
  var t = useTranslation();
  var params = useMemo(function () {
    return {
      roomId: rid
    };
  }, [rid]);

  var _useEndpointData = useEndpointData('rooms.info', params),
      phase = _useEndpointData.phase,
      value = _useEndpointData.value,
      error = _useEndpointData.error;

  if (phase === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(VerticalBar.Skeleton, null);
  }

  if (error) {
    return /*#__PURE__*/React.createElement(VerticalBar, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
      name: "info-circled"
    }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Team_Info')), /*#__PURE__*/React.createElement(VerticalBar.Close, null)), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(Callout, {
      type: "danger"
    }, JSON.stringify(error))));
  }

  return editing ? /*#__PURE__*/React.createElement(EditChannelWithData, {
    onClickBack: onClickBack,
    rid: rid
  }) : /*#__PURE__*/React.createElement(TeamsInfoWithData, {
    openEditing: setEditing,
    room: value.room
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/716080755b31fff90b1c7008c9c588604116d943.map
