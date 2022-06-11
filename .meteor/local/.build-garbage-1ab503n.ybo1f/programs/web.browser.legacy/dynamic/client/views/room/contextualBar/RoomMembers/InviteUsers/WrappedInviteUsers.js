function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/InviteUsers/WrappedInviteUsers.js                                       //
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
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useState, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var useEndpoint;
module.link("../../../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useFormatDateAndTime;
module.link("../../../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 4);
var useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 5);
var EditInvite;
module.link("../EditInvite", {
  "default": function (v) {
    EditInvite = v;
  }
}, 6);
var InviteUsers;
module.link("./InviteUsers", {
  "default": function (v) {
    InviteUsers = v;
  }
}, 7);

var WrappedInviteUsers = function (_ref) {
  var rid = _ref.rid,
      tabBar = _ref.tabBar,
      onClickBack = _ref.onClickBack;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1];

  var format = useFormatDateAndTime();
  var t = useTranslation();
  var onClickClose = useTabBarClose();
  var handleEdit = useMutableCallback(function () {
    return setEditing(true);
  });
  var onClickBackEditing = useMutableCallback(function () {
    return setEditing(false);
  });
  var findOrCreateInvite = useEndpoint('POST', 'findOrCreateInvite');

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      _useState4$ = _useState4[0],
      _useState4$$days = _useState4$.days,
      days = _useState4$$days === void 0 ? 1 : _useState4$$days,
      _useState4$$maxUses = _useState4$.maxUses,
      maxUses = _useState4$$maxUses === void 0 ? 0 : _useState4$$maxUses,
      setDayAndMaxUses = _useState4[1];

  var setParams = useMutableCallback(function (args) {
    setDayAndMaxUses(args);
    setEditing(false);
  });

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      state = _useState6[0],
      setState = _useState6[1];

  var linkExpirationText = useMutableCallback(function (data) {
    if (!data) {
      return '';
    }

    if (data.expires) {
      var expiration = new Date(data.expires);

      if (data.maxUses) {
        var usesLeft = data.maxUses - data.uses;
        return t('Your_invite_link_will_expire_on__date__or_after__usesLeft__uses', {
          date: format(expiration),
          usesLeft: usesLeft
        });
      }

      return t('Your_invite_link_will_expire_on__date__', {
        date: format(expiration)
      });
    }

    if (data.maxUses) {
      var _usesLeft = data.maxUses - data.uses;

      return t('Your_invite_link_will_expire_after__usesLeft__uses', {
        usesLeft: _usesLeft
      });
    }

    return t('Your_invite_link_will_never_expire');
  });
  useEffect(function () {
    if (editing) {
      return;
    }

    (function () {
      function _callee() {
        var data;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(findOrCreateInvite({
                    rid: rid,
                    days: days,
                    maxUses: maxUses
                  }));

                case 3:
                  data = _context.sent;
                  setState({
                    url: data.url,
                    caption: linkExpirationText(data)
                  });
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);
                  setState({
                    error: _context.t0
                  });

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 7]], Promise);
      }

      return _callee;
    })()();
  }, [findOrCreateInvite, editing, linkExpirationText, rid, days, maxUses]);

  if (editing) {
    return /*#__PURE__*/React.createElement(EditInvite, {
      onClickBack: onClickBackEditing,
      linkText: state === null || state === void 0 ? void 0 : state.url,
      captionText: state === null || state === void 0 ? void 0 : state.caption,
      rid: rid,
      tabBar: tabBar,
      error: state === null || state === void 0 ? void 0 : state.error,
      setParams: setParams,
      days: days,
      maxUses: maxUses
    });
  }

  return /*#__PURE__*/React.createElement(InviteUsers, {
    error: state === null || state === void 0 ? void 0 : state.error,
    onClickClose: onClickClose,
    onClickBack: onClickBack,
    onClickEdit: handleEdit,
    linkText: state === null || state === void 0 ? void 0 : state.url,
    captionText: state === null || state === void 0 ? void 0 : state.caption
  });
};

module.exportDefault(WrappedInviteUsers);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/InviteUsers/fc4165d640255c5d0a65ce5b795dec296e0f91c0.map
