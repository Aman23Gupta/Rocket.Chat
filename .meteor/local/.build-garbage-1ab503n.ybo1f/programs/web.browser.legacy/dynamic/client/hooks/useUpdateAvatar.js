function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useUpdateAvatar.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);
module.export({
  useUpdateAvatar: function () {
    return useUpdateAvatar;
  }
});
var useMemo, useCallback;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var useMethod;
module.link("../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 1);
var useToastMessageDispatch;
module.link("../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 2);
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useEndpointAction;
module.link("./useEndpointAction", {
  useEndpointAction: function (v) {
    useEndpointAction = v;
  }
}, 4);
var useEndpointUpload;
module.link("./useEndpointUpload", {
  useEndpointUpload: function (v) {
    useEndpointUpload = v;
  }
}, 5);

var useUpdateAvatar = function (avatarObj, userId) {
  var t = useTranslation();
  var avatarUrl = avatarObj === null || avatarObj === void 0 ? void 0 : avatarObj.avatarUrl;
  var successText = t('Avatar_changed_successfully');
  var setAvatarFromService = useMethod('setAvatarFromService');
  var dispatchToastMessage = useToastMessageDispatch();
  var saveAvatarQuery = useMemo(function () {
    return _objectSpread({
      userId: userId
    }, avatarUrl && {
      avatarUrl: avatarUrl
    });
  }, [avatarUrl, userId]);
  var resetAvatarQuery = useMemo(function () {
    return {
      userId: userId
    };
  }, [userId]);
  var saveAvatarAction = useEndpointUpload('users.setAvatar', saveAvatarQuery, successText);
  var saveAvatarUrlAction = useEndpointAction('POST', 'users.setAvatar', saveAvatarQuery, successText);
  var resetAvatarAction = useEndpointAction('POST', 'users.resetAvatar', resetAvatarQuery, successText);
  var updateAvatar = useCallback(function () {
    function _callee() {
      var blob, contentType, service;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(avatarObj === 'reset')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", resetAvatarAction());

              case 2:
                if (!avatarObj.avatarUrl) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", saveAvatarUrlAction());

              case 4:
                if (!avatarObj.service) {
                  _context.next = 16;
                  break;
                }

                blob = avatarObj.blob, contentType = avatarObj.contentType, service = avatarObj.service;
                _context.prev = 6;
                _context.next = 9;
                return _regeneratorRuntime.awrap(setAvatarFromService(blob, contentType, service));

              case 9:
                dispatchToastMessage({
                  type: 'success',
                  message: successText
                });
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](6);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 15:
                return _context.abrupt("return");

              case 16:
                if (!(avatarObj instanceof FormData)) {
                  _context.next = 19;
                  break;
                }

                avatarObj.set('userId', userId);
                return _context.abrupt("return", saveAvatarAction(avatarObj));

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[6, 12]], Promise);
    }

    return _callee;
  }(), [avatarObj, dispatchToastMessage, resetAvatarAction, saveAvatarAction, saveAvatarUrlAction, setAvatarFromService, successText, userId]);
  return updateAvatar;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/8f0a7011f72f7803324b7f354ccec72fcf55d4bf.map
