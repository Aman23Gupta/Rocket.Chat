function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/RoomEdit.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Field, TextInput, ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 3);
var hasAtLeastOnePermission;
module.link("../../../../../../app/authorization/client", {
  hasAtLeastOnePermission: function (v) {
    hasAtLeastOnePermission = v;
  }
}, 4);
var CustomFieldsForm;
module.link("../../../../../components/CustomFieldsForm", {
  "default": function (v) {
    CustomFieldsForm = v;
  }
}, 5);
var Tags;
module.link("../../../../../components/Omnichannel/Tags", {
  "default": function (v) {
    Tags = v;
  }
}, 6);
var VerticalBar;
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 7);
var useMethod;
module.link("../../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 8);
var useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 9);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 10);
var AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 11);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 12);
var useForm;
module.link("../../../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 13);
var formsSubscription;
module.link("../../../additionalForms", {
  formsSubscription: function (v) {
    formsSubscription = v;
  }
}, 14);
var FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 15);
var initialValuesRoom = {
  topic: '',
  tags: [],
  livechatData: {},
  priorityId: ''
};

var getInitialValuesRoom = function (room) {
  if (!room) {
    return initialValuesRoom;
  }

  var topic = room.topic,
      tags = room.tags,
      livechatData = room.livechatData,
      priorityId = room.priorityId;
  return {
    topic: topic !== null && topic !== void 0 ? topic : '',
    tags: tags !== null && tags !== void 0 ? tags : [],
    livechatData: livechatData !== null && livechatData !== void 0 ? livechatData : {},
    priorityId: priorityId !== null && priorityId !== void 0 ? priorityId : ''
  };
};

function RoomEdit(_ref) {
  var room = _ref.room,
      visitor = _ref.visitor,
      reload = _ref.reload,
      reloadInfo = _ref.reloadInfo,
      close = _ref.close;
  var t = useTranslation();

  var _useForm = useForm(getInitialValuesRoom(room)),
      valuesRoom = _useForm.values,
      handlersRoom = _useForm.handlers,
      hasUnsavedChangesRoom = _useForm.hasUnsavedChanges;

  var canViewCustomFields = function () {
    return hasAtLeastOnePermission(['view-livechat-room-customfields', 'edit-livechat-room-customfields']);
  };

  var handleTopic = handlersRoom.handleTopic,
      handleTags = handlersRoom.handleTags,
      handlePriorityId = handlersRoom.handlePriorityId;
  var topic = valuesRoom.topic,
      tags = valuesRoom.tags,
      priorityId = valuesRoom.priorityId;
  var forms = useSubscription(formsSubscription);
  var _forms$usePrioritiesS = forms.usePrioritiesSelect,
      usePrioritiesSelect = _forms$usePrioritiesS === void 0 ? function () {} : _forms$usePrioritiesS;
  var PrioritiesSelect = usePrioritiesSelect();

  var _useForm2 = useForm({
    livechatData: valuesRoom.livechatData
  }),
      valueCustom = _useForm2.values,
      handleValueCustom = _useForm2.handlers,
      hasUnsavedChangesCustomFields = _useForm2.hasUnsavedChanges;

  var handleLivechatData = handleValueCustom.handleLivechatData;
  var livechatData = valueCustom.livechatData;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      customFieldsError = _useState2[0],
      setCustomFieldsError = _useState2[1];

  var _useEndpointData = useEndpointData('livechat/custom-fields'),
      allCustomFields = _useEndpointData.value,
      stateCustomFields = _useEndpointData.phase;

  var _useEndpointData2 = useEndpointData('livechat/priorities.list'),
      _useEndpointData2$val = _useEndpointData2.value,
      prioritiesResult = _useEndpointData2$val === void 0 ? {} : _useEndpointData2$val,
      statePriorities = _useEndpointData2.phase;

  var jsonConverterToValidFormat = function (customFields) {
    var jsonObj = {};
    customFields.forEach(function (_ref2) {
      var _id = _ref2._id,
          label = _ref2.label,
          visibility = _ref2.visibility,
          options = _ref2.options,
          scope = _ref2.scope,
          defaultValue = _ref2.defaultValue,
          required = _ref2.required;
      visibility === 'visible' & scope === 'room' && (jsonObj[_id] = {
        label: label,
        type: options ? 'select' : 'text',
        required: required,
        defaultValue: defaultValue,
        options: options && options.split(',').map(function (item) {
          return item.trim();
        })
      });
    });
    return jsonObj;
  };

  var jsonCustomField = useMemo(function () {
    return allCustomFields && allCustomFields.customFields ? jsonConverterToValidFormat(allCustomFields.customFields) : {};
  }, [allCustomFields]);
  var dispatchToastMessage = useToastMessageDispatch();
  var saveRoom = useMethod('livechat:saveInfo');
  var handleSave = useMutableCallback(function () {
    function _callee(e) {
      var userData, roomData;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                userData = {
                  _id: visitor._id
                };
                roomData = _objectSpread({
                  _id: room._id,
                  topic: topic,
                  tags: tags.sort(),
                  livechatData: livechatData
                }, priorityId && {
                  priorityId: priorityId
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

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }());
  var formIsValid = (hasUnsavedChangesRoom || hasUnsavedChangesCustomFields) && customFieldsError.length === 0;

  if ([stateCustomFields, statePriorities].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  var priorities = prioritiesResult.priorities;
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/e3618f315c19f2f8c60ce194d19c1cec9c0db1f6.map
