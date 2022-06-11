function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/NewBusinessHoursPage.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["departments"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useRef, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let DAYS_OF_WEEK;
module.link("./BusinessHoursForm", {
  DAYS_OF_WEEK(v) {
    DAYS_OF_WEEK = v;
  }

}, 8);
let BusinessHoursFormContainer;
module.link("./BusinessHoursFormContainer", {
  default(v) {
    BusinessHoursFormContainer = v;
  }

}, 9);
let mapBusinessHoursForm;
module.link("./mapBusinessHoursForm", {
  mapBusinessHoursForm(v) {
    mapBusinessHoursForm = v;
  }

}, 10);
const closedDays = ['Saturday', 'Sunday'];

const createDefaultBusinessHours = () => ({
  name: '',
  workHours: DAYS_OF_WEEK.map(day => ({
    day,
    start: {
      time: '00:00'
    },
    finish: {
      time: '00:00'
    },
    open: !closedDays.includes(day)
  })),
  departments: [],
  timezoneName: 'America/Sao_Paulo',
  departmentsToApplyBusinessHour: ''
});

const defaultBusinessHour = createDefaultBusinessHours();

const NewBusinessHoursPage = () => {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [hasChanges, setHasChanges] = useState(false);
  const saveData = useRef({
    form: {}
  });
  const save = useMethod('livechat:saveBusinessHour');
  const router = useRoute('omnichannel-businessHours');
  const handleSave = useMutableCallback(async () => {
    const {
      current: {
        form,
        multiple: {
          departments
        } = {},
        timezone: {
          name: timezoneName
        } = {}
      }
    } = saveData,
          multiple = _objectWithoutProperties(saveData.current.multiple, _excluded);

    if (multiple.name === '') {
      return dispatchToastMessage({
        type: 'error',
        message: t('error-the-field-is-required', {
          field: t('Name')
        })
      });
    }

    const mappedForm = mapBusinessHoursForm(form, defaultBusinessHour);
    const departmentsToApplyBusinessHour = (departments === null || departments === void 0 ? void 0 : departments.map(dep => dep.value).join(',')) || '';

    try {
      const payload = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultBusinessHour), multiple), departmentsToApplyBusinessHour && {
        departmentsToApplyBusinessHour
      }), {}, {
        timezoneName,
        workHours: mappedForm,
        type: 'custom'
      });

      await save(payload);
      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      router.push({});
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const handleReturn = useMutableCallback(() => {
    router.push({});
  });
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Business_Hours')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, t('Back')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: !hasChanges
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(BusinessHoursFormContainer, {
    data: defaultBusinessHour,
    saveRef: saveData,
    onChange: setHasChanges
  })));
};

module.exportDefault(NewBusinessHoursPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/3d0ab3e6139f60a1fd10c9920452d93b4390d55f.map
