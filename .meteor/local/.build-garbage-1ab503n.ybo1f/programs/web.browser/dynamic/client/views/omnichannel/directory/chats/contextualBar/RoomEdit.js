function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/RoomEdit.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Field, TextInput, ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 3);
let hasAtLeastOnePermission;
module.link("../../../../../../app/authorization/client", {
  hasAtLeastOnePermission(v) {
    hasAtLeastOnePermission = v;
  }

}, 4);
let CustomFieldsForm;
module.link("../../../../../components/CustomFieldsForm", {
  default(v) {
    CustomFieldsForm = v;
  }

}, 5);
let Tags;
module.link("../../../../../components/Omnichannel/Tags", {
  default(v) {
    Tags = v;
  }

}, 6);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 7);
let useMethod;
module.link("../../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 8);
let useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 9);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 10);
let AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 11);
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 12);
let useForm;
module.link("../../../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 13);
let formsSubscription;
module.link("../../../additionalForms", {
  formsSubscription(v) {
    formsSubscription = v;
  }

}, 14);
let FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 15);
const initialValuesRoom = {
  topic: '',
  tags: [],
  livechatData: {},
  priorityId: ''
};

const getInitialValuesRoom = room => {
  if (!room) {
    return initialValuesRoom;
  }

  const {
    topic,
    tags,
    livechatData,
    priorityId
  } = room;
  return {
    topic: topic !== null && topic !== void 0 ? topic : '',
    tags: tags !== null && tags !== void 0 ? tags : [],
    livechatData: livechatData !== null && livechatData !== void 0 ? livechatData : {},
    priorityId: priorityId !== null && priorityId !== void 0 ? priorityId : ''
  };
};

function RoomEdit(_ref) {
  let {
    room,
    visitor,
    reload,
    reloadInfo,
    close
  } = _ref;
  const t = useTranslation();
  const {
    values: valuesRoom,
    handlers: handlersRoom,
    hasUnsavedChanges: hasUnsavedChangesRoom
  } = useForm(getInitialValuesRoom(room));

  const canViewCustomFields = () => hasAtLeastOnePermission(['view-livechat-room-customfields', 'edit-livechat-room-customfields']);

  const {
    handleTopic,
    handleTags,
    handlePriorityId
  } = handlersRoom;
  const {
    topic,
    tags,
    priorityId
  } = valuesRoom;
  const forms = useSubscription(formsSubscription);
  const {
    usePrioritiesSelect = () => {}
  } = forms;
  const PrioritiesSelect = usePrioritiesSelect();
  const {
    values: valueCustom,
    handlers: handleValueCustom,
    hasUnsavedChanges: hasUnsavedChangesCustomFields
  } = useForm({
    livechatData: valuesRoom.livechatData
  });
  const {
    handleLivechatData
  } = handleValueCustom;
  const {
    livechatData
  } = valueCustom;
  const [customFieldsError, setCustomFieldsError] = useState([]);
  const {
    value: allCustomFields,
    phase: stateCustomFields
  } = useEndpointData('livechat/custom-fields');
  const {
    value: prioritiesResult = {},
    phase: statePriorities
  } = useEndpointData('livechat/priorities.list');

  const jsonConverterToValidFormat = customFields => {
    const jsonObj = {};
    customFields.forEach(_ref2 => {
      let {
        _id,
        label,
        visibility,
        options,
        scope,
        defaultValue,
        required
      } = _ref2;
      visibility === 'visible' & scope === 'room' && (jsonObj[_id] = {
        label,
        type: options ? 'select' : 'text',
        required,
        defaultValue,
        options: options && options.split(',').map(item => item.trim())
      });
    });
    return jsonObj;
  };

  const jsonCustomField = useMemo(() => allCustomFields && allCustomFields.customFields ? jsonConverterToValidFormat(allCustomFields.customFields) : {}, [allCustomFields]);
  const dispatchToastMessage = useToastMessageDispatch();
  const saveRoom = useMethod('livechat:saveInfo');
  const handleSave = useMutableCallback(async e => {
    e.preventDefault();
    const userData = {
      _id: visitor._id
    };

    const roomData = _objectSpread({
      _id: room._id,
      topic,
      tags: tags.sort(),
      livechatData
    }, priorityId && {
      priorityId
    });

    try {
      saveRoom(userData, roomData);
      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      reload && reload();
      reloadInfo && reloadInfo();
      close();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const formIsValid = (hasUnsavedChangesRoom || hasUnsavedChangesCustomFields) && customFieldsError.length === 0;

  if ([stateCustomFields, statePriorities].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  const {
    priorities
  } = prioritiesResult;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, {
    is: "form"
  }, canViewCustomFields() && allCustomFields && /*#__PURE__*/React.createElement(CustomFieldsForm, {
    jsonCustomFields: jsonCustomField,
    customFieldsData: livechatData,
    setCustomFieldsData: handleLivechatData,
    setCustomFieldsError: setCustomFieldsError
  }), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Topic')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: topic,
    onChange: handleTopic
  }))), Tags && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Tags, {
    tags: tags,
    handler: handleTags
  })), PrioritiesSelect && priorities && priorities.length > 0 && /*#__PURE__*/React.createElement(PrioritiesSelect, {
    value: priorityId,
    label: t('Priority'),
    options: priorities,
    handler: handlePriorityId
  })), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true
  }, /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    onClick: close
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    mie: "none",
    flexGrow: 1,
    onClick: handleSave,
    disabled: !formIsValid,
    primary: true
  }, t('Save')))));
}

module.exportDefault(RoomEdit);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/e866c60fc08c230569c4bf299b219b1d283516ee.map
