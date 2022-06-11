function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Mention.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var useUserId;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 1);

var Mention = function (_ref) {
  var mention = _ref.value.value,
      mentions = _ref.mentions;
  var uid = useUserId();
  var mentioned = mentions.find(function (mentioned) {
    return mentioned.username === mention;
  });
  var classNames = ['mention-link'];

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
  }, mentioned.name || mention), !mentioned && "@" + mention);
};

module.exportDefault( /*#__PURE__*/memo(Mention));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/f4d4dd4440ad33973037acfddbf1ac26d19603a6.map
