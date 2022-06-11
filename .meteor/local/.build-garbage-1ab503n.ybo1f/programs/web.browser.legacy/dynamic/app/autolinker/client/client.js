function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/autolinker/client/client.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["phone"];

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
module.export({
  createAutolinkerMessageRenderer: function () {
    return createAutolinkerMessageRenderer;
  }
});
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Random;
module.link("meteor/random", {
  Random: function (v) {
    Random = v;
  }
}, 1);
var Autolinker;
module.link("autolinker", {
  "default": function (v) {
    Autolinker = v;
  }
}, 2);
var escapeRegExp;
module.link("@rocket.chat/string-helpers", {
  escapeRegExp: function (v) {
    escapeRegExp = v;
  }
}, 3);

var createAutolinkerMessageRenderer = function (_ref) {
  var phone = _ref.phone,
      config = _objectWithoutProperties(_ref, _excluded);

  return function (message) {
    var _message$html;

    if (!((_message$html = message.html) !== null && _message$html !== void 0 && _message$html.trim())) {
      return message;
    }

    var msgParts;
    var regexTokens;

    if (message.tokens && message.tokens.length) {
      regexTokens = new RegExp("(" + (message.tokens || []).map(function (_ref2) {
        var token = _ref2.token;
        return escapeRegExp(token);
      }) + ")", 'g');
      msgParts = message.html.split(regexTokens);
    } else {
      msgParts = [message.html];
    }

    message.html = msgParts.map(function (msgPart) {
      if (regexTokens && regexTokens.test(msgPart)) {
        return msgPart;
      }

      var muttableConfig = _objectSpread(_objectSpread({}, config), {}, {
        phone: false,
        stripTrailingSlash: false,
        replaceFn: function (match) {
          var _message$tokens;

          var token = "=!=" + Random.id() + "=!=";
          var tag = match.buildTag();

          if (~match.matchedText.indexOf(Meteor.absoluteUrl())) {
            tag.setAttr('target', '');
          }

          message.tokens = (_message$tokens = message.tokens) !== null && _message$tokens !== void 0 ? _message$tokens : [];
          message.tokens.push({
            token: token,
            text: tag.toAnchorString()
          });
          return token;
        }
      });

      var autolinkerMsg = Autolinker.link(msgPart, muttableConfig);
      muttableConfig.phone = phone;
      return phone ? Autolinker.link(autolinkerMsg, muttableConfig) : autolinkerMsg;
    }).join('');
    return message;
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/autolinker/client/b6da8937c3966b49f33cdb9fa312e754618605c5.map
