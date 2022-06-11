function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/app/ecdh/client/ClientSession.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _inheritsLoose;

module.link("@babel/runtime/helpers/inheritsLoose", {
  default: function (v) {
    _inheritsLoose = v;
  }
}, 2);
module.export({
  ClientSession: function () {
    return ClientSession;
  }
});
var Session;
module.link("../Session", {
  Session: function (v) {
    Session = v;
  }
}, 0);

var ClientSession = /*#__PURE__*/function (_Session) {
  _inheritsLoose(ClientSession, _Session);

  function ClientSession() {
    return _Session.apply(this, arguments) || this;
  }

  var _proto = ClientSession.prototype;

  _proto.init = function () {
    function init() {
      var sodium, clientKeypair;
      return _regeneratorRuntime.async(function () {
        function init$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(this.sodium());

              case 2:
                sodium = _context.sent;
                _context.next = 5;
                return _regeneratorRuntime.awrap(sodium.crypto_box_keypair());

              case 5:
                clientKeypair = _context.sent;
                _context.next = 8;
                return _regeneratorRuntime.awrap(sodium.crypto_box_secretkey(clientKeypair));

              case 8:
                this.secretKey = _context.sent;
                _context.next = 11;
                return _regeneratorRuntime.awrap(sodium.crypto_box_publickey(clientKeypair));

              case 11:
                this.publicKey = _context.sent;
                return _context.abrupt("return", this.publicKey.toString(this.stringFormatKey));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }

        return init$;
      }(), null, this, null, Promise);
    }

    return init;
  }();

  _proto.setServerKey = function () {
    function setServerKey(serverPublic) {
      var sodium, _await$sodium$crypto_, _await$sodium$crypto_2, decryptKey, encryptKey;

      return _regeneratorRuntime.async(function () {
        function setServerKey$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _regeneratorRuntime.awrap(this.sodium());

              case 2:
                sodium = _context2.sent;
                _context2.next = 5;
                return _regeneratorRuntime.awrap(sodium.crypto_kx_client_session_keys(this.publicKey, this.secretKey, this.publicKeyFromString(serverPublic)));

              case 5:
                _await$sodium$crypto_ = _context2.sent;
                _await$sodium$crypto_2 = _slicedToArray(_await$sodium$crypto_, 2);
                decryptKey = _await$sodium$crypto_2[0];
                encryptKey = _await$sodium$crypto_2[1];
                this.decryptKey = decryptKey;
                this.encryptKey = encryptKey;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }

        return setServerKey$;
      }(), null, this, null, Promise);
    }

    return setServerKey;
  }();

  return ClientSession;
}(Session);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/app/ecdh/client/81eedb804af2ecb19a3c551944a218a7b1d78498.map
