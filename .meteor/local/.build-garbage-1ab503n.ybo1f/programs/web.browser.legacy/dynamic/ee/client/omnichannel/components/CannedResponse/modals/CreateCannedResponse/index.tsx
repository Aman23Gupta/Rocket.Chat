function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/index.tsx                               //
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
var React, memo, useCallback, useEffect, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);
var usePermission;
module.link("../../../../../../../client/contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 1);
var useSetModal;
module.link("../../../../../../../client/contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 2);
var useEndpoint;
module.link("../../../../../../../client/contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../../../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var useTranslation;
module.link("../../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useForm;
module.link("../../../../../../../client/hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 6);
var CreateCannedResponseModal;
module.link("./CreateCannedResponseModal", {
  "default": function (v) {
    CreateCannedResponseModal = v;
  }
}, 7);

var WrapCreateCannedResponseModal = function (_ref) {
  var data = _ref.data,
      reloadCannedList = _ref.reloadCannedList;
  var t = useTranslation();
  var closeModal = useSetModal();
  var dispatchToastMessage = useToastMessageDispatch();
  var saveCannedResponse = useEndpoint('POST', 'canned-responses');
  var hasManagerPermission = usePermission('view-all-canned-responses');
  var hasMonitorPermission = usePermission('save-department-canned-responses');
  var form = useForm({
    _id: data ? data._id : '',
    shortcut: data ? data.shortcut : '',
    text: data ? data.text : '',
    tags: data !== null && data !== void 0 && data.tags && Array.isArray(data.tags) ? data.tags.map(function (tag) {
      return {
        label: tag,
        value: tag
      };
    }) : [],
    scope: data ? data.scope : 'user',
    departmentId: data !== null && data !== void 0 && data.departmentId ? data.departmentId : ''
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
      var _id, shortcut, text, scope, tags, departmentId, mappedTags;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _id = values._id, shortcut = values.shortcut, text = values.text, scope = values.scope, tags = values.tags, departmentId = values.departmentId;
                mappedTags = tags.map(function (tag) {
                  return _typeof(tag) === 'object' ? tag === null || tag === void 0 ? void 0 : tag.value : tag;
                });
                _context.next = 5;
                return _regeneratorRuntime.awrap(saveCannedResponse(_objectSpread(_objectSpread(_objectSpread({}, _id && {
                  _id: _id
                }), {}, {
                  shortcut: shortcut,
                  text: text,
                  scope: scope
                }, tags.length > 0 && {
                  tags: mappedTags
                }), departmentId && {
                  departmentId: departmentId.value
                })));

              case 5:
                dispatchToastMessage({
                  type: 'success',
                  message: t(_id ? 'Canned_Response_Updated' : 'Canned_Response_Created')
                });
                closeModal(null);
                reloadCannedList === null || reloadCannedList === void 0 ? void 0 : reloadCannedList();
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 10]], Promise);
    }

    return _callee;
  }(), [values, saveCannedResponse, dispatchToastMessage, t, closeModal, reloadCannedList]);

  var onPreview = function () {
    setPreview(!preview);
  };

  return /*#__PURE__*/React.createElement(CreateCannedResponseModal, {
    isManager: hasManagerPermission,
    isMonitor: hasMonitorPermission,
    values: values,
    handlers: handlers,
    errors: errors,
    hasUnsavedChanges: hasUnsavedChanges,
    radioHandlers: radioHandlers,
    radioDescription: radioDescription,
    onClose: closeModal,
    onSave: onSave,
    onPreview: onPreview,
    previewState: preview
  });
};

module.exportDefault( /*#__PURE__*/memo(WrapCreateCannedResponseModal));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/933765926df5f10f8d62b6cfbec52a74258c28c4.map
