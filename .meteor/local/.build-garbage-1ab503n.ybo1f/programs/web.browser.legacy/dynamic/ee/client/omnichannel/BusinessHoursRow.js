function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/BusinessHoursRow.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  }
}, 0);
var React, memo, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useRoute;
module.link("../../../client/contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 2);
var useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var RemoveBusinessHourButton;
module.link("./RemoveBusinessHourButton", {
  "default": function (v) {
    RemoveBusinessHourButton = v;
  }
}, 4);

function BusinessHoursRow(props) {
  var _id = props._id,
      name = props.name,
      timezone = props.timezone,
      workHours = props.workHours,
      active = props.active,
      type = props.type,
      reload = props.reload;
  var t = useTranslation();
  var bhRoute = useRoute('omnichannel-businessHours');

  var handleClick = function () {
    bhRoute.push({
      context: 'edit',
      type: type,
      id: _id
    });
  };

  var handleKeyDown = function (e) {
    if (!['Enter', 'Space'].includes(e.nativeEvent.code)) {
      return;
    }

    handleClick();
  };

  var openDays = useMemo(function () {
    return workHours.reduce(function (acc, day) {
      if (day.open) {
        acc.push(t(day.day));
      }

      return acc;
    }, []);
  }, [t, workHours]);

  var preventClickPropagation = function (e) {
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/0ed12e873a1d7c3bef90394e3bd163c30de4f158.map
