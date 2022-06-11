function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/lib/getFromRestApi.ts                                                                                     //
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
  getFromRestApi: function () {
    return getFromRestApi;
  }
});
var APIClient;
module.link("../../../app/utils/client/lib/RestApiClient", {
  APIClient: function (v) {
    APIClient = v;
  }
}, 0);

var getFromRestApi = function (endpoint) {
  return function () {
    function _callee(params) {
      var response;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(APIClient.get(endpoint.replace(/^\/+/, ''), params));

              case 2:
                response = _context.sent;

                if (!(typeof response === 'string')) {
                  _context.next = 5;
                  break;
                }

                throw new Error('invalid response data type');

              case 5:
                return _context.abrupt("return", response);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }();
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/lib/2796e78011b51f7c06d8ddb4db354f928ea6a86d.map
