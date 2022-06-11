function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/invites/InviteRow.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var Button, Icon, Box;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var useMediaQuery;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery: function (v) {
    useMediaQuery = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var GenericTableCell, GenericTableRow;
module.link("../../../components/GenericTable", {
  GenericTableCell: function (v) {
    GenericTableCell = v;
  },
  GenericTableRow: function (v) {
    GenericTableRow = v;
  }
}, 3);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 6);
var useTimeFromNow;
module.link("../../../hooks/useTimeFromNow", {
  useTimeFromNow: function (v) {
    useTimeFromNow = v;
  }
}, 7);

var isExpired = function (expires) {
  if (expires && expires.getTime() < new Date().getTime()) {
    return true;
  }

  return false;
};

var InviteRow = function (_ref) {
  var _id = _ref._id,
      createdAt = _ref.createdAt,
      expires = _ref.expires,
      uses = _ref.uses,
      maxUses = _ref.maxUses,
      onRemove = _ref.onRemove;
  var t = useTranslation();
  var formatDateAndTime = useFormatDateAndTime();
  var removeInvite = useEndpoint('DELETE', "removeInvite/" + _id);
  var getTimeFromNow = useTimeFromNow(false);

  var daysToExpire = function (expires) {
    if (expires) {
      if (isExpired(expires)) {
        return t('Expired');
      }

      return getTimeFromNow(expires);
    }

    return t('Never');
  };

  var maxUsesLeft = function (maxUses, uses) {
    if (maxUses > 0) {
      if (uses >= maxUses) {
        return 0;
      }

      return maxUses - uses;
    }

    return t('Unlimited');
  };

  var handleRemoveButtonClick = function () {
    function _callee(event) {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.stopPropagation();
                onRemove(removeInvite);

              case 2:
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

  var notSmall = useMediaQuery('(min-width: 768px)');
  return /*#__PURE__*/React.createElement(GenericTableRow, null, /*#__PURE__*/React.createElement(GenericTableCell, null, /*#__PURE__*/React.createElement(Box, {
    color: "hint",
    fontScale: "p2"
  }, _id)), notSmall && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTableCell, null, formatDateAndTime(new Date(createdAt))), /*#__PURE__*/React.createElement(GenericTableCell, null, daysToExpire(expires ? new Date(expires) : null)), /*#__PURE__*/React.createElement(GenericTableCell, null, uses), /*#__PURE__*/React.createElement(GenericTableCell, null, maxUsesLeft(maxUses, uses))), /*#__PURE__*/React.createElement(GenericTableCell, null, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    danger: true,
    small: true,
    square: true,
    onClick: handleRemoveButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cross",
    size: "x20"
  }))));
};

module.exportDefault(InviteRow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/invites/5fdbda480c215b1fed3851e318252f115a32cf5f.map
