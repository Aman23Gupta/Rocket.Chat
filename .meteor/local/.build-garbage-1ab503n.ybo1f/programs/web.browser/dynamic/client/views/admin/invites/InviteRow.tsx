function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/invites/InviteRow.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, Icon, Box;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let useMediaQuery;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery(v) {
    useMediaQuery = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let GenericTableCell, GenericTableRow;
module.link("../../../components/GenericTable", {
  GenericTableCell(v) {
    GenericTableCell = v;
  },

  GenericTableRow(v) {
    GenericTableRow = v;
  }

}, 3);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 6);
let useTimeFromNow;
module.link("../../../hooks/useTimeFromNow", {
  useTimeFromNow(v) {
    useTimeFromNow = v;
  }

}, 7);

const isExpired = expires => {
  if (expires && expires.getTime() < new Date().getTime()) {
    return true;
  }

  return false;
};

const InviteRow = _ref => {
  let {
    _id,
    createdAt,
    expires,
    uses,
    maxUses,
    onRemove
  } = _ref;
  const t = useTranslation();
  const formatDateAndTime = useFormatDateAndTime();
  const removeInvite = useEndpoint('DELETE', "removeInvite/".concat(_id));
  const getTimeFromNow = useTimeFromNow(false);

  const daysToExpire = expires => {
    if (expires) {
      if (isExpired(expires)) {
        return t('Expired');
      }

      return getTimeFromNow(expires);
    }

    return t('Never');
  };

  const maxUsesLeft = (maxUses, uses) => {
    if (maxUses > 0) {
      if (uses >= maxUses) {
        return 0;
      }

      return maxUses - uses;
    }

    return t('Unlimited');
  };

  const handleRemoveButtonClick = async event => {
    event.stopPropagation();
    onRemove(removeInvite);
  };

  const notSmall = useMediaQuery('(min-width: 768px)');
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
//# sourceMappingURL=/dynamic/client/views/admin/invites/ee6193b9f19641a01c3ca62b9df51ed0c289f4e8.map
