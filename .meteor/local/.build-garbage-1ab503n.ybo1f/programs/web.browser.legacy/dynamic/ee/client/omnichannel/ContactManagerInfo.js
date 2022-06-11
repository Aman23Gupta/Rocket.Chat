function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/ContactManagerInfo.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 0);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var UserCard;
module.link("../../../client/components/UserCard", {
  "default": function (v) {
    UserCard = v;
  }
}, 3);
var UserStatus;
module.link("../../../client/components/UserStatus", {
  UserStatus: function (v) {
    UserStatus = v;
  }
}, 4);
var UserAvatar;
module.link("../../../client/components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 5);
var AsyncStatePhase;
module.link("../../../client/hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 6);
var useEndpointData;
module.link("../../../client/hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 7);
var wordBreak = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\tword-break: break-word;\n"])));

function ContactManagerInfo(_ref) {
  var username = _ref.username;

  var _useEndpointData = useEndpointData("users.info?username=" + username),
      data = _useEndpointData.value,
      state = _useEndpointData.phase;

  if (!data && state === AsyncStatePhase.LOADING) {
    return null;
  }

  var _data$user = data.user,
      name = _data$user.name,
      status = _data$user.status;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(UserCard.Info, {
    className: wordBreak,
    flexShrink: 0,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    title: username,
    username: username
  }), /*#__PURE__*/React.createElement(UserCard.Username, {
    mis: "x10",
    name: username,
    status: /*#__PURE__*/React.createElement(UserStatus, {
      status: status
    })
  }), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mis: "x7",
    mb: "x9",
    align: "center",
    justifyContent: "center"
  }, "(", name, ")")));
}

module.exportDefault(ContactManagerInfo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/df729bc0bdccf2da075ed977a6803b108bee14c6.map
