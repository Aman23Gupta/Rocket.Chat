function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponseEdit.tsx                                                        //
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

var _typeof;

module.link("@babel/runtime/helpers/typeof", {
  default: function (v) {
    _typeof = v;
  }
}, 2);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 3);
var Button, ButtonGroup, Icon, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, memo, useState, useMemo, useEffect, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 2);
var Page;
module.link("../../../../client/components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var usePermission;
module.link("../../../../client/contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 4);
var useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 5);
var useEndpoint;
module.link("../../../../client/contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 6);
var useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 7);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var useForm;
module.link("../../../../client/hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 9);
var CannedResponseForm;
module.link("./components/cannedResponseForm", {
  "default": function (v) {
    CannedResponseForm = v;
  }
}, 10);

var CannedResponseEdit = function (_ref) {
  var _data$cannedResponse, _data$cannedResponse2, _departmentData$depar;

  var data = _ref.data,
      reload = _ref.reload,
      totalDataReload = _ref.totalDataReload,
      _ref$isNew = _ref.isNew,
      isNew = _ref$isNew === void 0 ? false : _ref$isNew,
      _ref$departmentData = _ref.departmentData,
      departmentData = _ref$departmentData === void 0 ? {} : _ref$departmentData;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var Route = useRoute('omnichannel-canned-responses');
  var handleReturn = useMutableCallback(function () {
    return Route.push({
      context: ''
    });
  });
  var saveCannedResponse = useEndpoint('POST', 'canned-responses');
  var hasManagerPermission = usePermission('view-all-canned-responses');
  var hasMonitorPermission = usePermission('save-department-canned-responses');
  var form = useForm({
    _id: data !== null && data !== void 0 && data.cannedResponse ? data.cannedResponse._id : '',
    shortcut: data ? data.cannedResponse.shortcut : '',
    text: data ? data.cannedResponse.text : '',
    tags: data !== null && data !== void 0 && (_data$cannedResponse = data.cannedResponse) !== null && _data$cannedResponse !== void 0 && _data$cannedResponse.tags && Array.isArray(data.cannedResponse.tags) ? data.cannedResponse.tags.map(function (tag) {
      return {
        label: tag,
        value: tag
      };
    }) : [],
    scope: data ? data.cannedResponse.scope : 'user',
    departmentId: data !== null && data !== void 0 && (_data$cannedResponse2 = data.cannedResponse) !== null && _data$cannedResponse2 !== void 0 && _data$cannedResponse2.departmentId ? {
      value: data.cannedResponse.departmentId,
      label: departmentData === null || departmentData === void 0 ? void 0 : (_departmentData$depar = departmentData.department) === null || _departmentData$depar === void 0 ? void 0 : _departmentData$depar.name
    } : ''
  });
  var values = form.values,
      handlers = form.handlers,
      hasUnsavedChanges = form.hasUnsavedChanges;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var _useState3 = useState(t('Canned_Response_Sharing_Private_Description')),
      _useState4 = _slicedToArray(_useState3, 2),
      radioDescription = _useState4[0],
      setRadioDescription = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      preview = _useState6[0],
      setPreview = _useState6[1];

  var listErrors = useMemo(function () {
    var empty = {};

    for (var _i = 0, _Object$entries = Object.entries(values); _i < _Object$entries.length; _i++) {
      var _ref2 = _Object$entries[_i];

      var _ref3 = _slicedToArray(_ref2, 2);

      var key = _ref3[0];
      var value = _ref3[1];

      if (['shortcut', 'text'].includes(key) && !value) {
        empty[key] = t('Field_required');
      }
    }

    if (values.scope === 'department' && !values.departmentId) {
      empty.departmentId = t('Field_required');
    }

    return empty;
  }, [t, values]);
  useEffect(function () {
    setErrors(listErrors);
  }, [values.shortcut, values.text, values.departmentId, listErrors]);
  var radioHandlers = {
    setPublic: function () {
      handlers.handleScope('global');
      handlers.handleDepartmentId('');
      setRadioDescription(t('Canned_Response_Sharing_Public_Description'));
    },
    setDepartment: function () {
      handlers.handleScope('department');
      setRadioDescription(t('Canned_Response_Sharing_Department_Description'));
    },
    setPrivate: function () {
      handlers.handleScope('user');
      handlers.handleDepartmentId('');
      setRadioDescription(t('Canned_Response_Sharing_Private_Description'));
    }
  };
  var onSave = useCallback(function () {
    function _callee() {
      var _id, _shortcut, _text, _scope, tags, _departmentId, mappedTags;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _id = values._id, _shortcut = values.shortcut, _text = values.text, _scope = values.scope, tags = values.tags, _departmentId = values.departmentId;
                mappedTags = tags.map(function (tag) {
                  return _typeof(tag) === 'object' ? tag === null || tag === void 0 ? void 0 : tag.value : tag;
                });
                _context.next = 5;
                return _regeneratorRuntime.awrap(saveCannedResponse(_objectSpread(_objectSpread(_objectSpread({}, _id && {
                  _id: _id
                }), {}, {
                  shortcut: _shortcut,
                  text: _text,
                  scope: _scope
                }, mappedTags.length > 0 && {
                  tags: mappedTags
                }), _departmentId && {
                  departmentId: _departmentId.value
                })));

              case 5:
                dispatchToastMessage({
                  type: 'success',
                  message: t(_id ? 'Canned_Response_Updated' : 'Canned_Response_Created')
                });
                Route.push({
                  context: ''
                });
                reload();
                totalDataReload();
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 11]], Promise);
    }

    return _callee;
  }(), [values, saveCannedResponse, dispatchToastMessage, t, Route, reload, totalDataReload]);

  var onPreview = function () {
    setPreview(!preview);
  };

  var shortcut = values.shortcut,
      text = values.text,
      scope = values.scope,
      departmentId = values.departmentId;
  var checkDepartment = scope !== 'department' || scope === 'department' && departmentId;
  var canSave = shortcut && text && checkDepartment;
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: isNew ? t('New_CannedResponse') : t('Edit_CannedResponse')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), " ", t('Back')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    mie: "none",
    flexGrow: 1,
    disabled: !hasUnsavedChanges || !canSave,
    onClick: onSave
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, {
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    w: "full",
    alignSelf: "center",
    maxWidth: "x600",
    is: "form",
    autoComplete: "off"
  }, /*#__PURE__*/React.createElement(CannedResponseForm, {
    isManager: hasManagerPermission,
    isMonitor: hasMonitorPermission,
    values: values,
    handlers: handlers,
    errors: errors,
    radioHandlers: radioHandlers,
    radioDescription: radioDescription,
    onPreview: onPreview,
    previewState: preview
  }))));
};

module.exportDefault( /*#__PURE__*/memo(CannedResponseEdit));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/3162b757fe235fed50957209fa1721061f6e0334.map
