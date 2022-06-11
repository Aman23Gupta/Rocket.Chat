function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/ParentTeam.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var TEAM_TYPE;
module.link("../../../../definition/ITeam", {
  TEAM_TYPE: function (v) {
    TEAM_TYPE = v;
  }
}, 1);
var Header;
module.link("../../../components/Header", {
  "default": function (v) {
    Header = v;
  }
}, 2);
var useUserId;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 3);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 5);
var goToRoomById;
module.link("../../../lib/utils/goToRoomById", {
  goToRoomById: function (v) {
    goToRoomById = v;
  }
}, 6);

var ParentTeam = function (_ref) {
  var _userTeams$teams;

  var room = _ref.room;
  var userId = useUserId();

  var _useEndpointData = useEndpointData('teams.info', useMemo(function () {
    return {
      teamId: room.teamId
    };
  }, [room.teamId])),
      value = _useEndpointData.value,
      phase = _useEndpointData.phase;

  var _useEndpointData2 = useEndpointData('users.listTeams', useMemo(function () {
    return {
      userId: userId
    };
  }, [userId])),
      userTeams = _useEndpointData2.value,
      userTeamsPhase = _useEndpointData2.phase;

  var belongsToTeam = (userTeams === null || userTeams === void 0 ? void 0 : (_userTeams$teams = userTeams.teams) === null || _userTeams$teams === void 0 ? void 0 : _userTeams$teams.find(function (team) {
    return team._id === room.teamId;
  })) || false;
  var isTeamPublic = (value === null || value === void 0 ? void 0 : value.teamInfo.type) === TEAM_TYPE.PUBLIC;

  var teamMainRoomHref = function () {
    return goToRoomById(value === null || value === void 0 ? void 0 : value.teamInfo.roomId);
  };

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
//# sourceMappingURL=/dynamic/client/views/room/Header/ff87250166693b5aeed774d22663ba0b2ee8c362.map
