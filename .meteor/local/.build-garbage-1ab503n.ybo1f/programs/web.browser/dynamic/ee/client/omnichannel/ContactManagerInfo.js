function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/ContactManagerInfo.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 0);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let UserCard;
module.link("../../../client/components/UserCard", {
  default(v) {
    UserCard = v;
  }

}, 3);
let UserStatus;
module.link("../../../client/components/UserStatus", {
  UserStatus(v) {
    UserStatus = v;
  }

}, 4);
let UserAvatar;
module.link("../../../client/components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 5);
let AsyncStatePhase;
module.link("../../../client/hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 6);
let useEndpointData;
module.link("../../../client/hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 7);
const wordBreak = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tword-break: break-word;\n"])));

function ContactManagerInfo(_ref) {
  let {
    username
  } = _ref;
  const {
    value: data,
    phase: state
  } = useEndpointData("users.info?username=".concat(username));

  if (!data && state === AsyncStatePhase.LOADING) {
    return null;
  }

  const {
    user: {
      name,
      status
    }
  } = data;
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/41ac12a916a60e1167216e4ee021f73efc66b3cc.map
