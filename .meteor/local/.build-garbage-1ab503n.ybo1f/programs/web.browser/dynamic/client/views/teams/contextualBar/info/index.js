function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/index.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => TeamsInfoWithRooms
});
let Callout;
module.link("@rocket.chat/fuselage", {
  Callout(v) {
    Callout = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let VerticalBar;
module.link("../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 3);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 5);
let useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 6);
let EditChannelWithData;
module.link("../../../room/contextualBar/Info/EditRoomInfo", {
  default(v) {
    EditChannelWithData = v;
  }

}, 7);
let TeamsInfoWithData;
module.link("./TeamsInfoWithData", {
  default(v) {
    TeamsInfoWithData = v;
  }

}, 8);

function TeamsInfoWithRooms(_ref) {
  let {
    rid
  } = _ref;
  const [editing, setEditing] = useState(false);
  const onClickBack = useMutableCallback(() => setEditing(false));
  const t = useTranslation();
  const params = useMemo(() => ({
    roomId: rid
  }), [rid]);
  const {
    phase,
    value,
    error
  } = useEndpointData('rooms.info', params);

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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/e772bb912c5fe63410ae2ed99121b510287e893d.map
