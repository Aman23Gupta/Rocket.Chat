function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/BusiestChatTimesSection.tsx                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Select;
module.link("@rocket.chat/fuselage", {
  Select(v) {
    Select = v;
  }

}, 0);
let React, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let Section;
module.link("../Section", {
  default(v) {
    Section = v;
  }

}, 3);
let ContentForDays;
module.link("./ContentForDays", {
  default(v) {
    ContentForDays = v;
  }

}, 4);
let ContentForHours;
module.link("./ContentForHours", {
  default(v) {
    ContentForHours = v;
  }

}, 5);

const BusiestChatTimesSection = _ref => {
  let {
    timezone
  } = _ref;
  const t = useTranslation();
  const [timeUnit, setTimeUnit] = useState('hours');
  const timeUnitOptions = useMemo(() => [['hours', t('Hours')], ['days', t('Days')]], [t]);
  const [displacement, setDisplacement] = useState(0);

  const handleTimeUnitChange = timeUnit => {
    setTimeUnit(timeUnit);
    setDisplacement(0);
  };

  const handlePreviousDateClick = () => setDisplacement(displacement => displacement + 1);

  const handleNextDateClick = () => setDisplacement(displacement => displacement - 1);

  const Content = {
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/98311ac2e4af4eec8fa6e502d2de322789be2abc.map
