function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/ToastMessagesProvider.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof;

module.link("@babel/runtime/helpers/typeof", {
  default: function (v) {
    _typeof = v;
  }
}, 0);
var React, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var toastr;
module.link("toastr", {
  "default": function (v) {
    toastr = v;
  }
}, 1);
var ToastMessagesContext;
module.link("../contexts/ToastMessagesContext", {
  ToastMessagesContext: function (v) {
    ToastMessagesContext = v;
  }
}, 2);
var dispatchToastMessage, subscribeToToastMessages;
module.link("../lib/toast", {
  dispatchToastMessage: function (v) {
    dispatchToastMessage = v;
  },
  subscribeToToastMessages: function (v) {
    subscribeToToastMessages = v;
  }
}, 3);
var handleError;
module.link("../lib/utils/handleError", {
  handleError: function (v) {
    handleError = v;
  }
}, 4);
var contextValue = {
  dispatch: dispatchToastMessage
};

var ToastMessagesProvider = function (_ref) {
  var children = _ref.children;
  useEffect(function () {
    return subscribeToToastMessages(function (_ref2) {
      var type = _ref2.type,
          message = _ref2.message,
          title = _ref2.title,
          options = _ref2.options;

      if (type === 'error' && _typeof(message) === 'object') {
        handleError(message);
        return;
      }

      if (typeof message !== 'string') {
        message = "[" + message.name + "] " + message.message;
      }

      toastr[type](message, title, options);
    });
  }, []);
  return /*#__PURE__*/React.createElement(ToastMessagesContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(ToastMessagesProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/313e4f8078f0757aaa668a5dfb1dac8f69efbbf9.map
