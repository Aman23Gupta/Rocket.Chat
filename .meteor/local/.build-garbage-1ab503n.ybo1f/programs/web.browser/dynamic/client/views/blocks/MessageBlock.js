function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/blocks/MessageBlock.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let UIKitIncomingInteractionContainerType;
module.link("@rocket.chat/apps-engine/definition/uikit/UIKitIncomingInteractionContainer", {
  UIKitIncomingInteractionContainerType(v) {
    UIKitIncomingInteractionContainerType = v;
  }

}, 0);
let UiKitMessage, UiKitComponent, kitContext, messageParser;
module.link("@rocket.chat/fuselage-ui-kit", {
  UiKitMessage(v) {
    UiKitMessage = v;
  },

  UiKitComponent(v) {
    UiKitComponent = v;
  },

  kitContext(v) {
    kitContext = v;
  },

  messageParser(v) {
    messageParser = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let ActionManager;
module.link("../../../app/ui-message/client/ActionManager", {
  "*"(v) {
    ActionManager = v;
  }

}, 3);
let useBlockRendered;
module.link("../../components/Message/hooks/useBlockRendered", {
  useBlockRendered(v) {
    useBlockRendered = v;
  }

}, 4);
let renderMessageBody;
module.link("../../lib/utils/renderMessageBody", {
  renderMessageBody(v) {
    renderMessageBody = v;
  }

}, 5);
module.link("./textParsers");

// TODO: move this to fuselage-ui-kit itself
const mrkdwn = function () {
  let {
    text
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return text && /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: renderMessageBody({
        msg: text
      })
    }
  });
};

messageParser.mrkdwn = mrkdwn;

function MessageBlock(_ref) {
  let {
    mid: _mid,
    rid,
    blocks,
    appId
  } = _ref;
  const {
    ref,
    className
  } = useBlockRendered();
  const context = {
    action: _ref2 => {
      let {
        actionId,
        value,
        blockId,
        mid = _mid
      } = _ref2;
      ActionManager.triggerBlockAction({
        blockId,
        actionId,
        value,
        mid,
        rid,
        appId: blocks[0].appId,
        container: {
          type: UIKitIncomingInteractionContainerType.MESSAGE,
          id: mid
        }
      });
    },
    appId,
    rid
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
//# sourceMappingURL=/dynamic/client/views/blocks/e5032b6707cba27e8f03d5307fa0ec9747a520cc.map
