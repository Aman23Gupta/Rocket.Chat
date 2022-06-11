function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/blocks/MessageBlock.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var UIKitIncomingInteractionContainerType;
module.link("@rocket.chat/apps-engine/definition/uikit/UIKitIncomingInteractionContainer", {
  UIKitIncomingInteractionContainerType: function (v) {
    UIKitIncomingInteractionContainerType = v;
  }
}, 0);
var UiKitMessage, UiKitComponent, kitContext, messageParser;
module.link("@rocket.chat/fuselage-ui-kit", {
  UiKitMessage: function (v) {
    UiKitMessage = v;
  },
  UiKitComponent: function (v) {
    UiKitComponent = v;
  },
  kitContext: function (v) {
    kitContext = v;
  },
  messageParser: function (v) {
    messageParser = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var ActionManager;
module.link("../../../app/ui-message/client/ActionManager", {
  "*": function (v) {
    ActionManager = v;
  }
}, 3);
var useBlockRendered;
module.link("../../components/Message/hooks/useBlockRendered", {
  useBlockRendered: function (v) {
    useBlockRendered = v;
  }
}, 4);
var renderMessageBody;
module.link("../../lib/utils/renderMessageBody", {
  renderMessageBody: function (v) {
    renderMessageBody = v;
  }
}, 5);
module.link("./textParsers");

// TODO: move this to fuselage-ui-kit itself
var mrkdwn = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      text = _ref.text;

  return text && /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: renderMessageBody({
        msg: text
      })
    }
  });
};

messageParser.mrkdwn = mrkdwn;

function MessageBlock(_ref2) {
  var _mid = _ref2.mid,
      rid = _ref2.rid,
      blocks = _ref2.blocks,
      appId = _ref2.appId;

  var _useBlockRendered = useBlockRendered(),
      ref = _useBlockRendered.ref,
      className = _useBlockRendered.className;

  var context = {
    action: function (_ref3) {
      var actionId = _ref3.actionId,
          value = _ref3.value,
          blockId = _ref3.blockId,
          _ref3$mid = _ref3.mid,
          mid = _ref3$mid === void 0 ? _mid : _ref3$mid;
      ActionManager.triggerBlockAction({
        blockId: blockId,
        actionId: actionId,
        value: value,
        mid: mid,
        rid: rid,
        appId: blocks[0].appId,
        container: {
          type: UIKitIncomingInteractionContainerType.MESSAGE,
          id: mid
        }
      });
    },
    appId: appId,
    rid: rid
  };
  return /*#__PURE__*/React.createElement(kitContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", {
    className: className,
    ref: ref
  }), /*#__PURE__*/React.createElement(UiKitComponent, {
    render: UiKitMessage,
    blocks: blocks
  }));
}

module.exportDefault(MessageBlock);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/blocks/c69171587602251d0825eb9cffa7da6aad77a093.map
