function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useEndpointUpload.js                                                                                   //
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
  useEndpointUpload: function () {
    return useEndpointUpload;
  }
});
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var useUpload;
module.link("../contexts/ServerContext", {
  useUpload: function (v) {
    useUpload = v;
  }
}, 1);
var useToastMessageDispatch;
module.link("../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 2);

var useEndpointUpload = function (endpoint) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var successMessage = arguments.length > 2 ? arguments[2] : undefined;
  var sendData = useUpload(endpoint);
  var dispatchToastMessage = useToastMessageDispatch();
  return useCallback(function () {
    function _callee() {
      var _len,
          args,
          _key,
          data,
          promise,
          _args = arguments;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args[_key];
                }

                data = sendData.apply(void 0, [params].concat(args));
                promise = data instanceof Promise ? data : data.promise;
                _context.next = 6;
                return _regeneratorRuntime.awrap(promise);

              case 6:
                data = _context.sent;

                if (data.success) {
                  _context.next = 9;
                  break;
                }

                throw new Error(data.status);

              case 9:
                successMessage && dispatchToastMessage({
                  type: 'success',
                  message: successMessage
                });
                return _context.abrupt("return", data);

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });
                return _context.abrupt("return", {
                  success: false
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 13]], Promise);
    }

    return _callee;
  }(), [dispatchToastMessage, params, sendData, successMessage]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/00da739492c6fc80d3cd84bafa7694d3fdbb33c2.map
