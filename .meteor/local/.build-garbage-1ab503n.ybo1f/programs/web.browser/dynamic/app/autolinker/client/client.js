function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/autolinker/client/client.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["phone"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
module.export({
  createAutolinkerMessageRenderer: () => createAutolinkerMessageRenderer
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Random;
module.link("meteor/random", {
  Random(v) {
    Random = v;
  }

}, 1);
let Autolinker;
module.link("autolinker", {
  default(v) {
    Autolinker = v;
  }

}, 2);
let escapeRegExp;
module.link("@rocket.chat/string-helpers", {
  escapeRegExp(v) {
    escapeRegExp = v;
  }

}, 3);

const createAutolinkerMessageRenderer = _ref => {
  let {
    phone
  } = _ref,
      config = _objectWithoutProperties(_ref, _excluded);

  return message => {
    var _message$html;

    if (!((_message$html = message.html) !== null && _message$html !== void 0 && _message$html.trim())) {
      return message;
    }

    let msgParts;
    let regexTokens;

    if (message.tokens && message.tokens.length) {
      regexTokens = new RegExp("(".concat((message.tokens || []).map(_ref2 => {
        let {
          token
        } = _ref2;
        return escapeRegExp(token);
      }), ")"), 'g');
      msgParts = message.html.split(regexTokens);
    } else {
      msgParts = [message.html];
    }

    message.html = msgParts.map(msgPart => {
      if (regexTokens && regexTokens.test(msgPart)) {
        return msgPart;
      }

      const muttableConfig = _objectSpread(_objectSpread({}, config), {}, {
        phone: false,
        stripTrailingSlash: false,
        replaceFn: match => {
          var _message$tokens;

          const token = "=!=".concat(Random.id(), "=!=");
          const tag = match.buildTag();

          if (~match.matchedText.indexOf(Meteor.absoluteUrl())) {
            tag.setAttr('target', '');
          }

          message.tokens = (_message$tokens = message.tokens) !== null && _message$tokens !== void 0 ? _message$tokens : [];
          message.tokens.push({
            token,
            text: tag.toAnchorString()
          });
          return token;
        }
      });

      const autolinkerMsg = Autolinker.link(msgPart, muttableConfig);
      muttableConfig.phone = phone;
      return phone ? Autolinker.link(autolinkerMsg, muttableConfig) : autolinkerMsg;
    }).join('');
    return message;
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/autolinker/client/55cc656ebfcdbb9089f6e8ee77b3a3c23e424684.map
