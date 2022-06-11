function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/BusinessHoursRow.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Table;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  }

}, 0);
let React, memo, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useRoute;
module.link("../../../client/contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 2);
let useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let RemoveBusinessHourButton;
module.link("./RemoveBusinessHourButton", {
  default(v) {
    RemoveBusinessHourButton = v;
  }

}, 4);

function BusinessHoursRow(props) {
  const {
    _id,
    name,
    timezone,
    workHours,
    active,
    type,
    reload
  } = props;
  const t = useTranslation();
  const bhRoute = useRoute('omnichannel-businessHours');

  const handleClick = () => {
    bhRoute.push({
      context: 'edit',
      type,
      id: _id
    });
  };

  const handleKeyDown = e => {
    if (!['Enter', 'Space'].includes(e.nativeEvent.code)) {
      return;
    }

    handleClick();
  };

  const openDays = useMemo(() => workHours.reduce((acc, day) => {
    if (day.open) {
      acc.push(t(day.day));
    }

    return acc;
  }, []), [t, workHours]);

  const preventClickPropagation = e => {
    e.stopPropagation();
  };

  return /*#__PURE__*/React.createElement(Table.Row, {
    key: _id,
    role: "link",
    action: true,
    tabIndex: 0,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, name || t('Default')), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, t(timezone.name)), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, openDays.join(', ')), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, active ? t('Yes') : t('No')), name && /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true,
    onClick: preventClickPropagation
  }, /*#__PURE__*/React.createElement(RemoveBusinessHourButton, {
    _id: _id,
    reload: reload,
    type: type
  })));
}

module.exportDefault( /*#__PURE__*/memo(BusinessHoursRow));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/797cec1c779b65d6937af7fb3e6ddc85f5a4d771.map
