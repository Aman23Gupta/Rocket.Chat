function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useEndpointAction.ts                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
module.export({
  useEndpointAction: function () {
    return useEndpointAction;
  }
});
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var useEndpoint;
module.link("../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 1);
var useToastMessageDispatch;
module.link("../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 2);

var useEndpointAction = function (method, path) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var successMessage = arguments.length > 3 ? arguments[3] : undefined;
  var sendData = useEndpoint(method, path);
  var dispatchToastMessage = useToastMessageDispatch();
  return useCallback(function () {
    function _callee() {
      var data;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(sendData(params));

              case 3:
                data = _context.sent;

                if (successMessage) {
                  dispatchToastMessage({
                    type: 'success',
                    message: successMessage
                  });
                }

                return _context.abrupt("return", data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });
                throw _context.t0;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 8]], Promise);
    }

    return _callee;
  }(), [dispatchToastMessage, params, sendData, successMessage]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/8ae04a7c0a3748d6eed90d98f9b5c9427ee228bf.map
