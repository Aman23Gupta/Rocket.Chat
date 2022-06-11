function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/AvatarUrlProvider.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["type"];

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var roomTypes;
module.link("../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 1);
var getURL;
module.link("../../app/utils/lib/getURL", {
  getURL: function (v) {
    getURL = v;
  }
}, 2);
var AvatarUrlContext;
module.link("../contexts/AvatarUrlContext", {
  AvatarUrlContext: function (v) {
    AvatarUrlContext = v;
  }
}, 3);
var useSetting;
module.link("../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 4);

var AvatarUrlProvider = function (_ref) {
  var children = _ref.children;
  var cdnAvatarUrl = String(useSetting('CDN_PREFIX') || '');
  var externalProviderUrl = String(useSetting('Accounts_AvatarExternalProviderUrl') || '');
  var contextValue = useMemo(function () {
    return {
      getUserPathAvatar: function () {
        if (externalProviderUrl) {
          return function (uid) {
            return externalProviderUrl.trim().replace(/\/+$/, '').replace('{username}', uid);
          };
        }

        if (cdnAvatarUrl) {
          return function (uid, etag) {
            return cdnAvatarUrl + "/avatar/" + uid + (etag ? "?etag=" + etag : '');
          };
        }

        return function (uid, etag) {
          return getURL("/avatar/" + uid + (etag ? "?etag=" + etag : ''));
        };
      }(),
      getRoomPathAvatar: function (_ref2) {
        var type = _ref2.type,
            room = _objectWithoutProperties(_ref2, _excluded);

        return roomTypes.getConfig(type || room.t).getAvatarPath(_objectSpread({
          username: room._id
        }, room));
      }
    };
  }, [externalProviderUrl, cdnAvatarUrl]);
  return /*#__PURE__*/React.createElement(AvatarUrlContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(AvatarUrlProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/bbf07e5fa221e0d1713f4877907214a44eb92cb5.map
