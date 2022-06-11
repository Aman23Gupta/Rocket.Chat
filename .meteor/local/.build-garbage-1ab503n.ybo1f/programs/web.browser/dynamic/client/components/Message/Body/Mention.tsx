function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Mention.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let useUserId;
module.link("../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 1);

const Mention = _ref => {
  let {
    value: {
      value: mention
    },
    mentions
  } = _ref;
  const uid = useUserId();
  const mentioned = mentions.find(mentioned => mentioned.username === mention);
  const classNames = ['mention-link'];

  if (mention === 'all') {
    classNames.push('mention-link--all');
    classNames.push('mention-link--group');
  } else if (mention === 'here') {
    classNames.push('mention-link--here');
    classNames.push('mention-link--group');
  } else if (mentioned && mentioned._id === uid) {
    classNames.push('mention-link--me');
    classNames.push('mention-link--user');
  } else {
    classNames.push('mention-link--user');
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, mentioned && /*#__PURE__*/React.createElement("span", {
    className: classNames.join(' ')
  }, mentioned.name || mention), !mentioned && "@".concat(mention));
};

module.exportDefault( /*#__PURE__*/memo(Mention));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/fe22fc7e5d4872b511712533c50cd0b9e8516ce7.map
