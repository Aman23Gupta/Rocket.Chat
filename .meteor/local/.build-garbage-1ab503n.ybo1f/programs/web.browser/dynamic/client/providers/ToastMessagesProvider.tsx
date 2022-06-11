function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/ToastMessagesProvider.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let toastr;
module.link("toastr", {
  default(v) {
    toastr = v;
  }

}, 1);
let ToastMessagesContext;
module.link("../contexts/ToastMessagesContext", {
  ToastMessagesContext(v) {
    ToastMessagesContext = v;
  }

}, 2);
let dispatchToastMessage, subscribeToToastMessages;
module.link("../lib/toast", {
  dispatchToastMessage(v) {
    dispatchToastMessage = v;
  },

  subscribeToToastMessages(v) {
    subscribeToToastMessages = v;
  }

}, 3);
let handleError;
module.link("../lib/utils/handleError", {
  handleError(v) {
    handleError = v;
  }

}, 4);
const contextValue = {
  dispatch: dispatchToastMessage
};

const ToastMessagesProvider = _ref => {
  let {
    children
  } = _ref;
  useEffect(() => subscribeToToastMessages(_ref2 => {
    let {
      type,
      message,
      title,
      options
    } = _ref2;

    if (type === 'error' && typeof message === 'object') {
      handleError(message);
      return;
    }

    if (typeof message !== 'string') {
      message = "[".concat(message.name, "] ").concat(message.message);
    }

    toastr[type](message, title, options);
  }), []);
  return /*#__PURE__*/React.createElement(ToastMessagesContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(ToastMessagesProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/4dc067b39f296c5d30674a603414aacb539af630.map
