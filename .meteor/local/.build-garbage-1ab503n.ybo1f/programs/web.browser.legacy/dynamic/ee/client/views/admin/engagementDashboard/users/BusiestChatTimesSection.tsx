function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/BusiestChatTimesSection.tsx                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Select;
module.link("@rocket.chat/fuselage", {
  Select: function (v) {
    Select = v;
  }
}, 0);
var React, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var Section;
module.link("../Section", {
  "default": function (v) {
    Section = v;
  }
}, 3);
var ContentForDays;
module.link("./ContentForDays", {
  "default": function (v) {
    ContentForDays = v;
  }
}, 4);
var ContentForHours;
module.link("./ContentForHours", {
  "default": function (v) {
    ContentForHours = v;
  }
}, 5);

var BusiestChatTimesSection = function (_ref) {
  var timezone = _ref.timezone;
  var t = useTranslation();

  var _useState = useState('hours'),
      _useState2 = _slicedToArray(_useState, 2),
      timeUnit = _useState2[0],
      setTimeUnit = _useState2[1];

  var timeUnitOptions = useMemo(function () {
    return [['hours', t('Hours')], ['days', t('Days')]];
  }, [t]);

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      displacement = _useState4[0],
      setDisplacement = _useState4[1];

  var handleTimeUnitChange = function (timeUnit) {
    setTimeUnit(timeUnit);
    setDisplacement(0);
  };

  var handlePreviousDateClick = function () {
    return setDisplacement(function (displacement) {
      return displacement + 1;
    });
  };

  var handleNextDateClick = function () {
    return setDisplacement(function (displacement) {
      return displacement - 1;
    });
  };

  var Content = {
    hours: ContentForHours,
    days: ContentForDays
  }[timeUnit];
  return /*#__PURE__*/React.createElement(Section, {
    title: t('When_is_the_chat_busier?'),
    filter: /*#__PURE__*/React.createElement(Select, {
      options: timeUnitOptions,
      value: timeUnit,
      onChange: handleTimeUnitChange
    })
  }, /*#__PURE__*/React.createElement(Content, {
    displacement: displacement,
    onPreviousDateClick: handlePreviousDateClick,
    onNextDateClick: handleNextDateClick,
    timezone: timezone
  }));
};

module.exportDefault(BusiestChatTimesSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/32149f7dceb6224d62fe2d5c1a2e44210f8f3673.map
