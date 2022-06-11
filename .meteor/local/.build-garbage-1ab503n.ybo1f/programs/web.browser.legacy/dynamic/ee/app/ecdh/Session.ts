function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/app/ecdh/Session.ts                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _createClass;

module.link("@babel/runtime/helpers/createClass", {
  default: function (v) {
    _createClass = v;
  }
}, 1);
module.export({
  Session: function () {
    return Session;
  }
});
var SodiumPlus, X25519PublicKey;
module.link("sodium-plus", {
  SodiumPlus: function (v) {
    SodiumPlus = v;
  },
  X25519PublicKey: function (v) {
    X25519PublicKey = v;
  }
}, 0);

var _sodium;

var Session = /*#__PURE__*/function () {
  function Session() {
    this.stringFormatKey = 'base64';
    this.stringFormatEncryptedData = 'base64';
    this.stringFormatRawData = 'base64';
    this.decryptKey = void 0;
    this.encryptKey = void 0;
    this.secretKey = void 0;
    this.publicKey = void 0;
  }

  var _proto = Session.prototype;

  _proto.sodium = function () {
    function sodium() {
      return _regeneratorRuntime.async(function () {
        function sodium$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _sodium || SodiumPlus.auto());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }

        return sodium$;
      }(), null, null, null, Promise);
    }

    return sodium;
  }();

  _proto.publicKeyFromString = function () {
    function publicKeyFromString(text) {
      return new X25519PublicKey(Buffer.from(text, this.stringFormatKey));
    }

    return publicKeyFromString;
  }();

  _proto.encryptToBuffer = function () {
    function encryptToBuffer(plaintext) {
      var sodium, nonce, ciphertext;
      return _regeneratorRuntime.async(function () {
        function encryptToBuffer$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _regeneratorRuntime.awrap(this.sodium());

              case 2:
                sodium = _context2.sent;
                _context2.next = 5;
                return _regeneratorRuntime.awrap(sodium.randombytes_buf(24));

              case 5:
                nonce = _context2.sent;
                _context2.next = 8;
                return _regeneratorRuntime.awrap(sodium.crypto_secretbox(Buffer.from(plaintext).toString(this.stringFormatRawData), nonce, this.encryptKey));

              case 8:
                ciphertext = _context2.sent;
                return _context2.abrupt("return", Buffer.concat([nonce, ciphertext]));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }

        return encryptToBuffer$;
      }(), null, this, null, Promise);
    }

    return encryptToBuffer;
  }();

  _proto.encrypt = function () {
    function encrypt(plaintext) {
      var buffer;
      return _regeneratorRuntime.async(function () {
        function encrypt$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _regeneratorRuntime.awrap(this.encryptToBuffer(plaintext));

              case 2:
                buffer = _context3.sent;
                return _context3.abrupt("return", buffer.toString(this.stringFormatEncryptedData));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }

        return encrypt$;
      }(), null, this, null, Promise);
    }

    return encrypt;
  }();

  _proto.decryptToBuffer = function () {
    function decryptToBuffer(data) {
      var sodium, buffer, decrypted;
      return _regeneratorRuntime.async(function () {
        function decryptToBuffer$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _regeneratorRuntime.awrap(this.sodium());

              case 2:
                sodium = _context4.sent;
                buffer = Buffer.from(Buffer.isBuffer(data) ? data.toString() : data, this.stringFormatEncryptedData);
                _context4.next = 6;
                return _regeneratorRuntime.awrap(sodium.crypto_secretbox_open(buffer.slice(24), buffer.slice(0, 24), this.decryptKey));

              case 6:
                decrypted = _context4.sent;
                return _context4.abrupt("return", Buffer.from(decrypted.toString(), this.stringFormatRawData));

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }

        return decryptToBuffer$;
      }(), null, this, null, Promise);
    }

    return decryptToBuffer;
  }();

  _proto.decrypt = function () {
    function decrypt(data) {
      var buffer;
      return _regeneratorRuntime.async(function () {
        function decrypt$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _regeneratorRuntime.awrap(this.decryptToBuffer(data));

              case 2:
                buffer = _context5.sent;
                return _context5.abrupt("return", buffer.toString());

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }

        return decrypt$;
      }(), null, this, null, Promise);
    }

    return decrypt;
  }();

  _createClass(Session, [{
    key: "publicKeyString",
    get: function () {
      return this.publicKey.toString(this.stringFormatKey);
    }
  }]);

  return Session;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/app/ecdh/f291200779f0a32b2c5da703fb076e4d37b7b3b0.map
