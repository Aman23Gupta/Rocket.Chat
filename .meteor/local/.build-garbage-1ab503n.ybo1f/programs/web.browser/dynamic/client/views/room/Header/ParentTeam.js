function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/ParentTeam.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 0);
let TEAM_TYPE;
module.link("../../../../definition/ITeam", {
  TEAM_TYPE(v) {
    TEAM_TYPE = v;
  }

}, 1);
let Header;
module.link("../../../components/Header", {
  default(v) {
    Header = v;
  }

}, 2);
let useUserId;
module.link("../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 5);
let goToRoomById;
module.link("../../../lib/utils/goToRoomById", {
  goToRoomById(v) {
    goToRoomById = v;
  }

}, 6);

const ParentTeam = _ref => {
  var _userTeams$teams;

  let {
    room
  } = _ref;
  const userId = useUserId();
  const {
    value,
    phase
  } = useEndpointData('teams.info', useMemo(() => ({
    teamId: room.teamId
  }), [room.teamId]));
  const {
    value: userTeams,
    phase: userTeamsPhase
  } = useEndpointData('users.listTeams', useMemo(() => ({
    userId
  }), [userId]));
  const belongsToTeam = (userTeams === null || userTeams === void 0 ? void 0 : (_userTeams$teams = userTeams.teams) === null || _userTeams$teams === void 0 ? void 0 : _userTeams$teams.find(team => team._id === room.teamId)) || false;
  const isTeamPublic = (value === null || value === void 0 ? void 0 : value.teamInfo.type) === TEAM_TYPE.PUBLIC;

  const teamMainRoomHref = () => goToRoomById(value === null || value === void 0 ? void 0 : value.teamInfo.roomId);

  if (phase === AsyncStatePhase.LOADING || userTeamsPhase === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(Header.Tag.Skeleton, null);
  }

  if (phase === AsyncStatePhase.REJECTED || !value.teamInfo) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Header.Tag, null, /*#__PURE__*/React.createElement(Header.Tag.Icon, {
    icon: {
      name: isTeamPublic ? 'team' : 'team-lock'
    }
  }), isTeamPublic || belongsToTeam ? /*#__PURE__*/React.createElement(Header.Link, {
    onClick: teamMainRoomHref
  }, value.teamInfo.name) : value.teamInfo.name);
};

module.exportDefault(ParentTeam);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/0a630d227c68968378aabd6915d1fc8885c6825b.map
