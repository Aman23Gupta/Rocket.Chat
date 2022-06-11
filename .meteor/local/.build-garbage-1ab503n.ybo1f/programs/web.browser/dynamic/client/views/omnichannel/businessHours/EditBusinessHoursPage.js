function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/EditBusinessHoursPage.js                                                     //
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
let Button, ButtonGroup, Callout;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Callout(v) {
    Callout = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useRef, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  },

  useMemo(v) {
    useMemo = v;
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
let PageSkeleton;
module.link("../../../components/PageSkeleton", {
  default(v) {
    PageSkeleton = v;
  }

}, 4);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 5);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 6);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 7);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 9);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 10);
let BusinessHoursFormContainer;
module.link("./BusinessHoursFormContainer", {
  default(v) {
    BusinessHoursFormContainer = v;
  }

}, 11);
let useIsSingleBusinessHours;
module.link("./BusinessHoursRouter", {
  useIsSingleBusinessHours(v) {
    useIsSingleBusinessHours = v;
  }

}, 12);
let mapBusinessHoursForm;
module.link("./mapBusinessHoursForm", {
  mapBusinessHoursForm(v) {
    mapBusinessHoursForm = v;
  }

}, 13);

const EditBusinessHoursPage = _ref => {
  let {
    id,
    type
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const isSingleBH = useIsSingleBusinessHours();
  const {
    value: data,
    phase: state
  } = useEndpointData('livechat/business-hour', useMemo(() => ({
    _id: id,
    type
  }), [id, type]));
  const saveData = useRef({
    form: {}
  });
  const [hasChanges, setHasChanges] = useState(false);
  const save = useMethod('livechat:saveBusinessHour');
  const deleteBH = useMethod('livechat:removeBusinessHour');
  const router = useRoute('omnichannel-businessHours');
  const handleSave = useMutableCallback(async () => {
    if (state !== AsyncStatePhase.RESOLVED || !data.success) {
      return;
    }

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

    if (data.businessHour.type !== 'default' && multiple.name === '') {
      return dispatchToastMessage({
        type: 'error',
        message: t('error-the-field-is-required', {
          field: t('Name')
        })
      });
    }

    const mappedForm = mapBusinessHoursForm(form, data.businessHour);
    const departmentsToApplyBusinessHour = (departments === null || departments === void 0 ? void 0 : departments.map(dep => dep.value).join(',')) || '';

    try {
      const payload = _objectSpread(_objectSpread(_objectSpread({}, data.businessHour), multiple), {}, {
        departmentsToApplyBusinessHour: departmentsToApplyBusinessHour !== null && departmentsToApplyBusinessHour !== void 0 ? departmentsToApplyBusinessHour : '',
        timezoneName: timezoneName || data.businessHour.timezone.name,
        workHours: mappedForm
      });

      await save(payload);
      dispatchToastMessage({
        type: 'success',
        message: t('Business_hours_updated')
      });
      router.push({});
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const handleDelete = useMutableCallback(async () => {
    if (type !== 'custom') {
      return;
    }

    try {
      await deleteBH(id, type);
      dispatchToastMessage({
        type: 'success',
        message: t('Business_Hour_Removed')
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

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  if (state === AsyncStatePhase.REJECTED || AsyncStatePhase.RESOLVED && !data.businessHour) {
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
      title: t('Business_Hours')
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: handleReturn
    }, t('Back'))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Callout, {
      type: "danger"
    }, t('Error'))));
  }

  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Business_Hours')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, !isSingleBH && /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, t('Back')), type === 'custom' && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleDelete
  }, t('Delete')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: !hasChanges
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(BusinessHoursFormContainer, {
    data: data.businessHour,
    saveRef: saveData,
    onChange: setHasChanges
  })));
};

module.exportDefault(EditBusinessHoursPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/d5a7e8141dae00cc47c628fc001d75607a10b4cd.map
